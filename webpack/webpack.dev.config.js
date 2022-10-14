const common = require("./webpack.common.config");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  output: {
    publicPath: "",
  },
  mode: "development",
});
