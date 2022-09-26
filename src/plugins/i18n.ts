/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-20 20:13:59
 * @LastEditTime: 2022-09-20 20:16:06
 */
import type { App } from 'vue'

/**
 * 注册全局方法
 * @param app
 */
export default {
  install: (app, options) => {
    // 注入一个全局可用的 $translate() 方法
    app.config.globalProperties.$translate = (key) => {
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      // eslint-disable-next-line array-callback-return
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }
  }
}
