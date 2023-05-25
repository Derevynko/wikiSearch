const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
      main:path.resolve(__dirname, './src/index.js')
    },
    output: {
        filename:"bundle.js",
        path: path.resolve(__dirname, "./dist")
    },
     mode: 'development',
  plugins: [
    new HTMLWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename:"index.html"
        }),
    ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
{
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};