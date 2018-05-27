const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./index.js",
  target: 'web',
  devServer: {
    inline: true,
    port: 3000,
    hot: true,
    contentBase: './'
  },
  output: {
    path: path.resolve(__dirname, "./"),
    filename: "bundle.js"
  }
};