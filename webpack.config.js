import path from "path";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlWebpack = new HtmlWebpackPlugin({ template: "./index.html" });

export default {
  plugins: [htmlWebpack],
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(?:js|mjs|cjs)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
