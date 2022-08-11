/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-11 09:05:54
 * @LastEditTime: 2022-08-11 09:26:32
 */
import { App } from '@vue/runtime-dom'
import Component from './index.vue'
export default {
  install (app: App) {
    app.component('AppDialogForm', Component)
  }
}
