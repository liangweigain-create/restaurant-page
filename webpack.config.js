// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          // 配置图片打包后的输出路径和文件名
          filename: 'images/[name].[hash][ext]',  // 打包到 dist/images/ 文件夹
          // [name]：图片原文件名；[hash]：哈希值（避免缓存）；[ext]：原文件后缀
        },
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,  // 8KB 以下的图片会被转成 Base64（减少请求数）
            // 超过 8KB 则打包成单独图片文件，可根据需求调整大小
          }
        }
      },
    ],
  },
};
