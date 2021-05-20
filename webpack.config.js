const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".json", "vue"],
    modules: [path.resolve(__dirname, "./"), "node_modules"],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: "vue3-naver-maps.js",
    library: ["Vue3NaverMaps"],
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
  },
};
