/*
 * @Description: webpack配置文件
 * @Author: YH
 * @Date: 2022-11-16 18:48:49
 * @LastEditTime: 2022-11-17 11:31:11
 * @LastEditors: YH
 * @Reference: 
 */
const webpack = require("webpack");
const path = require("path");
const package = require("./package.json");

// 环境变量
const env = {}

// 生成导入路径别名列表
const generateAlias = () => {
    const alias = {};
    const originAlias = package._moduleAliases || {};
    for(let key in originAlias) {
        alias[key] = path.resolve(__dirname, originAlias[key]);
    }
    return alias;
}

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        publicPath: "./"
    },
    target: "node",
    resolve: {
        alias: generateAlias(),
        modules: package._moduleDirectories || []
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env
        })
    ]
}