<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-11-10 11:27:51
 * @LastEditTime: 2022-11-15 10:45:43
-->
<template>
  <div class="pb-12px">
    <template
      v-for="item in options"
      :key="item.name"
    >
      <div
        class="bg-[#e5e7eb] h-36px mt-8px px-14px rounded-4px flex-bc"
        style="cursor: pointer"
        :style="{
          background: item.name === active ? '#1890ff' : '',
          color: item.name === active ? '#fff' : '',
        }"
        @click="handleTo"
        @mouseenter="handleMouse(item)"
      >
        <span>{{ item.meta?.title }}</span>
        <el-icon><BottomLeft /></el-icon>
      </div>
    </template>
  </div>
</template>

<script lang='ts' setup>
import { computed } from 'vue'
import { RouteRecordRaw } from 'vue-router'
interface Props {
  modelValue: string;
  options: RouteRecordRaw[];
}
interface Emits {
  (e: 'update:modelValue', val: string): void;
  (e: 'enter'): void;
}

const props = withDefaults(defineProps<Props>(), {})
const emit = defineEmits<Emits>()

const active = computed({
  get () {
    return props.modelValue
  },
  set (val: string) {
    emit('update:modelValue', val)
  }
})
/** 鼠标移入 */
async function handleMouse (item: RouteRecordRaw) {
  active.value = item.name as string
}

function handleTo () {
  emit('enter')
}
</script>
<style lang='scss' scoped>
</style>
