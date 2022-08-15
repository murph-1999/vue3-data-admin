import { RouteRecordRaw, RouterView } from 'vue-router'

/*
 * @Description:观点管理
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-19 17:11:33
 * @LastEditTime: 2022-08-11 16:18:42
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/system',
    name: 'system',
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
