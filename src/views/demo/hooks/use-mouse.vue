<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-11-03 16:11:38
 * @LastEditTime: 2022-11-03 16:14:14
-->
<template>
  <div>
    Mouse position is at: {{ x }}, {{ y }}
  </div>
</template>

<script lang='ts' setup>
import { useMouse } from '@/composables/mouse.js'
const { x, y } = useMouse()

</script>
<style lang='scss' scoped>
</style>
