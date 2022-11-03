<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-11-03 17:25:11
 * @LastEditTime: 2022-11-03 17:28:43
-->
<template>
  <my-date
    v-model="date"
    placeholder="Pick a day"
    prefix-icon="finished"
    :between="between"
  />
</template>

<script lang='ts' setup>
import { ref } from 'vue'

const date = ref(null)
const between = ref(10)
</script>
<style lang='scss' scoped>
</style>
