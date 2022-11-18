/*
 * @Description: 入口文件
 * @Author: YH
 * @Date: 2022-11-16 18:45:43
 * @LastEditTime: 2022-11-18 21:21:19
 * @LastEditors: YH
 * @Reference: 
 */
if(process.env.NODE_ENV !== "production") {
    require('module-alias/register'); // 导入路径别名插件
}

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const config = require("@/config");
const router = require("@/router");
const app = express();

app.use(bodyParser.json()); //全局注册使用bodyParser,处理json，raw,URL-encode格式请求体等
app.use(bodyParser.urlencoded({ extended: false })); //create application/x-www-form-urlencoded parser
app.use("/public", express.static(path.join(__dirname, 'public'))); // 静态文件目录
app.use("/", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //允许所有来源访问
    res.header("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept"); //用于判断request来自ajax还是传统请求
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS'); //允许访问的方式
    res.header('X-Powered-By', ' 3.2.1'); //修改程序信息与版本
    res.header('Content-Type', 'application/json;charset=utf-8'); //内容类型：如果是post请求必须指定这个属性
    next();
})
app.use("/api", router); // 加载路由

app.listen(config.serverPort,() => {
  console.log(`接口地址：${config.serverHost}:${config.serverPort}`);
})