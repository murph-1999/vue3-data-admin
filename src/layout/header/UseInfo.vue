<!--
 * @Description:展示用户信息
 * @version:
 * @Author: Murphy
 * @Date: 2022-07-30 17:29:50
 * @LastEditTime: 2022-09-01 15:09:38
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
// import { useUserStore } from '@/store/modules/user'

const router = useRouter()
// const store = useUserStore()
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
    .then(() => {
      // 退出登录接口
      router.push({ name: 'login' })
      // 清除用户信息
      // store.commit('setUser', null)
      ElMessage({
        type: 'success',
        message: '退出登录成功'
      })
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
