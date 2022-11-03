<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-11-03 17:29:57
 * @LastEditTime: 2022-11-03 17:44:09
-->
<template>
  <div>
    <search-form
      ref="plForm"
      :form-items="formItems"
      @submit="handleSubmit"
      @reset="handleReset"
    />
  </div>
</template>

<script lang='ts' setup>
import SearchForm from '@/components/basic/Form/search-form.vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const jobDict = [
  {
    value: '0',
    label: 'ui设计'
  }, {
    value: '1',
    label: 'JAVA开发'
  }, {
    value: '2',
    label: '前端开发'
  }, {
    value: '3',
    label: '产品经理'
  }
]

const sexDict = [
  {
    value: '0',
    label: '男'
  }, {
    value: '1',
    label: '女'
  }
]
// 表单项
const formItems = ref([
  { ui: 'input', prop: 'id', label: 'id', required: true },
  { ui: 'input', prop: 'name', label: '姓名', required: true },
  { ui: 'date', prop: 'birth', label: '生日' },
  { ui: 'select', prop: 'job', label: '职位', options: jobDict },
  { ui: 'select', prop: 'sex', label: '性别', options: sexDict },
  {
    cols: [{ ui: 'input', prop: 'hobby', label: '爱好' },
      { ui: 'input', prop: 'age', label: '年龄' },
      { ui: 'input', prop: 'address', label: '地址' }]
  }
])
const handleSubmit = (val) => {
  console.log('提交的表单值为：', val)
}
const handleReset = () => {
  ElMessage({
    type: 'info',
    message: '已重置表单'
  })
}

</script>
<style lang='scss' scoped>
</style>
