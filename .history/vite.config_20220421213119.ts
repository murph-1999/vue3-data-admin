/*
 * @Descripttion:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-17 17:01:18
 * @LastEditTime: 2022-04-21 21:30:55
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin({
    // 配置选项
  })]
})
