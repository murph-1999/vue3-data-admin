<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 22:32:58
 * @LastEditTime: 2022-08-24 16:42:28
-->

<template>
  <h1>首页</h1>
  <div class="flag" />
  <el-button>测试</el-button>

  <img src="@/assets/logo.png">
  <div class="bg" />
</template>
<script lang="ts" setup>

// 显式告诉ts， 这里是lang="ts" 要加上type 类型不能当做值给js用

</script>

<style lang="scss" scoped>
.bg {
  height: 200px;
  background: url("@/assets/logo.png");
}
h1 {
  color: $color;
}
.flag {
  width: 36px;
  height: 18px;
  background-color: pink;
  border-radius: 2px;
  transform: skew(-20deg);
}
</style>
