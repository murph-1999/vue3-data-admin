/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-18 11:09:47
 * @LastEditTime: 2022-08-18 11:10:20
 */
import type { SysLogPerms } from './log'
import type { SysDeptPerms } from './dept'
import type { SysMenuPerms } from './menu'
import type { SysOnlinePerms } from './online'
import type { SysRolePerms } from './role'
import type { SysTaskPerms } from './task'
import type { SysUserPerms } from './user'
import type { SysServePerms } from './serve'

export type SysPermissionType =
  | SysLogPerms
  | SysDeptPerms
  | SysMenuPerms
  | SysOnlinePerms
  | SysRolePerms
  | SysTaskPerms
  | SysServePerms
  | SysUserPerms;
