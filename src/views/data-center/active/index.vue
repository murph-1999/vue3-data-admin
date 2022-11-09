<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-19 17:09:14
 * @LastEditTime: 2022-11-09 13:19:25
-->
<template>
  <div>
    <foo msg="zhp" />
    <el-input v-model="input" />
  </div>
</template>

<script lang='ts' setup>
import Foo from '@/components/foo'
import { ref } from 'vue'
const input = ref('')
</script>
<style lang='scss' scoped>
</style>
