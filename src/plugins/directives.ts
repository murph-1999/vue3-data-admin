/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-20 19:45:27
 * @LastEditTime: 2022-09-20 20:10:47
 */
import type { App } from 'vue'

// import { color } from '@/directives/color'

/**
 * 注册全局自定义指令
 * @param app
 */
export function setupDirectives (app: App) {
  // 权限控制指令（演示）
  app.directive('color', (el, binding) => {
    // 这会在 `mounted` 和 `updated` 时都调用
    el.style.color = binding.value
  })
}
