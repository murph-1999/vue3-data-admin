<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-11-10 11:27:40
 * @LastEditTime: 2022-11-15 10:40:37
-->
<template>
  <div class="search-footer flex-bc">
    <div class="search-logo">
      <span>search by Murphy</span>
    </div>
    <ul class="search-command flex">
      <li>
        <el-icon><StarFilled /></el-icon>to select
      </li>
      <li>
        <el-icon><Top /></el-icon><el-icon><Bottom /></el-icon> to navigate
      </li>
      <li>
        <el-icon><CircleClose /></el-icon>to close
      </li>
    </ul>
  </div>
</template>

<script lang='ts' setup>
</script>
<style lang='scss' scoped>
.search-footer{
  flex-direction: row-reverse;
  flex-shrink: 0;
}
.search-command{
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

    li{
      display: flex;
      align-items: center;
      text-align: left;
      margin-right: 15px;
    }
}
</style>
