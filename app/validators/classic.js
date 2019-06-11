const {
    Rule,
    LinValidator
} = require('../../core/lin-validator-v2')

const {LoginType, ArtType} = require('../lib/enum')

class PositiveIntegerValidator extends LinValidator {
    constructor() {
        super()
        this.id = [
            new Rule('isInt', '需要正整数', {min: 1})
        ]
    }
}

function checkType(vals) {
    let type = vals.body.type || vals.path.type;

    if (!type) {
        throw new Error('type是必填参数')
    }

    type = parseInt(type);
    if (!ArtType.isThisType(type)) {
        throw new Error('type参数不合法')
    }
}

class Checker {
    constructor(type) {
        this.enumType = type
    }

    check(vals) {
        let type = vals.path.type || vals.body.type;

        if (!type) {
            throw new Error('type是必填参数')
        }
        type = parseInt(type);

        if (!this.enumType.isThisType(type)) {
            throw new Error('type参数不合法1')
        }
    }
}

class ClassicValidator extends PositiveIntegerValidator {
    constructor() {
        super();
        const checker = new Checker(ArtType);
        this.validateType = checker.check.bind(checker)
    }

}

module.exports = {
    PositiveIntegerValidator,
    ClassicValidator
}
