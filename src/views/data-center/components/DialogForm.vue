<!--
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-07-31 17:22:42
 * @LastEditTime: 2022-08-15 16:25:34
-->
<template>
  <app-dialog-form
    :title="props.adminId ? '编辑' : '添加'"
    @confirm="confirm"
    @cancel="cancel"
    @closed="handleDialogClosed"
  >
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item
        label="Activity name"
        prop="name"
      >
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item
        label="Activity zone"
        prop="region"
      >
        <el-select
          v-model="ruleForm.region"
          placeholder="Activity zone"
        >
          <el-option
            label="Zone one"
            value="shanghai"
          />
          <el-option
            label="Zone two"
            value="beijing"
          />
        </el-select>
      </el-form-item>
      <el-form-item
        label="Activity count"
        prop="count"
      >
        <el-select-v2
          v-model="ruleForm.count"
          placeholder="Activity count"
          :options="options"
        />
      </el-form-item>
      <el-form-item
        label="Activity time"
        required
      >
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              v-model="ruleForm.date1"
              type="date"
              label="Pick a date"
              placeholder="Pick a date"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col
          class="text-center"
          :span="2"
        >
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              v-model="ruleForm.date2"
              label="Pick a time"
              placeholder="Pick a time"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item
        label="Instant delivery"
        prop="delivery"
      >
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item>
      <el-form-item
        label="Activity type"
        prop="type"
      >
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox
            label="Online activities"
            name="type"
          />
          <el-checkbox
            label="Promotion activities"
            name="type"
          />
          <el-checkbox
            label="Offline activities"
            name="type"
          />
          <el-checkbox
            label="Simple brand exposure"
            name="type"
          />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item
        label="Resources"
        prop="resource"
      >
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="Sponsorship" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="Activity form"
        prop="desc"
      >
        <el-input
          v-model="ruleForm.desc"
          type="textarea"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm(ruleFormRef)"
        >
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">
          Reset
        </el-button>
      </el-form-item>
    </el-form>
  </app-dialog-form>
</template>

<script lang='ts' setup>
import { ref, reactive } from 'vue'
import type { PropType } from 'vue'
import type { IElForm, IFormItemRule } from '@/types/element-plus'

const ruleFormRef = ref<IElForm>()
const ruleForm = reactive({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const formSize = ref('default')
// const ruleFormRef = ref < IElForm | null >(null)
const rules = ref<IFormItemRule>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change'
    }
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change'
    }
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change'
    }
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change'
    }
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change'
    }
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change'
    }
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' }
  ]
})
const props = defineProps({
  adminId: {
    type: Number as PropType<number|null>,
    default: null
  }
})
const submitForm = async (formEl: IElForm | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: IElForm | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`
}))

interface EmitsType{
  (e:'update:admin-id', value:number|null):void
}
const emit = defineEmits<EmitsType>()
const confirm = () => {
  submitForm(ruleFormRef.value)
  console.log('confirm')
}
const cancel = () => {
  resetForm(ruleFormRef.value)
  console.log('cancel')
}
const handleDialogClosed = () => {
  emit('update:admin-id', null)
  ruleFormRef.value?.clearValidate()
  ruleFormRef.value?.resetFields()
}
</script>
<style lang='scss' scoped>
</style>
