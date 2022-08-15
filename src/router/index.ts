/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 22:30:24
 * @LastEditTime: 2022-08-15 11:40:13
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import dataCenterRoutes from './modules/data-center'
import AppLayout from '@/layout/AppLayout.vue'

import { whiteNameList } from './constant'
import { createRouterGuards } from './router-guards'
import type { App } from 'vue'
const asyncFiles = import.meta.glob('./modules/*.ts')
let permissionModules: RouteRecordRaw[] = []
for (const path in asyncFiles) {
  asyncFiles[path]().then((mod) => {
    permissionModules = permissionModules.concat(mod.default)
    console.log(permissionModules)
  })
}
const routes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: AppLayout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/',
    component: AppLayout,
    redirect: '/dashboard',
    meta: { requiredAuth: true },
    children: [
      // 默认子路由
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: { title: '首页' }
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

export function resetRouter () {
  const newRouter = router;
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export async function setupRouter (app: App) {
  // 创建路由守卫
  createRouterGuards(router, whiteNameList)
  app.use(router)
  // 路由准备就绪后挂载APP实例
  await router.isReady()
}
export const asyncRoutes: RouteRecordRaw[] = [
  ...permissionModules
]
export default router
