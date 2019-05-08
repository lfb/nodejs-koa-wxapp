const {sequelize} = require('../../core/db')
const {Sequelize, Model} = require('sequelize')

// 定义用户模型
class User extends Model {

}

// 初始用户模型
User.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nickname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    openid: {
        type: Sequelize.STRING(64),
        unique: true
    },
}, {
    sequelize,
    tableName: 'user'
})
