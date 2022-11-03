/*
 * @Description:自定义组件
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-15 13:09:41
 * @LastEditTime: 2022-11-03 17:26:35
 */
import { App } from '@vue/runtime-dom'
import { AppDialogForm } from '@/components/basic/DialogForm/index'
import { AppPagination } from '@/components/basic/Pagination/index'
import { AppFileUpload } from '@/components/basic/FileUpload/index'
import { MyButton } from '@/components/basic/Button/index'
import { MyDate } from '@/components/basic/Date/index'
import { MyTable, MyTableColumn } from '@/components/basic/Table/index'
import vdr from 'vue-draggable-resizable-gorkys/src/components/vue-draggable-resizable.vue'
import 'vue-draggable-resizable-gorkys/dist/VueDraggableResizable.css'
import { VueDraggableNext } from 'vue-draggable-next'

/**
 * 全局注册自定义组件
 * @param app
 */
export function setupCustomComponents (app: App) {
  app.component('AppDialogForm', AppDialogForm)
  app.component('AppPagination', AppPagination)
  app.component('AppFileUpload', AppFileUpload)
  app.component('MyButton', MyButton)
  app.component('AppDate', MyDate)
  app.component('MyTable', MyTable)
  app.component('MyTableColumn', MyTableColumn)
  // eslint-disable-next-line vue/multi-word-component-names
  app.component('Vdr', vdr)
  // eslint-disable-next-line vue/multi-word-component-names
  app.component('Vdn', VueDraggableNext)
}
