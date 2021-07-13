const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.ts"),
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(ts)x?$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".vue"],
    modules: [path.resolve(__dirname, "./"), "node_modules"],
  },
  output: {
    filename: "vue3-naver-maps.js",
    library: ["Vue3NaverMaps"],
    libraryTarget: "umd",
    path: path.resolve(`${__dirname}/../vue3-naver-map-test/src`, "dist"),
  },
  externals: {
    vue: "vue",
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
