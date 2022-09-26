<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-20 16:27:23
 * @LastEditTime: 2022-09-20 16:27:41
-->
<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button
            class="button"
            text
          >
            Operation button
          </el-button>
        </div>
      </template>
      <div
        v-for="o in 4"
        :key="o"
        class="text item"
      >
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </div>
</template>

<script lang='ts' setup>
</script>
<style lang='scss' scoped>
</style>
