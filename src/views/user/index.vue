<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-30 20:37:33
 * @LastEditTime: 2022-11-09 13:32:46
-->
<template>
  <div>
    用户管理
    <el-input
      v-model="input"
      placeholder="Please input"
    />
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

// eslint-disable-next-line no-undef
defineOptions({
  name: 'User'
})
const input = ref('')
</script>
<style lang='scss' scoped>
</style>
