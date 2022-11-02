<!-- eslint-disable vue/no-mutating-props -->
<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-27 14:32:48
 * @LastEditTime: 2022-11-02 14:49:24
-->
<template>
  <component
    :is="wrapperComponent"
    :label="props.hideLabel?'':props.label"
    :prop="props.prop"
    v-bind="calFormItemConfig"
  >
    <!-- 嵌套表单项 -->
    <template v-if="props.cols">
      <el-col
        :span="item.span"
        :key="index"
        v-for="(item,index) in props.cols"
      >
        <form-item
          v-model="props.formState[item.prop as string]"
          :form-state="props.formState"
          v-bind="item"
        />
      </el-col>
    </template>

    <!-- 单个表单项 -->
    <component
      v-else
      :is="calItem"
      v-model="calValue"
      v-bind="calConfig"
    >
      <!-- select options -->
      <template v-if="props.options">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.label"
        />
      </template>
    </component>
  </component>
</template>

<script lang='ts' setup>
import { computed } from 'vue'
import AppWrapper from '../Wrapper/index.vue'
import AppDate from '../Date/index.vue'
import DebounceInput from '../DebounceInput/index.vue'

interface EmitType {
  (e: 'update:modelValue', val: string | number | boolean | object): void,
}
const emit = defineEmits<EmitType>()
const map = {
  input: DebounceInput,
  select: 'el-select',
  radio: 'el-radios',
  date: AppDate,
  switch: 'el-switch',
  time: 'el-time-picker',
  col: 'el-col'
}
type MyFormItemProps ={
  ui?: 'input' | 'select' | 'radio' | 'date' | any
  modelValue?: any
  label?: string
  prop?: string
  required?: boolean
  rules?: any
  grid?: boolean
  cols?: MyFormItemProps[]
  span?: number
  noFormItem?: boolean
  hideLabel?: boolean,
  formState?: any
  formItemConfig?: any
  uiConfig?: any
  options?: any
  min?: number
  max?: number
  minNum?: number
  maxNum?: number
  events?: any
  canAdd?: boolean,
  slotName?:string
}
const props = withDefaults(defineProps<MyFormItemProps>(), {
  ui: 'input',
  label: '',
  prop: '',
  noFormItem: false,
  formState: {},
  formItemConfig: {},
  uiConfig: {},
  required: undefined,
  events: {}
})

// 表单组件，处理嵌套等情况
const wrapperComponent = computed(() => {
  if (props.noFormItem || props.ui === 'wrapper') {
    return AppWrapper
  }
  if (props.ui === 'row') {
    return 'el-row'
  }
  return 'el-form-item'
})

// 表单项
const calItem = computed(() => {
  return map[props.ui] || props.ui
})

// 表单value
const calValue = computed({
  get: () => props.modelValue,
  set: (val: any) => {
    emit('update:modelValue', val)
  }
})

// 表单配置
const calConfig = computed(() => {
  const triggerText = props.ui === 'input' ? '请输入' : '请选择'
  return {
    ...props.uiConfig,
    options: props.options,
    ...props.events,
    placeholder: `${triggerText}${props.label}`
  }
})

type ruleItem = {
  required?: boolean,
  message?: string,
  type?: string,
  trigger?:string
}

const generateRules = computed(() => {
  const triggerText = props.ui === 'input' ? '请输入' : '请选择'
  const trigger = props.ui === 'input' ? 'blur' : 'change'
  const isArray = (props.ui === 'checkbox') || (props.ui === 'select' && props.uiConfig.multiple) || (props.ui === 'date' && props.uiConfig.type === 'daterange')
  let list:ruleItem[] = []
  let type
  if (calValue.value instanceof Date) {
    type = 'date'
  } else if (isArray) {
    type = 'array'
  }
  if (props.required) {
    list.push({
      required: props.required,
      message: `${triggerText}${props.label}`,
      type: type,
      trigger
    })
  }
  if (props.rules && Array.isArray(props.rules)) {
    list = list.concat(props.rules)
  }
  if (props.min && props.max) {
    list.push({
      message: `长度在${props.min}到${props.max}个字符`,
      trigger
    })
  }
  if (props.min && !props.max) {
    list.push({
      message: `请至少输入${props.min}个字符`,
      trigger
    })
  }
  if (!props.min && props.max) {
    list.push({
      message: `不超过${props.max}个字符`,
      trigger
    })
  }
  return list
})

const calFormItemConfig = computed(() => {
  return {
    rules: generateRules.value.length ? generateRules.value : undefined,
    ...props.formItemConfig
  }
})

</script>
<style lang='scss' scoped>
</style>
