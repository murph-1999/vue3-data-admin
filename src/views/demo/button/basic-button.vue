<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-11-03 16:20:06
 * @LastEditTime: 2022-11-03 17:45:17
-->
<template>
  <div>
    <my-button
      content="确认按钮"
      :auto-loading="true"
      round
      @click="submit"
      auto-confirm
      @confirm="handleConfirm"
    >
      确认
    </my-button>
    <my-button
      type="primary"
      auto-loading
      @click="handClick"
    >
      loading
    </my-button>

    <my-button
      type="primary"
      auto-fullscreen-loading
      @click="handClick"
    >
      全屏loading
    </my-button>
    <!--防抖-->
    <my-button
      type="info"
      debounce
      @click="handleDebounce"
    >
      防抖
    </my-button>
    <!-- popconfirm确认 -->
    <my-button
      type="danger"
      confirm-type="pop"
      @confirm="handClick"
    >
      删除
    </my-button>
    <!--messagebox确认-->
    <my-button
      type="warning"
      confirm-type="messagebox"
      @confirm="handClick"
    >
      删除
    </my-button>
    <!--tooltip功能-->
    <my-button
      tip-content="这是说明文字"
      type="success"
    >
      tooltip
    </my-button>
  </div>
</template>

<script lang='ts' setup>
import { ElMessage } from 'element-plus'

const handleConfirm = (e) => {
  console.log(e)
}
const submit = (done) => {
  console.log(done)
  setTimeout(() => {
    done()
  }, 2000)
}
const handClick = (e, done: () => void = e) => {
  setTimeout(() => {
    done()
  }, 1000)
}
const handleDebounce = () => {
  ElMessage.warning('500ms内只能点击一次')
}
</script>
<style lang='scss' scoped>
</style>
