/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 21:36:28
 * @LastEditTime: 2022-11-01 10:33:16
 */
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({

  setup () {
    // 当前这里只能手动的补充ts类型props
    return () => (
      <div style={{ backgroundColor: 'pink', height: '100%', width: '100%' }}>
        <p>用户模块</p>
      </div>
    )
  }
})
