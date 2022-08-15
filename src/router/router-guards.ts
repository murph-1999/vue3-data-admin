/*
 * @Description:导航守卫
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-15 11:10:53
 * @LastEditTime: 2022-08-15 11:36:14
 */
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { store } from '@/store'
import type { Router } from 'vue-router'
import { type WhiteNameList } from './constant'
nprogress.configure({ showSpinner: false }) // NProgress Configuration

export function createRouterGuards (router: Router, whiteNameList: WhiteNameList) {
  router.beforeEach((to, from) => {
    console.log(to, store.state.user, to.meta.requiresAuth)
    nprogress.start()
    if (to.meta.requiredAuth && !store.state.user) {
      // 此路由需要授权，请检查是否已登录
      // 如果没有，则重定向到登录页面
      return {
        path: '/login',
        // 保存我们所在的位置，以便以后再来
        query: { redirect: to.fullPath }
      }
    }
  })
  router.afterEach(() => {
    nprogress.done()
  })
}
