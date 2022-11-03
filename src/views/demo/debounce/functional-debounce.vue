<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-11-03 16:09:47
 * @LastEditTime: 2022-11-03 16:10:05
-->
<template>
  <div>
    <functional-debounce
      time="3000"
      :before="beforeFun"
    >
      <input
        type="text"
        v-model="inputValue"
        @input="inputChange"
      >
    </functional-debounce>
  </div>
</template>

<script lang='ts' setup>
import FunctionalDebounce from '@/components/basic/FunctionalDebounce/index'
import { ref } from 'vue'
const inputValue = ref('0')

const inputChange = (e) => {
  console.log(e.target.value, '防抖')
}
const beforeFun = (e) => {
  console.log(e.target.value, '不防抖')
}
</script>
<style lang='scss' scoped>
</style>
