/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-20 15:27:17
 * @LastEditTime: 2022-11-03 16:53:26
 */
import { defineStore } from 'pinia'
import { store } from '@/store'

interface ConfigState {
  isCollapse: boolean
}
export const useConfigStore = defineStore({
  id: 'config',
  state: ():ConfigState => ({ isCollapse: false }),
  actions: {
    switch (param:boolean) {
      this.isCollapse = param
    }
  }
})

// 在组件setup函数外使用
// reference https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html
export function useUserStoreWithOut () {
  return useConfigStore(store)
}
