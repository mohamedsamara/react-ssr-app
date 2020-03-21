/* eslint-disable */
"use strict";

const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

const CURRENT_WORKING_DIR = process.cwd();
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: path.join(CURRENT_WORKING_DIR, "./server/index.js"),
  output: {
    path: path.join(CURRENT_WORKING_DIR, "build/server"),
    filename: "server.bundle.js"
  },
  resolve: {
    extensions: [".js"]
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      }
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    })
  ]
};
