<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-18 10:55:41
 * @LastEditTime: 2022-11-08 15:03:59
-->
<template>
  <div class="page-container">
    <div>
      <h1>404</h1>
      <h1>OOPS！你好像走丢了...</h1>
      <RouterLink
        :to="{ path: '/', replace: true }"
        class="ant-btn ant-btn-primary"
      >
        回到首页
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NotFound'
})
</script>

<style lang="scss" scoped>
  .page-container {
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>
