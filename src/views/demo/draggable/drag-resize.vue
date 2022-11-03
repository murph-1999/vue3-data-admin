<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-11-03 17:50:40
 * @LastEditTime: 2022-11-03 17:50:56
-->
<template>
  <div>
    <my-button
      type="primary"
      @click="show = true"
    >
      生成组件
    </my-button>
    <div class="row">
      <div class="col-2">
        <div class="form-group">
          <div
            class="btn-group-vertical buttons"
            role="group"
            aria-label="Basic example"
          >
            <button
              class="btn btn-secondary"
              @click="add"
            >
              Add
            </button>
            <button
              class="btn btn-secondary"
              @click="replace"
            >
              Replace
            </button>
          </div>

          <div class="form-check">
            <input
              id="disabled"
              type="checkbox"
              v-model="enabled"
              class="form-check-input"
            >
            <label
              class="form-check-label"
              for="disabled"
            >DnD enabled</label>
          </div>
        </div>
      </div>

      <div class="col-6">
        <h3>Draggable {{ draggingInfo }}</h3>

        <Transition>
          <vdr
            v-if="show"
            :list="list"
            :disabled="!enabled"
            class="list-group"
            ghost-class="ghost"
            :move="checkMove"
            @start="dragging = true"
            @end="dragging = false"
          >
            <div
              class="list-group-item"
              v-for="element in list"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </vdr>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>

import { computed, ref } from 'vue'

let id = 1
const enabled = ref(true)
const list = ref([
  { name: 'John', id: 0 },
  { name: 'Joao', id: 1 },
  { name: 'Jean', id: 2 }
])
const show = ref(false)
const dragging = ref(false)
const draggingInfo = computed(() => dragging.value ? 'under drag' : '')
const add = () => {
  list.value.push({ name: 'Juan ' + id, id: id++ })
}
const replace = () => {
  list.value = [{ name: 'Edgard', id: id++ }]
}
const checkMove = (e) => {
  window.console.log('Future index: ' + e.draggedContext.futureIndex)
}
</script>
<style lang='scss' scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
