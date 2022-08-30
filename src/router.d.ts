/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-24 16:21:00
 * @LastEditTime: 2022-08-18 11:35:23
 */
import 'vue-router'

declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    title?: string,
    requiredAuth?: boolean
  }
}
