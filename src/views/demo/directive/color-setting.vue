<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-11-03 16:21:20
 * @LastEditTime: 2022-11-03 16:22:36
-->
<template>
  <div v-color="color">
    你可以随意修改我的颜色哦
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const color = ref('#334678')

</script>
<style lang='scss' scoped>
</style>
