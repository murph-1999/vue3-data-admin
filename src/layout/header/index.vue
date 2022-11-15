<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-22 16:38:11
 * @LastEditTime: 2022-11-15 11:31:31
-->
<template>
  <div class="header-wrapper">
    <div>
      <ToggleSidebar />
      <Breadcrumb />
    </div>
    <div class="header-setting">
      <Search />
      <Fullscreen />
      <UserInfo />
    </div>
  </div>
</template>

<script lang='ts' setup>
import { Breadcrumb, UserInfo, Fullscreen, ToggleSidebar, Search } from './components/index'
</script>

<style lang='scss' scoped>
.header-wrapper{
  display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
.header-setting{
  display: flex;
  align-items: center;
  div, i{
    &:not(:first-child){
      margin-left: 10px;
    }
  }
}
</style>
