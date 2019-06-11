const {
    Rule,
    LinValidator
} = require('../../core/lin-validator-v2')

const {LoginType} = require('../lib/enum')

class PositiveIntegerValidator extends LinValidator {
    constructor() {
        super()
        this.id = [
            new Rule('isInt', '需要正整数', {min: 1})
        ]
    }
}

function checkType(vals) {
    if(!vals.body.type){
        throw new Error('type是必填参数')
    }

    if (!LoginType.isThisType(vals.body.type)) {
        throw new Error('type参数不合法')
    }

}

class LikeValidator extends PositiveIntegerValidator {
    constructor() {
        super()
        this.validateType = checkType
    }
}

module.exports = {
    LikeValidator
}
