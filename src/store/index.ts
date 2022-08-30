/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 22:54:30
 * @LastEditTime: 2022-08-20 13:06:40
 */
import { createPinia } from 'pinia'
import type { App } from 'vue'

const store = createPinia()

export function setupStore (app: App<Element>) {
  app.use(store)
}

export { store }
