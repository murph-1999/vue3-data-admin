/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-24 16:21:00
 * @LastEditTime: 2022-07-30 23:12:25
 */
import 'vue-router'

declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    title?: string,
    requiredAuth?: boolean
  }
}
