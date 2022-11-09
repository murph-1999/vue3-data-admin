<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-15 15:29:40
 * @LastEditTime: 2022-11-09 13:18:55
-->
<template>
  <div>行业观点管理<el-input v-model="input" /></div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

// eslint-disable-next-line no-undef
defineOptions({
  name: 'IndustryViewpoint'
})

const input = ref('')
</script>
<style lang='scss' scoped>
</style>
