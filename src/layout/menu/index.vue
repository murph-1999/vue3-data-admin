
<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-19 16:35:01
 * @LastEditTime: 2022-08-31 16:05:23
-->
<template>
  <logo
    :collapse="isCollapse"
  />
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="activeIndex"
    text-color="#fff"
    :collapse="configStore.isCollapse"
    ref="elMenu"
    router
    @select="menuSelect"
  >
    <template
      v-for="item in menus"
      :key="item.name || item.fullPath"
    >
      <menu-item :menu-info="item" />
    </template>
  </el-menu>
</template>

<script lang='ts' setup>

import { computed, watch, ref } from 'vue'
import logo from './components/menuLogo.vue'
import MenuItem from './components/menuItem.vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import { useConfigStore } from '@/store/modules/config'
import { LOGIN_NAME } from '@/router/constant'

const configStore = useConfigStore()
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const activeIndex = ref('')

activeIndex.value = route.path
console.log(route.path)
const menuSelect = (index: string) => {
  router.push({ name: index })
}
const isCollapse = ref(true)

const menus = computed(() => {
  return [...userStore.menus]
    .filter((n) => !n.meta?.hideInMenu)
})

// 页面路由变化，切换菜单选中状态
watch(
  () => route.fullPath,
  () => {
    if (route.name === LOGIN_NAME) return
    activeIndex.value = route.name as string
  },
  {
    immediate: true
  }
)
</script>
<style lang='scss' scoped>
.el-menu {
  border-right: none;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
