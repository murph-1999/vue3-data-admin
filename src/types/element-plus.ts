/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-07-30 17:00:35
 * @LastEditTime: 2022-07-31 17:53:10
 */
import { ElForm, ElDialog } from 'element-plus'
import { FormItemRule } from 'element-plus/es/tokens'

export type IElForm = InstanceType<typeof ElForm>
export type IElDialog = InstanceType<typeof ElDialog>
export type IFormItemRule = Record<string, FormItemRule[]>
