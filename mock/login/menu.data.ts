/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-29 16:13:02
 * @LastEditTime: 2022-11-09 13:35:32
 */
export default [
  {
    icon: 'icon-shezhi',
    id: 1,
    isShow: true,
    keepalive: false,
    name: '数据中心',
    orderNum: 255,
    parentId: null,
    perms: null,
    router: '/data-center',
    type: 0,
    viewPath: null
  },
  {
    icon: 'icon-shezhi',
    id: 6,
    isShow: true,
    keepalive: false,
    name: '用户数据',
    orderNum: 0,
    parentId: 1,
    perms: null,
    router: '/data-center/user',
    type: 1,
    viewPath: 'views/data-center/user'
  },
  {
    icon: 'icon-shezhi',
    id: 7,
    isShow: true,
    keepalive: false,
    name: '机构数据',
    orderNum: 0,
    parentId: 1,
    perms: null,
    router: '/data-center/agency',
    type: 1,
    viewPath: 'views/data-center/agency'
  },
  {
    icon: 'icon-shezhi',
    id: 8,
    isShow: true,
    keepalive: false,
    name: '观点数据',
    orderNum: 0,
    parentId: 1,
    perms: null,
    router: '/data-center/viewpoint',
    type: 1,
    viewPath: 'views/data-center/viewpoint'
  },
  {
    icon: 'icon-shezhi',
    id: 9,
    isShow: true,
    keepalive: false,
    name: '活跃数据',
    orderNum: 0,
    parentId: 1,
    perms: null,
    router: '/data-center/active',
    type: 1,
    viewPath: 'views/data-center/active'
  }, {
    icon: 'icon-shezhi',
    id: 2,
    isShow: true,
    keepalive: true,
    name: '用户管理',
    orderNum: 0,
    parentId: null,
    perms: null,
    router: '/user',
    type: 1,
    viewPath: 'views/user'
  }, {
    icon: 'icon-shezhi',
    id: 3,
    isShow: true,
    keepalive: true,
    name: '机构管理',
    orderNum: 0,
    parentId: null,
    perms: null,
    router: '/agency',
    type: 1,
    viewPath: 'views/agency'
  },
  {
    icon: 'icon-shezhi',
    id: 4,
    isShow: true,
    keepalive: true,
    name: '观点管理',
    orderNum: 0,
    parentId: null,
    perms: null,
    router: '/viewpoint',
    type: 0,
    viewPath: null
  },
  {
    icon: 'icon-shezhi',
    id: 10,
    isShow: true,
    keepalive: true,
    name: '股票观点管理',
    orderNum: 0,
    parentId: 4,
    perms: null,
    router: '/viewpoint/stock',
    type: 1,
    viewPath: 'views/viewpoint/stock'
  },
  {
    icon: 'icon-shezhi',
    id: 11,
    isShow: true,
    keepalive: true,
    name: '行业观点管理',
    orderNum: 0,
    parentId: 4,
    perms: null,
    router: '/viewpoint/industry',
    type: 1,
    viewPath: 'views/viewpoint/industry'
  },
  {
    icon: 'icon-shezhi',
    id: 5,
    isShow: true,
    keepalive: false,
    name: '系统管理',
    orderNum: 0,
    parentId: null,
    perms: null,
    router: '/system',
    type: 0,
    viewPath: null
  }, {
    icon: 'icon-shezhi',
    id: 12,
    isShow: true,
    keepalive: false,
    name: '账号管理',
    orderNum: 0,
    parentId: 5,
    perms: null,
    router: '/system/account',
    type: 1,
    viewPath: 'views/system/account'
  }, {
    icon: 'icon-shezhi',
    id: 13,
    isShow: true,
    keepalive: false,
    name: '角色管理',
    orderNum: 0,
    parentId: 5,
    perms: null,
    router: '/system/role',
    type: 1,
    viewPath: 'views/system/role'
  }
]
