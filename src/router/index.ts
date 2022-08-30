/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 22:30:24
 * @LastEditTime: 2022-08-30 20:33:09
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import outsideLayout from './outsideLayout'
import { whiteNameList } from './constant'
import { createRouterGuards } from './router-guards'
import type { App } from 'vue'
export const routes: RouteRecordRaw[] = [
  // {
  //   path: '/redirect',
  //   component: AppLayout,
  //   meta: { hidden: true },
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       component: () => import('@/views/redirect/index.vue')
  //     }
  //   ]
  // },
  {
    path: '/',
    name: 'Layout',
    component: AppLayout,
    redirect: '/dashboard/welcome',
    meta: { requiredAuth: true, title: 'layout' },
    children: []
  },
  // layout之外的路由
  ...outsideLayout
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

export default router
