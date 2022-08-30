/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-20 15:27:17
 * @LastEditTime: 2022-08-20 16:11:43
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
export function useUserStoreWithOut () {
  return useConfigStore(store)
}
