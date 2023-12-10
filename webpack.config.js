const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    devServer: {
        static: path.resolve(__dirname, "src"),
    },
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/main.js", //出力されるファイルネーム(デフォルトはmain.js)
    },

    module: {
        rules: [
            {
                test: /\.(css|sass|scss)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            },

            {
                test: /\.(jpeg|jpg|png)/,
                type: "asset/resource",
                generator: {
                    filename: "images/[name][ext]",
                },
                use: [],
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
