<!--
 * @Description: 分页组件
 * @version:
 * @Author: Murphy
 * @Date: 2022-07-31 12:40:19
 * @LastEditTime: 2022-10-26 15:23:00
-->
<template>
  <el-pagination
    :current-page="props.page"
    :page-size="props.limit"
    background
    :page-count="props.listCount"
    layout="total, sizes,prev, pager, next, jumper"
    :page-sizes="[2,3,4]"

    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script lang='ts' setup>
// import { PropType } from '@vue/runtime-core'
const props = defineProps({
  page: {
    type: Number,
    default: 1
  },
  limit: {
    type: Number,
    default: 10
  },
  listCount: {
    type: Number,
    default: 0
  },
  loadList: {
    type: Function,
    default: () => {}
  }
  // obj: {
  //   type: Object as PropType<{a:string, b:number}>,
  //   required: true
  // }

})

// interface PropsType{
//   page:number,
//   limit:number,
//   listCount:number,
//   loadList:()=>void
// }
// 不需要传递默认值时
// const props = defineProps<PropsType>()
// 需要传递默认值时
// const props = withDefaults(defineProps<PropsType>(), { page: 1, limit: 10, listCount: 0, loadList: () => {} })

// update:xx xx需要与pro ps的名称对应
// const emit = defineEmits(['update:page', 'update:limit'])
interface EmitType {
  (e:'update:page', page: number, a:string): void
  (e:'update:limit', limit: number): void
}

const emit = defineEmits<EmitType>()
const handleSizeChange = (page: number) => {
  emit('update:page', 12, '123')

  props.loadList()
  console.log(`${page} items per page`)
}
const handleCurrentChange = (size: number) => {
  // 如何限定第二个参数的类型
  emit('update:page', 1, '123')
  emit('update:limit', size)
  props.loadList()
  console.log(`current page: ${size}`)
}
</script>
<style lang='scss' scoped>
</style>
