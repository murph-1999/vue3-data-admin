<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-29 14:56:40
 * @LastEditTime: 2022-09-29 16:28:30
-->
<template>
  <el-table
    :data="data"
  >
    <table-column
      v-for="(item, index) in columns"
      :key="index"
      v-bind="item"
    >
      <template
        v-if="item.cell&&typeof item.cell==='string'"
        #[item.cell]="scope"
      >
        <slot
          :name="item.cell"
          v-bind="scope || {}"
        />
      </template>
      <template
        v-if="item.header&&typeof item.header==='string'"
        #[item.header]="scope"
      >
        <slot
          :name="item.header"
          v-bind="scope || {}"
        />
      </template>
    </table-column>
  </el-table>
</template>

<script lang='ts' setup>
import TableColumn from './table-column.vue'
defineProps({
  tableConfig: {
    type: Object,
    default: () => ({})
  },
  data: {
    type: Array,
    default: () => []
  },
  columns: {
    type: Array,
    default: () => []
  }
})

</script>
<style lang='scss' scoped>
</style>
