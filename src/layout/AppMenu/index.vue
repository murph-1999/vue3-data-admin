
<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-19 16:35:01
 * @LastEditTime: 2022-08-30 20:00:54
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
    @open="handleOpen"
    @close="handleClose"
    :collapse="store.isCollapse"
    router
    ref="elMenu"
    @select="menuSelect"
  >
    <!-- <el-menu-item index="/data-center/active">
      <el-icon>
        <setting />
      </el-icon>
      <span>数据中心</span>
    </el-menu-item>

    <el-menu-item index="/">
      <el-icon>
        <setting />
      </el-icon>
      <span>机构管理</span>
    </el-menu-item> -->
    <!-- <menu-item :data="PermissionRoutes" /> -->
  </el-menu>
</template>

<script lang='ts' setup>

import { onMounted, ref } from 'vue'
import logo from './components/AppLogo.vue'
// import MenuItem from './components/MenuItem.vue'
// import PermissionRoutes from '@/router/staticModules/data-center'
import { useRoute } from 'vue-router'
import { useConfigStore } from '@/store/modules/config'
const store = useConfigStore()

onMounted(() => {
})

const route = useRoute()
const activeIndex = ref('')
activeIndex.value = route.path
const menuSelect = (index: string) => {
  activeIndex.value = 'data-center/' + index
  console.log('当前选中index', activeIndex)
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const isCollapse = ref(true)
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
