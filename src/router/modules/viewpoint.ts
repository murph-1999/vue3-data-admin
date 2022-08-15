import { RouteRecordRaw, RouterView } from 'vue-router'

/*
 * @Description:观点管理
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-19 17:11:33
 * @LastEditTime: 2022-08-11 16:18:46
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/viewpoint',
    name: 'viewpoint',
    component: RouterView,
    children: [
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/system/role/roleIndex.vue')
      }, {
        path: 'account',
        name: 'account',
        component: () => import('@/views/system/account/accountIndex.vue')
      }
    ]
  }
]

export default routes
