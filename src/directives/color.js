/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-20 19:47:30
 * @LastEditTime: 2022-09-20 20:10:26
 */
// import type { ObjectDirective } from 'vue'

export const color =
  (el, binding) => {
    // 这会在 `mounted` 和 `updated` 时都调用
    el.style.color = binding.value
  }
