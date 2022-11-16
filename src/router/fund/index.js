/*
 * @Description: 
 * @Author: YH
 * @Date: 2022-11-16 21:53:42
 * @LastEditTime: 2022-11-16 22:02:35
 * @LastEditors: YH
 * @Reference: 
 */
const express = require("express");
const Router = express.Router();

Router.get("/getCharDetails", (req, res) => {
    res.send({
        aa: 4, 
        bb: 5
    })
})

module.exports = Router;