/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-22 16:32:41
 * @LastEditTime: 2022-08-29 18:42:08
 */
import { ILoginInfo } from '@/api/types/common'
import type { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from '../_util'

import menuData from './menu.data'
export default [
  // 获取请求日志
  {
    url: '/mock-api/login',
    method: 'post',
    timeout: 1000,
    response: () => {
      return resultSuccess({ token: '1Sey3rt7' })
    }
  },
  {
    url: '/mock-api/account/info',
    method: 'get',
    timeout: 0,
    response: () => {
      return resultSuccess({
        menu: menuData,
        name: 'zhp',
        introduction: '我是murph-1999',
        avatar: 'ddd'
      })
    }
  }
]as MockMethod[]
