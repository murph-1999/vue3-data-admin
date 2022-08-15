<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-25 22:32:58
 * @LastEditTime: 2022-08-11 16:28:54
-->

<template>
  <h1>首页</h1>
  <div class="flag" />
  <el-button>测试</el-button>
  <h2>{{ store.state.count }}</h2>
  <h2>{{ store.state.count }}</h2>
  <h1>{{ store.state.foo }}</h1>
  <img src="@/assets/logo.png">
  <div class="bg" />
</template>
<script lang="ts" setup>
import { login } from '@/api/common'
// 尽量使用usestore，而不是$store
import { useStore } from '../../store'
import User from '@/api/user'
import { onMounted, ref } from '@vue/runtime-core'
// 显式告诉ts， 这里是lang="ts" 要加上type 类型不能当做值给js用
import type { ILoginInfo } from '@/api/types/common'

const store = useStore()
console.log(store.state.count)
console.log(User)
const list = ref<ILoginInfo['roles']>([])
onMounted(() => {
  login().then((res) => {
    console.log('res', res)
    list.value = res.roles
  })
})
</script>

<style lang="scss" scoped>
.bg {
  height: 200px;
  background: url("@/assets/logo.png");
}
h1 {
  color: $color;
}
.flag {
  width: 36px;
  height: 18px;
  background-color: pink;
  border-radius: 2px;
  transform: skew(-20deg);
}
</style>
