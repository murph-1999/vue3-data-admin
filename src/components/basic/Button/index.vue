<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-26 14:20:03
 * @LastEditTime: 2022-09-27 13:52:15
-->
<template>
  <component
    :is="currentComponent"
    v-bind="currentComponentConfig"
    @confirm="confirmClick"
  >
    <template #[slotName]>
      <el-button
        v-loading.fullscreen="fullscreenLoadingStatus"
        :loading="loadingStatus"
        v-bind="$attrs"
        @click="handleClick"
      >
        <slot />
      </el-button>
      <slot name="content" />
    </template>
  </component>
</template>

<script lang='ts' setup>
import { computed, ref } from 'vue'
import { isPromise } from '@vue/shared'
import { ElMessageBox, ElMessageBoxOptions } from 'element-plus'
import AppWrapper from '../Wrapper/index.vue'
import { debounce } from 'lodash-es'
import type { PropType } from 'vue'

const emit = defineEmits(['click', 'cancel'])

const props = defineProps({
  autoLoading: {
    type: Boolean,
    default: false
  },
  autoFullscreenLoading: {
    type: Boolean
  },
  autoConfirm: {
    type: Boolean,
    default: false
  },
  debounce: {
    type: Boolean
  },
  confirmType: {
    type: String,
    default: ''
  },
  popConfirmConfig: {
    type: Object,
    default: () => ({
      title: '确定删除吗?'
    })
  },
  messageBoxConfig: {
    type: Object as PropType<ElMessageBoxOptions>,
    default: () => ({})
  },
  tipContent: {
    type: String,
    default: ''
  },
  tipConfig: {
    type: Object,
    default: () => ({})
  },
  // eslint-disable-next-line vue/require-default-prop
  onClick: {
    type: Function as PropType<(e, done?: () => void) => void | Promise<void>>
  },
  // eslint-disable-next-line vue/require-default-prop
  onConfirm: {
    type: Function as PropType<(done: () => void) => void | Promise<void>>
  },
  onCancel: {
    type: Function as PropType<() => void>,
    default: () => {}

  }
})

const slotName = computed(() => {
  return props.confirmType === 'pop' ? 'reference' : 'default'
})
const currentComponent = computed(() => {
  if (props.tipContent) {
    return 'el-tooltip'
  }
  if (props.confirmType === 'pop') {
    return 'el-popconfirm'
  }
  return AppWrapper
})
const currentComponentConfig = computed(() => {
  if (props.tipContent) {
    return {
      content: props.tipContent,
      effect: 'dark',
      placement: 'top',
      ...props.tipConfig
    }
  }
  if (props.confirmType === 'pop') {
    return props.popConfirmConfig
  }
  return {}
})
const loadingStatus = ref(false)
const fullscreenLoadingStatus = ref(false)

const debounceClick = debounce((e: MouseEvent) => {
  emitClick(e)
}, 500, {
  leading: true
})

const emitClick = (e) => {
  if (props.onClick) {
    const r = props.onClick(
      e,
      () => {
        hideLoading()
      }
    )
    handlePromiseCallBack(r as Promise<void> | undefined)
  }
}

// 触发click事件和回调函数,回调后消失loading
const hideLoading = () => {
  loadingStatus.value = false
  fullscreenLoadingStatus.value = false
}

// 需要二次确认的
const confirmClick = () => {
  fullscreenLoadingStatus.value = true
  if (props.onConfirm) {
    const r = props.onConfirm(
      () => {
        hideLoading()
      }
    )
    handlePromiseCallBack(r as Promise<void> | undefined)
  }
}

const handlePromiseCallBack = (res: Promise<void> | undefined) => {
  if (isPromise(res)) {
    res.finally(() => {
      hideLoading()
    })
  }
}

const messageBoxConfirm = () => {
  const {
    message = '此操作将永久删除该数据, 是否继续?',
    title = '提示',
    confirmButtonText = '确定',
    cancelButtonText = '取消',
    type
  } = props.messageBoxConfig
  ElMessageBox.confirm(message, title, {
    confirmButtonText,
    cancelButtonText,
    type
  })
    .then(() => {
      confirmClick()
    })
    .catch(() => {
      emit('cancel')
    })
}
const handleClick = (e) => {
  // 防抖
  if (props.debounce) {
    debounceClick(e)
    return
  }
  // popconfirm
  if (props.confirmType === 'pop') {
    return
  }
  // messagebox confirm
  if (props.confirmType === 'messagebox') {
    messageBoxConfirm()
    return
  }
  // 普通按钮点击自动全屏loading
  if (props.autoFullscreenLoading) {
    fullscreenLoadingStatus.value = true
    emitClick(e)
    return
  }
  // 普通按钮点击自动loading
  if (props.autoLoading) {
    loadingStatus.value = true
    emitClick(e)
    return
  }
  emitClick(e)
}
</script>
<style>

</style>
