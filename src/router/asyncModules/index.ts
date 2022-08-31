/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-15 16:40:56
 * @LastEditTime: 2022-08-31 16:31:38
 */
// generate components map
export const constantRouterComponents = {}

const modulesFiles = await import.meta.glob('./**/*.ts')

Object.keys(modulesFiles).forEach((path) => {
  if (path.startsWith('./index.')) return
  // 这里异步是有问题的
  modulesFiles[path]().then((mod) => {
    console.log(mod)
    Object.entries(mod.default).forEach(([path, component]) => {
      constantRouterComponents[path] = component
    })
  })
})
console.log(Object.keys(constantRouterComponents))
