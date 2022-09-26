<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-24 17:45:31
 * @LastEditTime: 2022-09-25 11:43:02
-->
<template>
  <el-input
    v-model="inputValue"
    @input="debounceInput"
  />
</template>

<script lang='ts' setup>
import { ref } from 'vue'

const inputValue = ref('0')
  interface EmitsType{
  (e:'input', value:string):void,
 }
// eslint-disable-next-line no-undef
let timeout:null|TimeoutHandle = null

const emit = defineEmits<EmitsType>()

const debounceInput = (value) => {
  console.log('time', value, inputValue.value)
  if (timeout) clearTimeout(timeout)
  timeout = setTimeout(() => {
    emit('input', value)
  }, 1000)
}
</script>
<style lang='scss' scoped>
</style>
