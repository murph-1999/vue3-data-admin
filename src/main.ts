/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-17 17:01:18
 * @LastEditTime: 2022-08-15 15:02:57
 */
import { createApp } from 'vue'
// import AppPagination from '@/components/Pagination/index'
// import AppDialogForm from './components/DialogForm/index'
import App from './App.vue'
import { setupRouter } from './router/index'
import { setupCustomComponents } from '@/plugins/customComponent'
import { store, key } from './store'
import './styles/index.scss'
import elementPlus from './plugins/element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
function setupPlugins () {
  // 注册全局自定义组件,
  setupCustomComponents(app)
}

// element plus icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

async function setupApp () {
  await setupRouter(app)
  app.use(store, key)
    .use(elementPlus)
  app.mount('#app')
}
setupPlugins()
setupApp()
