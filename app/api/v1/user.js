const Router = require('koa-router')
const {RegisterValidator} = require('../../validators/validator')

const router = new Router({
    prefix: '/v1/user'
})

// 用户注册
router.post('/register', async (ctx) => {
    const v = new RegisterValidator().validate(ctx)

    ctx.body = {
        msg: '注册成功'
    }
})

module.exports = router
