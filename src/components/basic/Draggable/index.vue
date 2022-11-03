<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-10-30 17:31:20
 * @LastEditTime: 2022-11-02 09:50:48
-->
<template>
  <div class="container">
    <el-button @click="add">
      add
    </el-button>
    <div class="left-panel">
      <vdn
        class="dragArea list-group"
        :list="list2"
        group="module"
        @change="log"
      >
        <!-- <div
          v-for="element in list2"
          :key="element.name"
        >
          <component :is="getComp(element.name)" />
        </div> -->

        <vdr
          v-for="element in list2"
          :key="element.name"
          :parent="true"
          :is-conflict-check="true"
          :snap="true"
          :debug="false"
          @start="dragging = true"
          @end="dragging = true"
        >
          <component :is="getComp(element.name)" />
        </vdr>
      </vdn>
    </div>
    <div class="right-panel">
      <vdn
        class="dragArea list-group"
        :list="list1"
        :group="{ name: 'module', pull: 'clone', put: false }"
        @change="log"
      >
        <div
          class="list-group-item"
          v-for="element in list1"
          :key="element.name"
        >
          <el-button type="primary">
            {{ element.name }}
          </el-button>
        </div>
      </vdn>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { componentMap } from './componentMap'
const dragging = ref(true)
const list1 = [
  { name: 'UserModule', id: 1 },
  { name: 'AgencyModule', id: 2 }
]
const list2 = ref([{ name: 'UserModule', id: 2 }])

const getComp = (comp) => {
  return componentMap[comp]
}

const log = (evt) => {
  console.log(evt)
}

const add = () => {
  list2.value.push({ name: 'AgencyModule', id: 2 }
  )
}
</script>
<style lang='scss' scoped>
.container{
  display: flex;
}
.left-panel{
  flex:1;
  border:1px solid #334678;
  height:calc(100vh - 200px)

}
.right-panel{
  width:200px;
}
.list-group{
  height: 100%;
  display:flex;
}
.list-group-item{
  margin:0 10px
}
</style>
