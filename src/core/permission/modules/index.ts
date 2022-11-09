import { stringify } from 'querystring'

/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-18 11:09:47
 * @LastEditTime: 2022-08-18 11:20:08
 */
interface Permissions {
  [key: string]: {
    [key: string]: string;
  };
}

const modulesPermissionFiles = require.context('./', true, /\.ts$/)
/**
 * 根据接口路径生成接口权限码, eg: sys/user/add => sys:user:add
 * @param str 接口路径
 * @returns {string}
 */
export const generatePermCode = (str: string) => str.replace(/\//g, ':')

const filterDirs = ['/index.ts', './types.ts']

/**
 * @description 权限列表
 */
export const permissions: Permissions = modulesPermissionFiles
  .keys()
  .reduce((modules, modulePath) => {
    if (filterDirs.some((n) => modulePath.includes(n))) return modules
    // set './app.js' => 'app'
    // set './sys/app.js' => 'sysApp'
    const moduleName: string = modulePath
      .replace(/^\.\/(.*)\.\w+$/, '$1')
      .replace(/[-_/][a-z]/gi, (s) => s.substring(1).toUpperCase())
    const value = modulesPermissionFiles(modulePath).default

    // pass sys/user/add => sys:user:add
    const permissionModule = Object.keys(value).reduce((obj, key) => {
      obj[key] = generatePermCode(value[key])
      return obj
    }, {})

    modules[moduleName] = permissionModule
    // console.log('permissions modules', modules);
    return modules
  }, {})
console.log('permissions', permissions)