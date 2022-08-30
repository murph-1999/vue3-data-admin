<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-19 17:09:14
 * @LastEditTime: 2022-08-15 16:00:56
-->
<template>
  <div>
    <foo msg="zhp" />
    <el-button @click="formVisible=true">
      活跃数据
    </el-button>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        fixed
        prop="date"
        label="Date"
        width="150"
      />
      <el-table-column
        prop="name"
        label="Name"
        width="120"
      />
      <el-table-column
        prop="state"
        label="State"
        width="120"
      />
      <el-table-column
        prop="city"
        label="City"
        width="120"
      />
      <el-table-column
        prop="address"
        label="Address"
        width="600"
      />
      <el-table-column
        prop="zip"
        label="Zip"
        width="120"
      />
      <el-table-column
        fixed="right"
        label="Operations"
        width="120"
      >
        <template #default>
          <el-button
            link
            type="primary"
            size="small"
          >
            Detail
          </el-button>
          <el-button
            link
            type="primary"
          >
            Edit
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <AppPagination
      v-model:page="listParams.page"
      v-model:limit="listParams.limit"
      :list-count="listCount"
      :load-list="loadList"
    />
    <dialog-form
      v-model="formVisible"
      v-model:admin-id="adminId"
    />
  </div>
</template>

<script lang='ts' setup>
import Foo from '@/components/foo'
import { reactive, ref, onMounted } from 'vue'
// import { getAdmin } from '@/api/admin'
import type { Admin, IListParams } from '@/api/types/admin'
import DialogForm from '../components/DialogForm.vue'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office'
  }
]
const formVisible = ref(false)
const adminId = ref<number|null>(null)
const list = ref<Admin[]>([])
const listCount = ref(0)
const listParams = reactive({
  page: 1,
  limit: 10,
  name: '',
  roles: '',
  status: '' as IListParams['status']
})
onMounted(() => {
  loadList()
})
const loadList = async () => {
  console.log(listParams)
  list.value = tableData
}

</script>
<style lang='scss' scoped>
</style>
