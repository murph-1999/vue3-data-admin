<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 22:33:09
 * @LastEditTime: 2022-07-30 23:17:45
-->
<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      size="medium"
      @submit.prevent="handleSubmit"
    >
      <el-form-item prop="account">
        <el-input
          v-model="user.account"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="user.pwd"
          placeholder="请输入密码"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-lock" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
// 接口
import { login } from '@/api/common'
// 获取定义的接口类型，这里必须要加上type

import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElForm } from 'element-plus'
import type { IElForm, IFormItemRule } from '@/types/element-plus'
import { store } from '@/store'
// 什么时候能获取到form.value
// 获取子组件el-form类型，获取其可用方法等
const router = useRouter()
const route = useRoute()
const form = ref < IElForm | null >(null)
const user = reactive({
  account: 'admin',
  pwd: '123456'
})
const loading = ref(false)
const rules = ref<IFormItemRule>({
  account: [{ required: true, message: '请输入账号', trigger: 'change' }],
  pwd: [{ required: true, message: '请输入密码', trigger: 'change' }]
})
// 进入首页
// const list = ref<ILoginInfo["roles"]>([]);
const handleSubmit = async () => {
  const valid = await form.value?.validate()
  if (!valid) return false
  loading.value = true
  // login().then((res) => {
  //   console.log("res", res);
  // });
  const res = await login().finally(() => { loading.value = false })

  store.commit('setUser', res)
  let redirect = route.query.redirect || '/'
  // router.replace({ name: 'dataCenter' })
  if (typeof redirect !== 'string') {
    redirect = '/'
  }
  router.replace(redirect)
}
</script>
<style lang="scss" scoped>
.login-container {
  width: 400px;
  margin: 200px auto;
}
.submit-button {
  width: 100px;
  margin: auto;
}
</style>
