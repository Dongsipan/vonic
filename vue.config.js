const path = require("path");
module.exports = {
  devServer: {
    host: "0.0.0.0",
    port: 8082,
    https: false,
    hot: true,
    open: true,
    compress: true
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    config.resolve.alias.set("~", path.resolve("components"));

    config.module
      .rule("js")
      .include.add(/components/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap(options => {
        // 修改它的选项...
        return options;
      });
  },
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,

    // 是否开启 CSS source map？
    sourceMap: true,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {},

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false
  }
};
