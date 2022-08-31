/*
 * @Description:导航守卫
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-15 11:10:53
 * @LastEditTime: 2022-08-31 10:45:27
 */
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { LOGIN_NAME, REDIRECT_NAME, type WhiteNameList } from './constant'
import { Storage } from '@/utils/Storage'
import type { Router } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
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
  router.afterEach(() => {
    nprogress.done()
  })

  router.onError((error) => {
    console.log(error, '路由错误')
  })
}
