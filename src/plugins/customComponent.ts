/*
 * @Description:自定义组件
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-15 13:09:41
 * @LastEditTime: 2022-08-15 14:49:29
 */
import { App } from '@vue/runtime-dom'
import { AppDialogForm } from '@/components/DialogForm/index'
import { AppPagination } from '@/components/Pagination/index'
/**
 * 全局注册自定义组件
 * @param app
 */
export function setupCustomComponents (app: App) {
  app.component('AppDialogForm', AppDialogForm)
  app.component('AppPagination', AppPagination)
}
