/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-01 17:58:05
 * @LastEditTime: 2022-08-29 19:49:33
 */

import { request } from '@/utils/request'
import type { BaseResponse } from '@/utils/request'
import { ILoginInfo } from '../types/common'
// 提取出公共的响应部分,并指定了泛型
// interface ResponseData< T= any>{
//   status:number,
//   msg:string,
//   data:T
// }
// 使用泛型来处理后端返回的类型
export const login = (data: API.LoginParams) => {
  // 指定泛型来指定后端返回的数据
  return request<BaseResponse<API.LoginResult>>({
    method: 'POST',
    url: '/login',
    data
  }, {
    isMock: true
  })
}

export const getInfo = () => {
  // 指定泛型来指定后端返回的数据
  return request<ILoginInfo>({
    method: 'GET',
    url: '/login/info'
  }, {
    isMock: true
  })
}
