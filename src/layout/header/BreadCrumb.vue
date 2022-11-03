<!--
 * @Description:breadcrumb merge menu
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-24 15:53:48
 * @LastEditTime: 2022-11-03 14:02:00
-->
<template>
  <el-breadcrumb separator="/">
    <template
      v-for="(item) in menus"
      :key="item?.name"
    >
      <el-breadcrumb-item>
        {{ item?.meta?.title }}
        <template
          v-if="item?.children?.length"
          #overlay
        >
          <el-menu :default-active="activeIndex">
            <el-sub-menu>
              <template
                v-for="childItem in item?.children"
                :key="childItem.name"
              >
                <el-menu-item
                  v-if="!childItem.meta?.hideInMenu"
                  :index="childItem.name"
                  @click="clickMenuItem(childItem)"
                >
                  {{ childItem.meta?.title }}
                </el-menu-item>
              </template>
            </el-sub-menu>
          </el-menu>
        </template>
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
    const paths = route.meta.namePath?.map((item) => {
      const a = children.find((n) => n.name === item)
      children = a?.children || []
      return a
    })
    return [
      // {
      //   name: '__index',
      //   meta: {
      //     title: 'vue'
      //   },
      //   children: userStore.menus
      // },
      ...paths
    ]
  }
  return route.matched
})

const clickMenuItem = (item:RouteRecordRaw) => {
  if (item?.name === route.name) return
  if (/http(s)?:/.test(item?.name as string)) {
    window.open(item.name as string)
  } else if (item?.name) {
    router.push({ name: item.name })
  }
}
</script>
<style lang='scss' scoped>
  .el-sub-menu{
    position:absolute;
    z-index: 999;

  }
</style>
