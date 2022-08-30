/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-18 11:09:47
 * @LastEditTime: 2022-08-18 11:10:31
 */
import type { SysPermissionType } from './sys'
import type { NetdiskPermissionType } from './netdisk'

export type PermissionType = ReplaceAll<SysPermissionType | NetdiskPermissionType, '/', '.'>;
