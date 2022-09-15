<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-22 16:38:11
 * @LastEditTime: 2022-09-01 15:39:43
-->
<template>
  <div class="header-wrapper">
    <div>
      <toggle-sidebar />
      <bread-crumb />
    </div>
    <div>
      <use-info />
      <full-screen />
    </div>
  </div>
</template>

<script lang='ts' setup>
import ToggleSidebar from './ToggleSidebar.vue'
import BreadCrumb from './BreadCrumb.vue'
import FullScreen from './FullScreen.vue'
import UseInfo from './UseInfo.vue'
</script>
<style lang='scss' scoped>
.header-wrapper{
  display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}
</style>
