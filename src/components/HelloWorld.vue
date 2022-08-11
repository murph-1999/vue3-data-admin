<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-04-21 12:08:59
 * @LastEditTime: 2022-05-21 15:19:34
-->
<script setup lang="tsx">
import { ref } from 'vue'
import Foo from './foo'
// eslint-disable-next-line no-undef
defineProps<{ msg: string }>()

const count = ref(0)
const abc = <h1>abc</h1>
</script>

<template>
  <h1>{{ msg }}</h1>
  <abc />
  <Foo msg="zhp" />

  <button
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
