<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 22:32:58
 * @LastEditTime: 2022-09-01 17:10:22
-->

<template>
  <div>首页</div>
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
import axios from 'axios'
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
