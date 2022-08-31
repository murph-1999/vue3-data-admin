<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-19 15:39:04
 * @LastEditTime: 2022-08-31 10:57:59
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <Menu />
      </el-aside>
      <el-container>
        <el-header><Header /></el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import Menu from './menu/index.vue'
import Header from './header/index.vue'
</script>
<style lang='scss' scoped>
.el-footer,
.el-header {
  background-color: #b3c0d1;
}

.el-aside {
  background-color: #545c64;
  width: auto;
}
.el-main {
  background-color: #e9eef3;
}
.el-container {
  height: 100vh;
}
</style>
