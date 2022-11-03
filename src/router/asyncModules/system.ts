/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-15 15:29:40
 * @LastEditTime: 2022-10-28 13:07:45
 */
export default {
  'views/user': () => import('@/views/user/index.vue'),
  'views/agency': () => import('@/views/agency/index.vue'),
  'views/data-center/active': () => import('@/views/data-center/active/index.vue'),
  'views/data-center/user': () => import('@/views/data-center/user/index.vue'),
  'views/data-center/agency': () => import('@/views/data-center/agency/index.vue'),
  'views/data-center/viewpoint': () => import('@/views/data-center/viewpoint/index.vue'),
  'views/system/account': () => import('@/views/system/account/index.vue'),
  'views/system/role': () => import('@/views/system/role/index.vue'),
  'views/viewpoint/stock': () => import('@/views/viewpoint/stock/index.vue'),
  'views/viewpoint/industry': () => import('@/views/viewpoint/industry/index.vue')
}
