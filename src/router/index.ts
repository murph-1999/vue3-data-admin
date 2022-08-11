/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 22:30:24
 * @LastEditTime: 2022-07-30 23:12:18
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import dataCenterRoutes from './modules/data-center'
import AppLayout from '@/layout/AppLayout.vue'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { store } from '@/store'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    meta: { requiredAuth: true },
    children: [
      // 默认子路由
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/homeIndex.vue'),
        meta: { title: '首页' }

        // component: 123
      },
      ...dataCenterRoutes
    ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) => {
  console.log(store.state.user, to.meta.requiresAuth)
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
export default router
