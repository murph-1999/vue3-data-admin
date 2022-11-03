<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-11-03 16:12:43
 * @LastEditTime: 2022-11-03 16:12:56
-->
<template>
  <div>
    <debounce-input
      placeholder="防抖"
      prefix-icon="el-icon-search"
      @input="inputEve"
    />
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import DebounceInput from '../../components/basic/DebounceInput/index.vue'
const inputValue = ref('0')
const inputEve = (value) => {
  console.log(value)
  inputValue.value = value
}

</script>
<style lang='scss' scoped>
</style>
