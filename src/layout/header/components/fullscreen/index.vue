<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-24 16:50:12
 * @LastEditTime: 2022-11-15 11:12:18
-->
<template>
  <el-icon @click="toggleFullScreen">
    <FullScreen />
  </el-icon>
</template>

<script lang='ts' setup>
// 点击切换全屏模式
const toggleFullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  } else {
    document.documentElement.requestFullscreen()
  }
}
</script>
<style lang='scss' scoped>
.el-icon{
  float:right
}
</style>
