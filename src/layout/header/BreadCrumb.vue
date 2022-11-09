<!--
 * @Description:breadcrumb merge menu
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-24 15:53:48
 * @LastEditTime: 2022-11-08 13:36:00
-->
<template>
  <el-breadcrumb separator="/">
    <template
      v-for="(item) in menus"
      :key="item?.name"
    >
      <el-breadcrumb-item>
        <span v-if="!item?.children?.length"> {{ item?.meta?.title }}</span>

        <el-dropdown v-else>
          <span class="el-dropdown-link">
            {{ item?.meta?.title }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template
            #dropdown
          >
            <el-dropdown-menu>
              <template
                v-for="childItem in item?.children"
                :key="childItem.name"
              >
                <el-dropdown-item
                  v-if="!childItem.meta?.hideInMenu"
                  @click="clickMenuItem(childItem)"
                >
                  {{ childItem.meta?.title }}
                </el-dropdown-item>
              </template>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang='ts' setup>
import { computed, ref } from 'vue'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const activeIndex = ref('')
activeIndex.value = route.path

const menus = computed(() => {
  if (route.meta?.namePath) {
    let children = userStore.menus
    const paths = (route.meta.namePath as string[]).map((item) => {
      const a = children.find((n) => n.name === item)
      children = a?.children || []
      return a
    })
    return [
      {
        name: '__index',
        meta: {
          title: 'Dashboard'
        },
        children: userStore.menus
      },
      ...paths
    ]
  }
  return route.matched
})

const findLastChild = (route?: RouteRecordRaw) => {
  if (typeof route?.redirect === 'object') {
    const redirectValues = Object.values(route.redirect)
    if (route?.children?.length) {
      const target = route.children.find((n) =>
        redirectValues.some((m) => [n.name, n.path, n.meta?.fullPath].some((v) => v === m))
      )
      return findLastChild(target)
    }
    return redirectValues.find((n) => typeof n === 'string')
  } else if (typeof route?.redirect === 'string') {
    if (route?.children?.length) {
      const target = route.children.find((n) =>
        [n.name, n.path, n.meta?.fullPath].some((m) => m === route?.redirect)
      )
      return findLastChild(target)
    }
    return route?.redirect
  }
  return route
}

const clickMenuItem = (item:RouteRecordRaw) => {
  const lastChild = findLastChild(item)

  if (lastChild?.name === route.name) return
  if (/http(s)?:/.test(lastChild?.name as string)) {
    window.open(lastChild.name as string)
  } else if (lastChild?.name) {
    router.push({ name: lastChild.name })
  }
}
</script>
<style lang='scss' scoped>
  .el-sub-menu{
    position:absolute;
    z-index: 999;

  }
</style>
