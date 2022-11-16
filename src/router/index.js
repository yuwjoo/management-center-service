/*
 * @Description: 路由配置
 * @Author: YH
 * @Date: 2022-11-16 20:19:42
 * @LastEditTime: 2022-11-16 22:05:22
 * @LastEditors: YH
 * @Reference: 
 */
const config = require("@/config");
const routerFund = require("./fund")

module.exports = function(app) {
    app.use(`${config.prefixUrl}/fund`, routerFund);
}