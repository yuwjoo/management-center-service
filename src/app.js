if (process.env.NODE_ENV !== "production") {
  require("module-alias/register"); // 导入路径别名插件
}

const path = require("path");
const express = require("express");
const package = require("~/package.json");
const api = require("@/api");
const app = express();

app.use(express.json()); // 处理json，raw,URL-encode格式请求体等
app.use(express.urlencoded({ extended: false })); // create application/x-www-form-urlencoded parser
app.use("/public", express.static(path.join(__dirname, "public"))); // 静态文件目录
app.use("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // 允许所有来源访问
  res.header(
    "Access-Control-Allow-Headers",
    " Origin, X-Requested-With, Content-Type, Accept"
  ); // 用于判断request来自ajax还是传统请求
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS"); // 允许访问的方式
  res.header("X-Powered-By", " 3.2.1"); // 修改程序信息与版本
  res.header("Content-Type", "application/json;charset=utf-8"); // 内容类型：如果是post请求必须指定这个属性
  next();
});
app.use("/api", api); // 加载路由
app.listen(package.serverPort, () => {
  console.log(`接口地址：127.0.0.1:${package.serverPort}`);
});