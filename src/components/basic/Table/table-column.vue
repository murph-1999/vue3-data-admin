<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-29 14:56:53
 * @LastEditTime: 2022-09-29 16:38:33
-->
<template>
  <el-table-column v-bind="$attrs">
    <template
      v-for="([key, val],index) in Object.entries(calSlots)"
      #[key]="scope"
      :key="index"
    >
      <template v-if="children">
        <table-column
          v-for="(item,index1) in children"
          :key="index1"
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
      </template>

      <template v-else>
        <slot
          v-if="key === 'default'&&typeof cell==='string'"
          :name="cell"
          v-bind="scope || {}"
        />
        <slot
          v-if="key === 'header'&&typeof header==='string'"
          :name="header"
          v-bind="scope || {}"
        />
        <template v-if="tip">
          {{ scope.column.label }}
          <el-tooltip
            v-if="tip"
            :content="tip"
          />
        </template>
        <render-vnode
          v-if="showRender"
          :data="scope"
          :vnode="val"
        />
      </template>
    </template>
  </el-table-column>
</template>

<script lang='ts' setup>

import { pickBy, identity } from 'lodash'
import { computed, useAttrs } from 'vue'
import RenderVnode from '../../renderVnode'
const props = defineProps({
  cell: {
    type: [String, Function],
    default: () => {}
  },
  header: {
    type: [String, Function],
    default: () => {}
  },
  tip: {
    type: String,
    default: ''
  },
  children: {
    type: Array,
    default: () => []
  }
})

const attrs = useAttrs()
console.log(attrs)
const calSlots = computed(() => {
  return pickBy(
    {
      default: props.cell || props.children,
      header: props.header || props.tip
    },
    identity
  )
})
const showRender = computed(() => {
  return (props.cell && typeof props.cell !== 'string') || (props.header && typeof props.header !== 'string')
})
</script>
<style lang='scss' scoped>
</style>
