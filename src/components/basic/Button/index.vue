<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-26 14:20:03
 * @LastEditTime: 2022-09-26 16:44:41
-->
<template>
  <el-tooltip
    :content="content"
    v-bind="attrs"
  >
    <el-button
      v-bind="$attrs"
      type="primary"
      :loading="loadingStatus"
      @click="handleClick"
    >
      <slot />
    </el-button>
  </el-tooltip>
</template>

<script lang='ts' setup>
import { computed, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const emit = defineEmits(['click', 'cancel'])

const props = defineProps({
  autoLoading: {
    type: Boolean,
    default: false
  },
  autoConfirm: {
    type: Boolean,
    default: false
  },
  confirmConfig: {
    type: Object,
    default: () => ({})
  },
  content: {
    type: String,
    default: ''
  },
  tipConfig: {
    type: Object,
    default: () => ({})
  }
})

const attrs = computed(() => {
  return {
    effect: 'dark',
    placement: 'top',
    ...props.tipConfig
  }
})
const loadingStatus = ref(false)
const handleClick = () => {
  if (props.autoConfirm) {
    const {
      message = '确认提交?',
      title = '提示',
      confirmButtonText = '确定',
      cancelButtonText = '取消',
      type = 'warning'
    } = props.confirmConfig

    ElMessageBox.confirm(
      message,
      title,
      {
        confirmButtonText,
        cancelButtonText,
        type
      }).then(() => {
      if (props.autoLoading) {
        loadingStatus.value = true
      }
      emit('click', () => { loadingStatus.value = false })
    })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Delete canceled'
        })
      })
  }
}
</script>
<style>

</style>
