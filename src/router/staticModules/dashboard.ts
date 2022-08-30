/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-30 19:56:51
 * @LastEditTime: 2022-08-30 19:58:45
 */
import type { RouteRecordRaw } from 'vue-router'
import RouterView from '@/layout/routerView/index.vue'

const moduleName = 'dashboard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: moduleName,
    redirect: '/dashboard/welcome',
    component: RouterView,
    meta: {
      title: '首页',
      icon: 'icon-yibiaopan'
    },
    children: [
      {
        path: 'welcome',
        name: `${moduleName}-welcome`,
        meta: {
          title: '首页',
          icon: 'icon-shouye'
        },
        component: () =>
          import(/* webpackChunkName: "dashboard-welcome" */ '@/views/dashboard/index.vue')
      }
    ]
  }
]

export default routes
