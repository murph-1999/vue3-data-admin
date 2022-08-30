<!--
 * @Description:展开收齐menu
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-22 16:29:08
 * @LastEditTime: 2022-08-20 16:15:54
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
import { useConfigStore } from '@/store/modules/config'
import { computed } from 'vue'
const store = useConfigStore()
const isCollapse = computed(() => {
  return store.isCollapse
})
const handleChange = () => {
  store.switch(!store.isCollapse)
}
</script>
<style lang='scss' scoped>
</style>
