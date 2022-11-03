<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-11-03 15:44:19
 * @LastEditTime: 2022-11-03 16:03:10
-->
<template>
  <el-descriptions title="User Info">
    <el-descriptions-item
      :label="key"
      v-for="(value, key) in browserInfo"
      :key="key"
    >
      {{ value }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script lang='ts' setup>
import { watchEffect, ref } from 'vue'
import BrowserType from '@/utils/browser-type'
import { useBattery } from '@/composables/useBattery'

// 获取浏览器信息
const browserInfo = ref(BrowserType('zh-cn'))
// 获取电池信息
const { battery, batteryStatus, calcDischargingTime } = useBattery()

watchEffect(() => {
  Object.assign(browserInfo.value, {
    距离电池充满需要:
        Number.isFinite(battery.chargingTime) && battery.chargingTime !== 0
          ? calcDischargingTime.value
          : '未知',
    剩余可使用时间:
        Number.isFinite(battery.dischargingTime) && battery.dischargingTime !== 0
          ? calcDischargingTime.value
          : '未知',
    电池状态: batteryStatus.value,
    当前电量: `${battery.level}%`
  })
})
</script>
<style lang='scss' scoped>
</style>
