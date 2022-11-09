<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-30 19:54:27
 * @LastEditTime: 2022-11-09 13:13:26
-->
<template>
  <div>
    机构管理
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
  name: 'Agency'
})

const input = ref('')
</script>
<style lang='scss' scoped>
</style>
