/*
 * @Description:导航守卫
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-15 11:10:53
 * @LastEditTime: 2022-11-09 13:37:54
 */
import { isNavigationFailure } from 'vue-router'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { LOGIN_NAME, REDIRECT_NAME, type WhiteNameList } from './constant'
import { Storage } from '@/utils/Storage'
import type { Router, RouteLocationNormalized } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import { useKeepAliveStore } from '@/store/modules/keepAlive'
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum'
import { to as _to } from '@/utils/awaitTo'

nprogress.configure({ showSpinner: false }) // NProgress Configuration
const defaultRoutePath = '/dashboard/welcome'

export function createRouterGuards (router: Router, whiteNameList: WhiteNameList) {
  router.beforeEach(async (to, from, next) => {
    nprogress.start()
    const userStore = useUserStore()
    const token = Storage.get(ACCESS_TOKEN_KEY, null)
    if (token) {
      if (to.name === LOGIN_NAME) {
        next({ path: defaultRoutePath })
      } else {
        const hasRoute = router.hasRoute(to.name!)
        if (userStore.menus.length === 0) {
          // 从后台获取菜单
          const [err] = await _to(userStore.afterLogin())
          if (err) {
            userStore.resetToken()
            return next({ name: LOGIN_NAME })
          }
          if (!hasRoute) {
            // 如果该路由不存在，可能是动态注册的路由，它还没准备好，需要再重定向一次到该路由
            next({ ...to, replace: true })
          } else {
            next()
          }
        } else {
          next()
        }
      }
    } else {
      // not login
      if (whiteNameList.some((n) => n === to.name)) {
        // 在免登录名单，直接进入
        next()
      } else {
        // 保存位置，以便以后再来
        next({ name: LOGIN_NAME, query: { redirect: to.fullPath }, replace: true })
      }
    }
  })
  const getComponentName = (route:RouteLocationNormalized) => {
    console.log(route.matched.find((item) => item.name === route.name)?.components)
    return route.matched.find((item) => item.name === route.name)?.components?.default.name
  }
  router.afterEach((to, from) => {
    console.log('to', to)
    const token = Storage.get(ACCESS_TOKEN_KEY, null)
    const keepAliveStore = useKeepAliveStore()

    const toComponentName = getComponentName(to)
    console.log(toComponentName)
    if (to.meta?.keepAlive) {
      if (toComponentName) {
        keepAliveStore.add(toComponentName)
      } else {
        console.warn(
          `${to.fullPath}页面组件的keepAlive为true但未设置组件名，会导致缓存失效，请检查`
        )
      }
    } else {
      if (toComponentName) {
        keepAliveStore.remove(toComponentName)
      }
    }
    // 如果进入的是 Redirect 页面，则也将离开页面的缓存清空(刷新页面的操作)
    if (to.name === REDIRECT_NAME) {
      const fromCompName = getComponentName(from)
      fromCompName && keepAliveStore.remove(fromCompName)
    }

    // 如果用户已登出，则清空所有缓存的组件
    if (!token) {
      keepAliveStore.clear()
    }

    nprogress.done()
  })

  router.onError((error) => {
    console.log(error, '路由错误')
  })
}
