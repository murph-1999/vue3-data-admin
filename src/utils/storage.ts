/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-07-30 18:08:19
 * @LastEditTime: 2022-07-30 18:21:25
 */
export const getItem = <T>(key: string): T | null => {
  const data = window.localStorage.getItem(key)
  if (!data) return null
  try {
    return JSON.parse(data) as T
  } catch (error) {
    return null
  }
}

export const setItem = (key: string, value: object | string | null) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}
