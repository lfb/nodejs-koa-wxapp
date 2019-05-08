## 项目介绍
Node.js Koa2实战开发微信小程序服务端API

## 创建数据库表 
```
# 使用前一定要在创建好数据库表
# 终端登录数据库：mysql -uroot -p密码

CREATE DATABASE IF NOT EXISTS wxapp;
```

## 项目使用

```
// 克隆项目代码
$ git clone https://github.com/liangfengbo/nodejs-koa-wxapp.git

// 进入项目目录
$ cd nodejs-koa-wxapp

// 安装包
$ npm install

// 运行服务
$ npm run dev

// 打开浏览器输入回车：http://localhost:3000
```

## 项目技术栈
- Koa 与 Koa 二次开发API 
- 多 koa-router 拆分路由
- require-directory 自动路由加载
- 异步异常链与全局异常处理 
- Sequelize ORM 管理 MySQL
- 权限控制中间件 
- LinValidator 校验器
- [更多介绍](./doc/Koa项目基础.md)



