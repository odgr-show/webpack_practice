const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/main.js", //出力されるファイルネーム(デフォルトはmain.js)
    },

    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },

            {
                test: /\.(jpeg|jpg)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            esModule: false,
                            name: "images/[name][ext]",
                        },
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
