/*
 * @Descripttion:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-18 10:16:19
 * @LastEditTime: 2022-04-21 10:13:09
 */
module.exports = {
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
  }
}
