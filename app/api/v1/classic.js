const Router = require('koa-router')
const router = new Router({
    prefix: "/v1/classic"
})

const {Auth} = require('../../../middlewares/auth')

const {PositiveIntegerValidator} = require('../../validators/classic')

router.get('/latest', new Auth().m, async (ctx, next) => {
    ctx.body = {
        uid: ctx.auth.uid
    }
    // 权限分级
    //
})

module.exports = router
