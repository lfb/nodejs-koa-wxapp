module.exports = {
    environment: 'dev',
    database: {
        dbName: 'wxapp',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password'
    },
    security: {
        secretKey: "abcdefg",
        // 过期时间 1小时
        expiresIn: 60 * 60
    },
    wx: {
        appId: 'wxd2e0c5da046bc12e',
        appSecret: 'e4b11b262b491bc81ddce8e89fc2d972',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}
