/*
 * @Description:自定义组件
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-15 13:09:41
 * @LastEditTime: 2022-09-26 14:45:59
 */
import { App } from '@vue/runtime-dom'
import { AppDialogForm } from '@/components/basic/DialogForm/index'
import { AppPagination } from '@/components/basic/Pagination/index'
import { AppFileUpload } from '@/components/basic/FileUpload/index'
import { MyButton } from '@/components/basic/Button/index'
/**
 * 全局注册自定义组件
 * @param app
 */
export function setupCustomComponents (app: App) {
  app.component('AppDialogForm', AppDialogForm)
  app.component('AppPagination', AppPagination)
  app.component('AppFileUpload', AppFileUpload)
  app.component('MyButton', MyButton)
}
