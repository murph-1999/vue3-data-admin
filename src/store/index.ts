/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 22:54:30
 * @LastEditTime: 2022-08-15 10:31:43
 */
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import { ILoginInfo } from '@/api/types/common'
import { setItem, getItem } from '@/utils/storage'
import { USER } from '@/utils/constants'
const state = {
  count: 0,
  foo: 'doo',
  isCollapse: false,
  user: getItem<ILoginInfo>(USER)
}
export type State = typeof state

// 定义injection key 为什么需要
export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  // 数据应与interface State一致
  state,
  mutations: {
    increment (state) {
      state.count++
    },
    setIsCollapse (state, payload) {
      state.isCollapse = payload
    },
    setUser (state, payload) {
      state.user = payload
      setItem(USER, state.user)
    }
  }
})
// export const store = createStore<State>({
//   state () {
//     return {
//       count: 1,
//       foo: 'foo'
//     }
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })

// export default store
// 定义自己的useStore组合式函数，目的是为了传递key
// 直接在页面中被加载
export function useStore () {
  return baseUseStore(key)
}
