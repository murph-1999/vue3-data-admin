<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 22:32:58
 * @LastEditTime: 2022-09-26 15:44:55
-->

<template>
  <div v-color="color">
    首页
  </div>

  <my-button
    content="确认按钮"
    :auto-loading="true"
    round
    @click="submit"
    auto-confirm
    @confirm="handleConfirm"
  >
    确认
  </my-button>
  <functional-debounce
    time="3000"
    :before="beforeFun"
  >
    <input
      type="text"
      v-model="inputValue"
      @input="inputChange"
    >
  </functional-debounce>
  <debounce-input
    placeholder="
    防抖"
    prefix-icon="el-icon-search"
    @input="inputEve"
  />
  <h1>{{ inputValue }}</h1>
  Mouse position is at: {{ x }}, {{ y }}
  <AppFileUpload />
  <input
    id="uploadFile"
    type="file"
    accept="image/*"
  >
  <el-button
    id="submit"
    @click="uploadFile()"
  >
    上传文件
  </el-button>
  <div class="flag" />
</template>
<script lang="ts" setup>
import { useMouse } from '@/composables/mouse.js'
import DebounceInput from '../../components/basic/DebounceInput/index.vue'
import FunctionalDebounce from '@/components/basic/FunctionalDebounce/index'

import axios from 'axios'
import { ref } from 'vue'
const handleConfirm = (e) => {
  console.log(e)
}
const submit = (done) => {
  console.log(done)
  setTimeout(() => {
    done()
  }, 2000)
}
const inputValue = ref('0')
const inputEve = (value) => {
  console.log(value)
  inputValue.value = value
}
const inputChange = (e) => {
  console.log(e.target.value, '防抖')
}
const beforeFun = (e) => {
  console.log(e.target.value, '不防抖')
}

const { x, y } = useMouse()
const color = ref('#617373')
const uploadFile = () => {
  const uploadFileEle = document.querySelector('#uploadFile') as HTMLInputElement
  if (!uploadFileEle?.files?.length) return
  const file = uploadFileEle.files[0]
  console.log(file)
  upload({
    url: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
    file
  })
}

const upload = ({ url, file, fieldName = 'file' }) => {
  const formData = new FormData()
  formData.set(fieldName, file)
  axios.request({
    url,
    method: 'post',
    data: formData,
    // 监听上传进度
    onUploadProgress: function (progressEvent) {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      )
      console.log(percentCompleted)
    }
  })
}

</script>

<style lang="scss" scoped>
.bg {
  height: 200px;
  background: url("@/assets/logo.png");
}

.flag {
  width: 36px;
  height: 18px;
  background-color: pink;
  border-radius: 2px;
  transform: skew(-20deg);
}
</style>
