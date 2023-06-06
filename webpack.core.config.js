const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  target: "node",
  entry: {
    core: "./src/core/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./core"),
    clean: true,
    publicPath: "./",
    assetModuleFilename: "assets/[hash][ext][query]",
    library: {
      type: "commonjs",
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      {
        test: /\.txt$/i,
        type: "asset/source",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {},
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
      "~": path.resolve(__dirname, "./"),
    },
    modules: ["node_modules"],
  },
};
