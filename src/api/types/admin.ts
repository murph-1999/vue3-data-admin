/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-07-31 11:58:51
 * @LastEditTime: 2022-07-31 12:14:16
 */
export interface IListParams {
  page: number,
  limit: number,
  name: string,
  roles: string,
  status: 0 | 1 | ''
}
export interface Admin {
  page: number,
  limit: number,
  name: string,
  roles: string[],
  status: 0 | 1 | ''
}
export interface AdminPostData {
  account: string,
  conf_pwd: string,
  pwd: string,
  roles: string,
  status: number,
  real_name: string
}
