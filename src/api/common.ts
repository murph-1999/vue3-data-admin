/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-01 17:58:05
 * @LastEditTime: 2022-06-05 23:08:31
 */

import request from '@/utils/request'
import { ILoginInfo } from './types/common'
// 提取出公共的响应部分 指定了泛型
// interface ResponseData< T= any>{
//   status:number,
//   msg:string,
//   data:T
// }
// 使用泛型来处理后端返回的类型
export const login = () => {
  // 指定泛型来指定后端返回的数据
  return request<ILoginInfo>({
    method: 'GET',
    url: '/login/info'
  })
  // return request.get<ResponseData<{
  //   roles:string[],
  //   avatar:string,
  //   name:string,
  //   introduction:string
  // }>>('/login/info').then((res)=>{
  //   return res.data.data
  // })
}
