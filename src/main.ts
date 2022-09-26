/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-17 17:01:18
 * @LastEditTime: 2022-09-21 16:03:10
 */
import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router/index'
import { setupStore } from '@/store'
import { setupCustomComponents } from '@/plugins/customComponent'
import { setupDirectives } from '@/plugins/directives'
import './styles/index.scss'
import elementPlus from './plugins/element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
function setupPlugins () {
  // 注册全局自定义组件,
  setupCustomComponents(app)
  // 注册全局自定义指令
  setupDirectives(app)
}

// element plus icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

async function setupApp () {
  setupStore(app)

  await setupRouter(app)
  app.use(elementPlus)
  app.mount('#app')
}
setupPlugins()
setupApp()
