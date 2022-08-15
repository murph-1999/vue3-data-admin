/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-15 11:04:45
 * @LastEditTime: 2022-08-15 11:09:42
 */
export const LOGIN_NAME = 'Login'

export const REDIRECT_NAME = 'Redirect'

// 路由白名单
export const whiteNameList = [LOGIN_NAME, 'icons', 'error', 'error-404'] as const // no redirect whitelist

export type WhiteNameList = typeof whiteNameList;

export type WhiteName = typeof whiteNameList[number];
