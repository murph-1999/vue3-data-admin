/* eslint-disable vue/require-default-prop */
/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 21:36:28
 * @LastEditTime: 2022-10-26 14:40:13
 */
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  props: {
    vnode: {
      type: [Function, String, Object, Number]
    },
    data: {
      type: [Array, Object, String, Number, Function]
    }
  },
  setup (props) {
    if (typeof props.vnode === 'function') {
      // @ts-ignore
      return () => props.vnode(props.data)
    } else {
      return () => props.vnode
    }
  }
})
