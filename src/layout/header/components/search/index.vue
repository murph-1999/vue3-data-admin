<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-11-10 10:10:29
 * @LastEditTime: 2022-11-15 11:34:06
-->
<template>
  <el-tooltip
    content="搜索菜单"
    placement="bottom"
    effect="light"
  >
    <el-icon @click="dialogVisible = true">
      <Search />
    </el-icon>
  </el-tooltip>
  <el-dialog
    v-model="dialogVisible"
    title="搜索菜单"
    width="50%"
    draggable
  >
    <el-input
      v-model="keyword"
      class="w-50"
      size="large"
      placeholder="Search something"
      :prefix-icon="Search"
      @change="handleSearch"
    >
      <template #append>
        <el-icon><BottomLeft /></el-icon>
      </template>
    </el-input>

    <el-empty
      v-if="resultOptions.length === 0"
      description="暂无搜索结果"
    />

    <SearchResult
      v-else
      v-model="activePath"
      :options="resultOptions"
      @enter="handleEnter"
    />
    <template #footer>
      <SearchFooter />
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import SearchFooter from './components/SearchFooter.vue'
import SearchResult from './components/SearchResult.vue'
import { useDebounceFn, onKeyStroke } from '@vueuse/core'
import { computed, ref } from 'vue'
import { RouteRecordRaw, useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'

const router = useRouter()
const userStore = useUserStore()
const dialogVisible = ref(false)
const keyword = ref('')
const activePath = ref('')
const handleSearch = useDebounceFn(search, 300)
const resultOptions = ref<RouteRecordRaw[]>([])
const menusList = computed(() => transformRouteToList(userStore.menus))

function search () {
  resultOptions.value = menusList.value.filter((menu) => {
    const title = menu.meta?.title
    return (
      keyword.value &&
        title?.toLocaleLowerCase().includes(keyword.value.toLocaleLowerCase().trim())
    )
  })

  if (resultOptions.value?.length > 0) {
    activePath.value = resultOptions.value[0].name as string
  } else {
    activePath.value = ''
  }
}
/* 将menus拍平 */
function transformRouteToList (menus) {
  const res: RouteRecordRaw[] = []
  if (menus && menus.length === 0) return res

  const queue: RouteRecordRaw[] = []
  for (const item of menus) {
    queue.push(item)
    while (queue.length) {
      const cur = queue.pop()
      res.push(cur!)
      if (cur?.children?.length) {
        for (const item of cur?.children) {
          queue.push(item)
        }
      }
    }
  }
  return res
}
/* 关闭 */
function handleClose () {
  // 这里这样写有问题，当跳转到新的页面时，dialog并未关闭
  // dialogVisible.value = false
  /** 延时处理防止用户看到某些操作 */
  setTimeout(() => {
    dialogVisible.value = false
    resultOptions.value = []
    keyword.value = ''
  }, 200)
}

function findValidRoute (path) {
  const parentRoute = menusList.value.filter((item) => item.name === path && item.redirect)
  if (parentRoute.length) {
    const redirectPath = parentRoute[0].redirect

    // 判断redirect的类型
    if (typeof redirectPath === 'object') {
      return Object.values(redirectPath)[0]
    } else if (typeof redirectPath === 'string') {
      return redirectPath
    }
  } else {
    return path
  }
}
/** key enter */
function handleEnter () {
  // 找到那name时，如果name没有对应路由组件，如何重定向
  const to = findValidRoute(activePath.value)
  const { length } = resultOptions.value
  if (length === 0 || to === '') return
  if (/http(s)?:/.test(to)) {
    window.open(to)
  } else {
    router.push({ name: to })
    handleClose()
  }
}

/* key up */
function handleUp () {
  const { length } = resultOptions.value
  if (length === 0) return
  const index = resultOptions.value.findIndex((item) => item.name === activePath.value)
  if (index === 0) {
    activePath.value = resultOptions.value[length - 1].name as string
  } else {
    activePath.value = resultOptions.value[index - 1].name as string
  }
}

/* key up */
function handleDown () {
  const { length } = resultOptions.value
  if (length === 0) return
  const index = resultOptions.value.findIndex((item) => item.name === activePath.value)
  if (index === length - 1) {
    activePath.value = resultOptions.value[0].name as string
  } else {
    activePath.value = resultOptions.value[index + 1].name as string
  }
}

onKeyStroke('Enter', handleEnter)
onKeyStroke('ArrowUp', handleUp)
onKeyStroke('ArrowDown', handleDown)
</script>

<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.expand-fade-leave-active {
  margin-left: 20px;
  opacity: 0;
}
.el-empty{
  padding: 20px 0 !important
}
</style>
