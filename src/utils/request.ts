import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import { uniqueSlash } from './urlUtils'

// import { store } from '@/store'
/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-05-01 17:50:05
 * @LastEditTime: 2022-08-29 15:59:58
 */

export interface RequestOptions {
  /** 是否直接获取data，而忽略message等 */
  isGetDataDirectly?: boolean;
  /** 请求成功是提示信息 */
  successMsg?: string;
  /** 请求失败是提示信息 */
  errorMsg?: string;
  /** 是否mock数据请求 */
  isMock?: boolean;
}
const UNKNOWN_ERROR = '未知错误，请重试'
// 是否生产环境
// const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
/** 真实请求的路径前缀 */
const baseApiUrl = import.meta.env.VITE_API_BASE_URL
/** mock请求路径前缀 */
const baseMockUrl = import.meta.env.VITE_APP_MOCK_API

const service = axios.create({
  // baseURL: import.meta.env.VITE_API_BASE_URL
})
// Add a request interceptor
service.interceptors.request.use(function (config) {
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
service.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  // 自定义状态码
  // token无效 服务端异常
  // eslint-disable-next-line no-empty
  if (response.data.code && response.data.code !== 200) {
    ElMessage.error(response.data.meta.message || '请求失败，请稍后重试')
    // 手动范湖ipromise异常, 后面不会再执行
    return Promise.reject(response.data)
  }
  return response.data
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export type Response<T = any> = {
  token(token: any);
  code: number;
  message: string;
  data: T;
};

export type BaseResponse<T = any> = Promise<Response<T>>;

// request不支持泛型 不能直接操作它
// request 的get post...支持响应数据泛型
// 可能后端会再包装一层数据，所以再进行一次封装

// 封装类型
export default <T = any>(config: AxiosRequestConfig) => {
  return request(config).then(res => {
    return res
  })
}

/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */
export const request = async <T = any>(
  config: AxiosRequestConfig,
  options: RequestOptions = {}
): Promise<T> => {
  try {
    const { successMsg, errorMsg, isMock, isGetDataDirectly = false } = options

    const fullUrl = `${(isMock ? baseMockUrl! : baseApiUrl!) + config.url}`
    config.url = uniqueSlash(fullUrl)
    console.log(config.url)
    // if (IS_PROD) {
    //   // 保持api请求的协议与当前访问的站点协议一致
    //   config.url.replace(/^https?:/g, location.protocol);
    // }
    const res = await service.request(config)
    successMsg && ElMessage.success(successMsg)
    errorMsg && ElMessage.error(errorMsg)
    return isGetDataDirectly ? res.data : res
  } catch (error: any) {
    return Promise.reject(error)
  }
}
