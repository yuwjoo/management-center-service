const Router = require("express").Router();

Router.use("/test", require("./modules/test"));
Router.use("/video", require("./modules/video"));

module.exports = Router;
