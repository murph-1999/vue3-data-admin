<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-11-08 13:46:10
 * @LastEditTime: 2022-11-09 13:56:48
-->
<template>
  <div class="tabs-view-container">
    <div class="dropdown-wrapper">
      <el-dropdown class="action-dropdown">
        <el-button type="primary">
          more actions<el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              :disabled="activeKey !== route.fullPath"
              @click="reloadPage"
            >
              Refresh
            </el-dropdown-item>
            <el-dropdown-item @click="removeTab(route)">
              Close
            </el-dropdown-item>
            <el-dropdown-item @click="closeOther(route)">
              Close Others
            </el-dropdown-item>
            <el-dropdown-item @click="closeAll">
              Close All
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>

    <el-tabs
      v-model="activeKey"
      type="card"
      closable
      class="demo-tabs"
      @tab-change="changePage"
      @edit="editTabItem"
    >
      <el-tab-pane
        v-for="item in tabsList"
        :key="item.name"
        :label="item.meta.title"
        :name="item.name"
      >
        <router-view v-slot="{ Component }">
          <transition
            :name="route.meta.transition || 'fade'"
            mode="out-in"
          >
            <template v-if="Component">
              <keep-alive :include="keepAliveComponents">
                <component
                  :is="Component"
                  :key="route.fullPath"
                />
              </keep-alive>
            </template>
          </transition>
        </router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts" setup>
import { computed, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'
import { Storage } from '@/utils/Storage'
import { REDIRECT_NAME } from '@/router/constant'
import { TABS_ROUTES } from '@/enums/cacheEnum'
import { blackList, useTabsViewStore } from '@/store/modules/tabs'
import type { RouteLocation } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useKeepAliveStore } from '@/store/modules/keepAlive'

type RouteItem = Omit<RouteLocation, 'matched' | 'redirectedFrom'>;

const route = useRoute()
const router = useRouter()
const tabsViewStore = useTabsViewStore()
const keepAliveStore = useKeepAliveStore()

// 获取简易的路由对象
const getSimpleRoute = (route): RouteItem => {
  const { fullPath, hash, meta, name, params, path, query } = route
  return { fullPath, hash, meta, name, params, path, query }
}

let routes: RouteItem[] = []
try {
  const routesStr = Storage.get(TABS_ROUTES) as string | null | undefined
  routes = routesStr ? JSON.parse(routesStr) : [getSimpleRoute(route)]
} catch (e) {
  routes = [getSimpleRoute(route)]
}

// 初始化tab标签页
tabsViewStore.initTabs(routes)

watch(
  () => route.fullPath,
  () => {
    if (blackList.some((n) => n === route.name)) return
    tabsViewStore.addTabs(getSimpleRoute(route))
  },
  { immediate: true }
)
const activeKey = computed(() => tabsViewStore.getCurrentTab?.fullPath)
const tabsList = computed(() => tabsViewStore.getTabsList)

// 缓存的路由组件列表
const keepAliveComponents = computed(() => {
  return keepAliveStore.list
})

// 在页面关闭或刷新之前，保存数据，下一次直接展示这些数据
window.addEventListener('beforeunload', () => {
  Storage.set(TABS_ROUTES, JSON.stringify(tabsList.value))
})

// 目标路由是否等于当前路由
const isCurrentRoute = (route) => {
  return router.currentRoute.value.matched.some((item) => item.name === route.name)
}

// 关闭当前页面
const removeTab = (route) => {
  if (tabsList.value.length === 1) {
    return ElMessage({
      type: 'warning',
      message: '这已经是最后一页，不能再关闭了！'
    })
  }
  tabsViewStore.closeCurrentTab(route)
}

// 切换页面，key是route
const changePage = (key) => {
  console.log(key)
  Object.is(route.fullPath, key) || router.push(key)
}

// tabs 编辑（remove || add）
const editTabItem = (targetKey, action: string) => {
  if (action === 'remove') {
    removeTab(tabsList.value.find((item) => item.fullPath === targetKey))
  }
}
// 刷新页面
const reloadPage = () => {
  router.replace({
    name: REDIRECT_NAME,
    params: {
      path: route.fullPath
    }
  })
}

// 关闭其他
const closeOther = (route) => {
  tabsViewStore.closeOtherTabs(route)
  !isCurrentRoute(route) && router.replace(route.fullPath)
}

// 关闭全部
const closeAll = () => {
  localStorage.removeItem('routes')
  tabsViewStore.closeAllTabs()
  router.replace('/')
}

</script>
<style lang='scss' scoped>
.demo-tabs {
  :deep(.el-tabs__content) {
    padding: 0 20px;
  }
  :deep(.el-tabs__header){
    padding-right:120px;

  }
}

.dropdown-wrapper{
  position: absolute;
  right: 10px;
  .action-dropdown{
    display: flex;
    align-items: center;
    height: 40px;
    line-height: 40px;
    z-index: 1;
 }
}

</style>
