import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {
  entry: {
    main: path.resolve(__dirname, "./src/index.mjs"),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "development",
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html",
    }),
    new ESLintPlugin({
      exclude: ["node_modules"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.mjs$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.m?js/,
        type: "javascript/auto",
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};
