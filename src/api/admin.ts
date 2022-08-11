/*
 * @Description:数据的增删改查
 * @version:
 * @Author: Murphy
 * @Date: 2022-07-31 11:56:50
 * @LastEditTime: 2022-07-31 12:16:14
 */
import request from '@/utils/request'
import { AdminPostData, IListParams, Admin } from './types/admin'

export const createAdmin = (data:
  AdminPostData
) => {
  return request({
    method: 'POST',
    url: '/setting/admin',
    data
  })
}
export const getAdmin = (params:
  IListParams
) => {
  return request<{ count: number, list: Admin[] }>({
    method: 'GET',
    url: '/setting/admin',
    params
  })
}

export const updateAdmin = (id: number, data:
  AdminPostData
) => {
  return request({
    method: 'PUT',
    url: `/setting/admin/${id}`,
    data
  })
}

export const deleteAdmin = (id: number
) => {
  return request({
    method: 'DELETE',
    url: `/setting/admin/${id}`

  })
}
