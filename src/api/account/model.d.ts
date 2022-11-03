/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-16 17:57:54
 * @LastEditTime: 2022-11-03 15:41:45
 */
declare namespace API {
  type ILoginInfo={
    menu: API.Menu[],
    avatar: string,
    name: string,
    introduction: string
  }
  type Menu = {
    id: number;
    parentId: number;
    name: string;
    router: string;
    perms: string;
    /** 当前菜单类型 0: 目录 | 1: 菜单 | 2: 权限 */
    type: number;
    icon: string;
    orderNum: number;
    viewPath: string;
    keepalive: boolean;
    isShow: boolean;
  };
  type AdminUserInfo = {
    id: number;
    avatar:string,
    departmentId: number;
    username: string;
    password: string;
    email: string;
    phone: string;
    roles: number[];
    departmentName: string;
  };
  type PermMenu = {
    menus: Menu[];
    perms: string[];
  };

}
