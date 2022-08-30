/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-24 16:35:47
 * @LastEditTime: 2022-08-29 15:00:57
 */
import { resultSuccess } from '../_util'
import type { MockMethod } from 'vite-plugin-mock'

const demoList = (keyword, count = 20) => {
  const result = {
    list: [] as any[]
  }
  for (let index = 0; index < count; index++) {
    result.list.push({
      name: `${keyword ?? ''}选项${index}`,
      id: `${index}`
    })
  }
  return result
}

export default [
  {
    url: '/mock-api/select/getDemoOptions',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { keyword, count } = query
      console.log(keyword)
      return resultSuccess(demoList(keyword, count))
    }
  }
] as MockMethod[]
