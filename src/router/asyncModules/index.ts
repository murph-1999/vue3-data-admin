/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-15 16:40:56
 * @LastEditTime: 2022-08-30 19:55:01
 */
// generate components map
export const constantRouterComponents = {}

const modulesFiles = import.meta.glob('./**/*.ts')

Object.keys(modulesFiles).forEach((path) => {
  if (path.startsWith('./index.')) return
  modulesFiles[path]().then((mod) => {
    Object.entries(mod.default).forEach(([path, component]) => {
      constantRouterComponents[path] = component
    })
  })
})
