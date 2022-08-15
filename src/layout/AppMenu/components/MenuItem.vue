<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-01 19:30:37
 * @LastEditTime: 2022-08-11 15:42:00
-->
<template>
  <template
    v-for="(item,index) in data"
    :key="index"
  >
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length > 0"
    >
      <template #title>
        <el-icon>
          <setting />
        </el-icon>
        <span> {{ item.meta.title }}</span>
      </template>
      <menu-item :data="item.children" />
    </el-sub-menu>

    <el-menu-item
      v-else
      :index="item.path"
    >
      <el-icon>
        <setting />
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
  </template>
</template>

<script lang='ts' setup>
import { onMounted } from '@vue/runtime-core'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})
onMounted(() => {
  console.log('data', props.data)
})

</script>
<style lang='scss' scoped>
</style>
