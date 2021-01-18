var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = (env) => {
  return {
    mode: "development",
    optimization: {
      usedExports: true,
    },
    devServer: {
      port: 8000,
      open: true,
      historyApiFallback: true,
      disableHostCheck: true, // For running localhost in browserStack
      liveReload: true,
      watchContentBase: true,
    },
    target: "web",
    entry: "./index.js",
    resolve: {
      extensions: [".js", ".scss"],
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
    output: {
      path: path.resolve("./build"),
      filename: "bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "index.html",
      }),
      new BundleAnalyzerPlugin(),
    ],
  };
};
