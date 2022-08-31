<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-01 19:30:37
 * @LastEditTime: 2022-08-31 13:45:59
-->
<template>
  <el-sub-menu
    :index="props.menuInfo.name"
    v-if="props.menuInfo.children && props.menuInfo.children.length > 0"
  >
    <template #title>
      <el-icon>
        <setting />
      </el-icon>
      <span> {{ props.menuInfo.meta?.title }}</span>
    </template>

    <template
      v-for="item in props.menuInfo.children"
      :key="item.name || item.fullPath"
    >
      <!-- 递归生成菜单 -->
      <menu-item :menu-info="item" />
    </template>
  </el-sub-menu>

  <el-menu-item
    v-else
    :index="props.menuInfo.name"
  >
    <el-icon>
      <setting />
    </el-icon>
    <span>{{ props.menuInfo.meta?.title }}</span>
  </el-menu-item>
</template>

<script lang='ts' setup>
import type { RouteRecordRaw } from 'vue-router'
import { type PropType } from 'vue'

const props = defineProps({
  menuInfo: {
    type: Object as PropType<RouteRecordRaw>,
    default: () => {}
  }
})

</script>
<style lang='scss' scoped>
</style>
