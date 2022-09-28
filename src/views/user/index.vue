<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-30 20:37:33
 * @LastEditTime: 2022-09-28 17:16:50
-->
<template>
  <div>
    <h1>用户管理</h1>
    <my-button
      type="primary"
      auto-loading
      @click="handClick"
    >
      loading
    </my-button>

    <my-button
      type="primary"
      auto-fullscreen-loading
      @click="handClick"
    >
      全屏loading
    </my-button>
    <!--防抖-->
    <my-button
      type="info"
      debounce
      @click="handleDebounce"
    >
      防抖
    </my-button>
    <!-- popconfirm确认 -->
    <my-button
      type="danger"

      confirm-type="pop"
      @confirm="handClick"
    >
      删除
    </my-button>
    <!--messagebox确认-->
    <my-button
      type="warning"
      confirm-type="messagebox"
      @confirm="handClick"
    >
      删除
    </my-button>
    <!--tooltip功能-->
    <my-button
      tip-content="这是说明文字"
      type="success"
    >
      tooltip
    </my-button>

    <app-date
      v-model="date"
      placeholder="Pick a day"
      prefix-icon="finished"
      :between="between"
    />

    <search-form
      ref="plForm"
      :form-items="formItems"
      @submit="handleSubmit"
      @reset="handleReset"
    />
  </div>
</template>

<script lang='ts' setup>
import { ElMessage } from 'element-plus'
import SearchForm from '../../components/basic/Form/search-form.vue'
import { ref } from 'vue'
const date = ref(null)
const between = ref(10)
const handClick = (e, done: () => void = e) => {
  // if (typeof done === 'undefined') {
  //   done = e
  // }
  setTimeout(() => {
    done()
  }, 1000)
}
const handleDebounce = () => {
  ElMessage.warning('500ms内只能点击一次')
}
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
