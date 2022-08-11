import { RouteRecordRaw, RouterView } from 'vue-router'

/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-19 17:11:33
 * @LastEditTime: 2022-05-21 10:02:23
 */
const routes: RouteRecordRaw[] = [
  {
    path: 'viewpoint',
    name: 'viewpoint',
    component: RouterView,
    children: [
      {
        path: 'stock',
        name: 'stock',
        component: () => import('@/views/data-center/active/index.vue')
      }, {
        path: 'industry',
        name: 'industry',
        component: () => import('@/views/data-center/user/index.vue')
      }
    ]
  }
]

export default routes
