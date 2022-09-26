/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-25 11:49:26
 * @LastEditTime: 2022-09-25 17:02:28
 */
const debounce = (fun, delay = 500, before) => {
  let timer:null|TimeoutHandle = null
  return (params) => {
    timer && clearTimeout(timer)
    before && before(params)
    timer = setTimeout(() => {
      // click事件fun是Function  input事件fun是Array
      if (!Array.isArray(fun)) {
        fun = [fun]
      }
      for (const i in fun) {
        fun[i](params)
      }
      timer = null
    }, parseInt(delay))
  }
}

export default function functionalDebounce (props, { slots }) {
  const before = props.before
  const time = props.time
  const vnodeList = slots.default()
  if (vnodeList === undefined) {
    console.warn('<debounce> 组件必须要有子元素')
    return null
  }
  const vnode = vnodeList[0] || null // 获取子元素虚拟dom
  console.log(vnodeList[0])
  if (vnode.type === 'input') {
    const defaultFun = vnode.props.onInput
    const debounceFun = debounce(defaultFun, time, before) // 获取节流函数
    vnode.props.onInput = debounceFun
  }
  return vnode
}
