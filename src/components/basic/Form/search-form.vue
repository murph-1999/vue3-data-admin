<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-27 14:06:03
 * @LastEditTime: 2022-11-02 14:59:21
-->
<template>
  <el-form
    ref="myForm"
    :model="formState"
    @submit.prevent="submit"
    @reset="reset"
    v-bind="calFormConfig"
  >
    <el-row>
      <template
        v-for="(item, index) in formItems"
        :key="index"
      >
        <el-col
          :xl="6"
          :lg="8"
          :md="12"
          :sm="24"
          class="el-col-xll-6"
        >
          <form-item
            :form-state="formState"
            v-if="!item.slotName"
            v-bind="item"
            v-model="formState[item.prop as string]"
          />
          <slot
            v-else
            :name="item.slotName"
            v-bind="{ formState, item }"
          />
        </el-col>
      </template>
      <slot name="search">
        <el-form-item
          style="margin-left: auto; margin-right: 20px; order: 2"
          label-width="0"
        >
          <my-button
            type="primary"
            auto-loading
            @click="submit"
          >
            查询
          </my-button>
          <my-button native-type="reset">
            重置
          </my-button>
        </el-form-item>
      </slot>
    </el-row>
  </el-form>
</template>

<script lang='ts' setup>
import { ref, computed } from 'vue'
import FormItem from './form-item.vue'
import type { MyFormItemProps } from '@/types/component'

interface Props {
  formItems?: MyFormItemProps[]
  formConfig?: Object
}

const props = withDefaults(defineProps<Props>(), {
  formItems: () => [],
  formConfig: () => ({})
})

const calFormConfig = computed(() => {
  return {
    labelWidth: '120px',
    labelPosition: 'right',
    ...props.formConfig
  }
})
const formState = ref({})
const emit = defineEmits(['submit', 'reset'])

const submit = (e, done: () => void = e) => {
  setTimeout(() => {
    done()
    emit('submit', formState.value)
  }, 1000)
}
const reset = () => {
  emit('reset')
}
</script>
<style lang='scss' scoped>
</style>
