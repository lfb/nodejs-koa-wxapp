const Router = require('koa-router')
const router = new Router()

const {ParameterException} = require('../../../core/http-exception')

router.post('/v1/classic/latest', async (ctx, next) => {
    let r = Math.random()
    if (r > 0.5) {
        throw new ParameterException()

    } else {
        ctx.body = {
            key: 'classic'
        }
    }


})

module.exports = router
