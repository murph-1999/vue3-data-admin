/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-17 17:01:18
 * @LastEditTime: 2022-05-21 16:02:48
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 在ts模块中加载node核心模块需要安装node的类型补充模块
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // 配置选项
      cache: false,
      fix: true,
      exclude: /index.vue/
    }),
    vueJsx({})
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
})
