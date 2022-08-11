/* eslint-disable space-before-function-paren */
/*
 * @Description:分页组件
 * @version:
 * @Author: Murphy
 * @Date: 2022-07-31 12:40:13
 * @LastEditTime: 2022-07-31 12:43:44
 */
import { App } from '@vue/runtime-dom'
import Component from './index.vue'
export default {
  install(app: App) {
    app.component('AppPagination', Component)
  }
}
