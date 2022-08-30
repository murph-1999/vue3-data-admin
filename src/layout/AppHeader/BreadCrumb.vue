<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-24 15:53:48
 * @LastEditTime: 2022-08-15 16:28:30
-->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="item in routes"
      :key="item.path"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang='ts' setup>
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
const router = useRouter()
console.log(router.currentRoute.value.matched)
const routes = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)
})
</script>
<style lang='scss' scoped>
</style>
