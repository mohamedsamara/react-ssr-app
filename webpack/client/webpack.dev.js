/* eslint-disable */

"use strict";

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const common = require("./webpack.common");

const CURRENT_WORKING_DIR = process.cwd();

module.exports = merge(common, {
  mode: "development",
  entry: ["webpack-hot-middleware/client?reload=true"],
  output: {
    path: path.join(CURRENT_WORKING_DIR, "build/client"),
    filename: "[name].js",
    publicPath: "/"
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images",
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts",
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    port: 3000,
    inline: true,
    compress: true,
    noInfo: false,
    hot: true,
    disableHostCheck: false,
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }
});
