/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-09-28 11:14:01
 * @LastEditTime: 2022-09-28 11:17:22
 */
export type MyFormItemProps ={
  ui?: 'input' | 'select' | 'radio' | 'date' | any
  modelValue?: any
  label?: string
  prop?: string
  required?: boolean
  rules?: any
  grid?: boolean
  cols?: MyFormItemProps[]
  span?: number
  noFormItem?: boolean
  hideLabel?: boolean,
  formState?: any
  formItemConfig?: any
  uiConfig?: any
  options?: any
  min?: number
  max?: number
  minNum?: number
  maxNum?: number
  events?: any
  canAdd?: boolean,
  slotName?:string
}
