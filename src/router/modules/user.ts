import { RouteRecordRaw, RouterView } from 'vue-router'

/*
 * @Description:观点管理
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-19 17:11:33
 * @LastEditTime: 2022-08-15 10:07:27
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/user',
    name: 'user',
    component: RouterView,
    children: [
      {
        path: 'index',
        name: 'user',
        component: () => import('@/views/user/userIndex.vue'),
        meta: {
          title: 'clipboard'
        }
      }
    ]
  }
]

export default routes
