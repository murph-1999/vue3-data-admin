/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 23:06:43
 * @LastEditTime: 2022-05-28 18:10:34
 */
// eslint-disable-next-line no-unused-vars
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { State } from './store/index'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  // interface State {
  //   count: number
  // }

  // 通过泛型state定义 为this.$store提供类型声明
  // eslint-disable-next-line no-unused-vars
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
