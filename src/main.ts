/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-17 17:01:18
 * @LastEditTime: 2022-08-11 09:28:57
 */
import { createApp } from 'vue'
import AppPagination from '@/components/Pagination/index'
import AppDialogForm from './components/DialogForm/index'
import App from './App.vue'
import router from './router/index'
import { store, key } from './store'
import './styles/index.scss'
import elementPlus from './plugins/element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(router)
  .use(store, key)
  .use(elementPlus)
  .use(AppPagination)
  .use(AppDialogForm)
  .mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
