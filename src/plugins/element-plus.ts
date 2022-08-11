/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-06 15:40:56
 * @LastEditTime: 2022-05-10 09:03:49
 */
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { App } from 'vue'
export default {

  install (app: App) {
    app.use(ElementPlus, { size: 'small' })
  }
}
