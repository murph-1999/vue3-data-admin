/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-17 17:01:18
 * @LastEditTime: 2022-11-10 15:46:42
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import DefineOptions from 'unplugin-vue-define-options/vite'
import Unocss from 'unocss/vite'

// 在ts模块中加载node核心模块需要安装node的类型补充模块
import path from 'path'
import { env } from 'process'
// const port = env.port || env.npm_config_port || 8098 // dev port
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    Unocss(),
    eslintPlugin({
      // 配置选项
      cache: false,
      fix: true,
      exclude: /index.vue/
    }),
    vueJsx({}),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true,
      prodEnabled: true,
      injectCode: `
        import { setupProdMockServer } from '../mock/_createProductionServer';
        setupProdMockServer();
        `
    })
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
  },
  server: {
    port: 9537,
    proxy: {
      '^/api': {
        // target: process.env.VUE_APP_API_URL,
        target: 'https://mock.mengxuegu.com/mock/626e5c531e3d7470073a2574/shop',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
