import { RouteRecordRaw, RouterView } from 'vue-router'

/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-19 17:11:33
 * @LastEditTime: 2022-08-11 16:18:37
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/data-center',
    name: 'dataCenter',
    component: RouterView,
    meta: { title: '数据中心', requiredAuth: true },
    children: [
      {
        path: 'active',
        name: 'active',
        component: () => import('@/views/data-center/active/index.vue'),
        meta: { title: '活跃数据' },
        children: []
      }, {
        path: 'user',
        name: 'user',
        component: () => import('@/views/data-center/user/index.vue'),
        meta: { title: '用户数据' },
        children: []
      }, {
        path: 'agency',
        name: 'agency',
        component: () => import('@/views/data-center/agency/index.vue'),
        meta: { title: '机构数据' },
        children: []
      }, {
        path: 'viewpoint',
        name: 'viewpoint',
        component: () => import('@/views/data-center/viewpoint/index.vue'),
        meta: { title: '观点数据' },
        children: []
      }
    ]
  }
]

export default routes
