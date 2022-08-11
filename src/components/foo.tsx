/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 21:36:28
 * @LastEditTime: 2022-08-10 15:40:34
 */
import { defineComponent, ref } from '@vue/runtime-core'
import { ElButton } from 'element-plus'
interface PropsType {
  msg: string
}
export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup () {
    const count = ref(0)
    const name = ref('hhhh')
    // const handleInput = (e: { target: { value: string } }) => {
    //   name.value = e.target.value
    // }
    const handleIncrease = () => {
      count.value++
    }
    // 当前这里只能手动的补充ts类型props
    return (props: PropsType) => (
      <div style={{ backgroundColor: '#cef', height: '100px', width: '100px' }}>
        <p>{props.msg}</p>
        <p>{count.value}</p>
        <ElButton onClick={handleIncrease}>click me
        </ElButton>
        <input value={name.value}></input>
      </div>
    )
  }
})
