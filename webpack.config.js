/*
 * @Description: webpack配置文件
 * @Author: YH
 * @Date: 2022-11-16 18:48:49
 * @LastEditTime: 2022-11-18 21:45:52
 * @LastEditors: YH
 * @Reference: 
 */
const webpack = require("webpack");
const path = require("path");
const package = require("./package.json");
const CopyPlugin = require("copy-webpack-plugin");

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
    target: "node",
    entry: {
        app: "./src/index.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        publicPath: "./",
        assetModuleFilename: 'assets/[hash][ext][query]'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024
                    }
                }
            },
            {
                test: /\.txt$/i,
                type: 'asset/source',
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new CopyPlugin({
            patterns: [
                { from: "src/public", to: "public" }
            ],
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'librarys',
                    chunks: 'all',
                },
            },
        },
    },
    resolve: {
        alias: generateAlias(),
        modules: package._moduleDirectories || []
    }
}