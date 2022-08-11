/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-18 10:16:19
 * @LastEditTime: 2022-05-19 17:03:50
 */
module.exports = {
  globals: {
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    defineProps: 'readonly',
    withDefaults: 'readonly'

  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/multi-word-component-names': ['error', {
      ignores: ['index']// 需要忽略的组件名
    }]
  },
  // 重写api文件中驼峰命名法的eslint验证
  overrides: [{
    files: ['src/api/**/*.ts'],
    rules: {
      camelcase: 'off'
    }
  }]
}
