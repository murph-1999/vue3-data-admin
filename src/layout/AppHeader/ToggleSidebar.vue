<!--
 * @Description:展开收齐menu
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-22 16:29:08
 * @LastEditTime: 2022-05-24 16:51:17
-->
<template>
  <el-icon
    v-if="isCollapse"
    @click="handleChange"
  >
    <Expand />
  </el-icon>
  <el-icon
    v-else
    @click="handleChange"
  >
    <Fold />
  </el-icon>
</template>

<script lang='ts' setup>
import { useStore } from '@/store'
import { computed } from 'vue'
const store = useStore()
const isCollapse = computed(() => {
  return store.state.isCollapse
})
const handleChange = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>
<style lang='scss' scoped>
</style>
