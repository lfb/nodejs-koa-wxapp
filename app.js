const Koa = require('koa')
const Router = require('koa-router')
const requireDirectory = require('require-directory')

const app = new Koa()

// 路由自动加载
requireDirectory(module, './api', {
    visit: whenLoadModule
})

// 判断 requireDirectory 加载的模块是否为路由
function whenLoadModule(obj) {
    if (obj instanceof Router) {
        app.use(obj.routes())
    }
}

app.listen(3000)
