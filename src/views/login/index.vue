<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 22:33:09
 * @LastEditTime: 2022-11-03 15:26:03
-->
<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      :model="user"
      size="small"
      @submit.prevent="handleSubmit"
    >
      <el-form-item prop="username">
        <el-input
          v-model="user.username"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="user.password"
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
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElForm } from 'element-plus'
import type { IElForm, IFormItemRule } from '@/types/element-plus'
import { useUserStore } from '@/store/modules/user'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

// 获取子组件el-form类型，获取其可用方法等
const form = ref < IElForm | null >(null)
const user = reactive({
  username: 'admin',
  password: '123456'
})

const loading = ref(false)

const rules = ref<IFormItemRule>({
  username: [{ required: true, message: '请输入账号', trigger: 'change' }],
  password: [{ required: true, message: '请输入密码', trigger: 'change' }]
})

const handleSubmit = async () => {
  const valid = await form.value?.validate()
  if (!valid) return false
  loading.value = true
  await userStore.login(user)
  loading.value = false
  router.replace((route.query.redirect as string) ?? '/')
}
</script>
<style lang="scss" scoped>
.login-container {
  width: 400px;
  margin: 200px auto;
  .submit-button {
  width: 100px;
  margin: auto;
}
}

</style>
