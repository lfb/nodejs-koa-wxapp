const Koa = require('koa')
const InitManager = require('./core/init')

const app = new Koa()

InitManager.initCore(app)

app.listen(3000)
