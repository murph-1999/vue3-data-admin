<!--
 * @Description:展示用户信息
 * @version:
 * @Author: Murphy
 * @Date: 2022-07-30 17:29:50
 * @LastEditTime: 2022-11-15 11:14:42
-->
<template>
  <el-dropdown>
    <span class="el-dropdown-link">admin</span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang='ts' setup>
import { ElMessageBox, ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import { to } from '@/utils/awaitTo'

const router = useRouter()
const userStore = useUserStore()

const handleLogout = () => {
  ElMessageBox.confirm(
    '确定退出登录吗',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning'
    }
  )
    .then(async () => {
      const [err] = await to(userStore.logout())
      if (err) {
        ElMessage({
          type: 'error',
          message: '退出登录失败'
        })
      } else {
        router.push({ name: 'Login' })

        ElMessage({
          type: 'success',
          message: '退出登录成功'
        })
      }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消退出登录'
      })
    })
}
</script>
<style lang='scss' scoped>
  .el-dropdown{
    float: right;
  }
</style>
