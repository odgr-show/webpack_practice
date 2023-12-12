const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    devServer: {
        static: path.resolve(__dirname, "src"),
    },
    mode: "production", //webpackで実行すればproduction(本番環境)で実行できる
    devtool: "source-map", //javascriptを読みやすいコード（記述したコード）に変換する
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/main.js", //出力されるファイルネーム(デフォルトはmain.js)
    },

    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/, //node_modulesの中は対象外にする
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                ],
            },
            {
                test: /\.(css|sass|scss)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: false, //sassの記述を表示させる。（本番環境では処理が重くなるのでfalseにしておく）
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },

            {
                test: /\.(jpeg|png|jpg)/,
                type: "asset/resource",
                generator: {
                    filename: "images/[name][ext]",
                },
                use: [],
            },

            {
                test: /\.html/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "./stylesheets/style.css",
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new CleanWebpackPlugin(),
    ],
};
