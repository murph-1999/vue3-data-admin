<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-11 09:06:00
 * @LastEditTime: 2022-09-26 14:35:56
-->
<template>
  <el-dialog
    ref="dialog"
    width="50%"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <slot />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">Cancel</el-button>
        <el-button
          @click="emit('confirm')"
          type="primary"
        >Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import type { IElDialog } from '@/types/element-plus'

const dialog = ref<IElDialog|null>(null)
const handleCancel = () => {
  if (dialog.value?.visible) {
    dialog.value.visible = false
  }
  emit('cancel')
}
interface EmitsType{
  (e:'confirm'):void,
  (e:'cancel'): void
}
const emit = defineEmits<EmitsType>()

</script>
<style lang='scss' scoped>
</style>
