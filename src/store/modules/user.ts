/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-19 16:02:23
 * @LastEditTime: 2022-11-03 16:52:11
 */
import { type RouteRecordRaw } from 'vue-router'
import { defineStore } from 'pinia'
import { store } from '@/store'
import { login } from '@/api/login'
import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum'
import { logout, getInfo } from '@/api/account/index'
import { generatorDynamicRouter } from '@/router/generator-router'
import { resetRouter } from '@/router/index'
import { Storage } from '@/utils/Storage'

interface UserState {
  token: string;
  name: string;
  avatar: string;
  // like [ 'sys:user:add', 'sys:user:update' ]
  perms: string[];
  menus: RouteRecordRaw[];
  userInfo: Partial<API.AdminUserInfo>;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: Storage.get(ACCESS_TOKEN_KEY, null),
    name: 'admin',
    avatar: '',
    perms: [],
    menus: [],
    userInfo: {}
  }),
  getters: {
    getToken (): string {
      return this.token
    },
    getAvatar (): string {
      return this.avatar
    },
    getName (): string {
      return this.name
    },
    getPerms (): string[] {
      return this.perms
    }
  },
  actions: {
    /** 清空token及用户信息 */
    resetToken () {
      this.avatar = this.token = this.name = ''
      this.perms = []
      this.menus = []
      this.userInfo = {}
      Storage.clear()
    },
    /** 登录成功保存token */
    setToken (token: string) {
      this.token = token ?? ''
      const ex = 7 * 24 * 60 * 60 * 1000
      Storage.set(ACCESS_TOKEN_KEY, this.token, ex)
    },
    /** 登录 */
    async login (params: API.LoginParams) {
      try {
        const { data } = await login(params)
        this.setToken(data.token)
        return this.afterLogin()
      } catch (error) {
        return Promise.reject(error)
      }
    },
    /** 登录成功之后, 获取用户信息以及生成权限路由 */
    async afterLogin () {
      try {
        const { data } = await getInfo()
        this.name = data.name
        this.avatar = data.avatar
        this.userInfo = data
        // 通过id生成动态路由
        const generatorResult = await generatorDynamicRouter(data.menu)
        this.menus = generatorResult.menus.filter((item) => !item.meta?.hideInMenu)
        console.log('menus', this.menus)
        return { data }
      } catch (error) {
        return Promise.reject(error)
        // return this.logout();
      }
    },
    /** 登出 */
    async logout () {
      const data = await logout()
      this.resetToken()
      resetRouter()
      return { data }
    }
  }
})

// 在组件setup函数外使用
// reference https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html
export function useUserStoreWithOut () {
  return useUserStore(store)
}
