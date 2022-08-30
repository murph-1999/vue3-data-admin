/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-24 14:13:26
 * @LastEditTime: 2022-08-29 19:37:41
 */
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const modules = import.meta.glob('./**/*.ts')

const mockModules: any[] = []

for (const path in modules) {
  modules[path]().then((mod) => {
    mockModules.push(mod.default)
  })
}

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer () {
  console.log('mockModules', mockModules)
  createProdMockServer(mockModules)
}
