import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
// import { store } from '@/store'
/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-01 17:50:05
 * @LastEditTime: 2022-07-30 22:52:08
 */
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL
})
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 可以统一设置用户token，token可以放在登录返回信息中
  // const user = store.state.user
  // if (user && user.token) {
  //   if (config && config.headers) {
  //     config.headers.Authorization = `Bearer ${user.token}`
  //   }
  // }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // 自定义状态码
  // token无效 服务端异常
  // eslint-disable-next-line no-empty
  if (response.data.meta.code && response.data.meta.code !== 200) {
    ElMessage.error(response.data.meta.message || '请求失败，请稍后重试')
    // 手动范湖ipromise异常, 后面不会再执行
    return Promise.reject(response.data)
  }
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

// request不支持泛型 不能直接操作它
// request 的get post...支持响应数据泛型
// 可能后端会再包装一层数据，所以再进行一次封装

// 封装类型
export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return (res.data.data || res.data) as T
  })
}
