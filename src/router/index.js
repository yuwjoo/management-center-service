/*
 * @Description: 路由配置
 * @Author: YH
 * @Date: 2022-11-16 20:19:42
 * @LastEditTime: 2022-11-17 13:47:50
 * @LastEditors: YH
 * @Reference: 
 */
const express = require("express");
const Router = express.Router();
const routerFund = require("./fund");

Router.use("/fund", routerFund);

module.exports = Router;