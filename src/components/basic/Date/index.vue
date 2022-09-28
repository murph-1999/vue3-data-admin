<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-27 10:23:22
 * @LastEditTime: 2022-09-27 13:59:22
-->
<template>
  <el-date-picker
    v-model="calValue"
    v-bind="config"
  />
</template>

<script lang='ts' setup>
import { computed, PropType } from 'vue'
const props = defineProps({
  modelValue: {
    type: [Date, Array, String] as PropType<string | Date | Date[]>,
    default: ''
  },
  between: {
    type: Number,
    default: 0
  }
})
const emit = defineEmits(['update:modelValue'])

const calValue = computed({
  get () {
    return props.modelValue
  },
  set (val:string | Date[] | Date) {
    emit('update:modelValue', val)
  }
})
const config = computed(() => {
  return {
    disabledDate: (time: number) => {
      if (props.between) {
        const con1 =
        Date.now() -
              props.between * 24 * 60 * 60 * 1000
        const con2 =
        Date.now() +
              props.between * 24 * 60 * 60 * 1000
        return time < con1 || time > con2
      }
      return false
    },
    'value-format': 'YYYY-MM-DD'

  }
})

</script>
<style lang='scss' scoped>
</style>
