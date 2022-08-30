/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-20 13:19:08
 * @LastEditTime: 2022-08-29 19:51:02
 */
import { request } from '@/utils/request'
import type { BaseResponse } from '@/utils/request'

export function updatePassword (data: any) {
  return request({
    url: 'account/password',
    method: 'post',
    data
  })
}

export function getInfo () {
  return request<BaseResponse<API.ILoginInfo>>({
    url: 'account/info',
    method: 'get'
  }, {
    isMock: true
  })
}

export function permmenu () {
  return request<API.PermMenu>({
    url: 'account/permmenu',
    method: 'get'
  })
}

export function logout () {
  return request({
    url: 'account/logout',
    method: 'post'
  })
}
