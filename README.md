# Vue 3 + TypeScript + Vite

> 基于 vite2.x + vue3.x + element-plus2.x + typescript4.x 的后台管理系统模板
> 部分设计参考了 [vite-vue3-admin](https://github.com/buqiyuan/vite-vue3-admin)

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

- 安装依赖

```bash
cd vue3-data-admin

npm install

```

- 运行

```bash
npm run dev
```

- 打包

```bash
npm run build
```

## 项目目录
```
├─vue3-data-admin                 # 根目录
│  ├─src
     ├─api                        # api 接口封装
     ├─assets                     # 需要编译构建的静态资源
│    ├─components                 # 组件
│    ├─composables                # 组合式 api 封装
│    ├─core                       # 一些核心模块
│    ├─directives                 # 一些指令
│    ├─enums                      # 枚举值
│    ├─layout                     # 全局布局
│    ├─plugins                    # 插件安装，包括自定义组件的注册等
│    ├─router                     # 路由
│    ├─store                      # 状态管理
│    ├─styles                     # 样式文件
│    ├─types                      # 类型文件
│    ├─utils                      # 全局方法
│    ├─views                      # 路由页面
│    ├─App.vue                    # 项目的根组件
│    ├─main.ts                    # 创建根 vue 实例
├─ts.config.ts                    # ts 配置
├─vite.config.ts                  # vite 配置
├─README.md                       # README
```

### todolist

- [ ] 动态表单
- [ ] 可拖拽模块大屏展示
- [ ] socket.io应用
- [ ] PDF 导出
- [ ] 其他...

