const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const inputPath = "./front_end/";
const outputPath = __dirname + "/static";


module.exports = {
    devtool: "inline-source-map",
    entry: {
        global: [inputPath + "global.ts", inputPath + "vinoteca-style.sass" ],
        home: [inputPath + "home/home.ts", inputPath + "vinoteca-style.sass" ],
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
            },
            {
                test: /\.(css|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        }
                    },
                ],
            }
        ],
    },
    node: {
        "chart.js": true,
        "jquery": true,
        "materialize-css": true,
        "tablesorter": true,
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
    output: {
        filename: "[name].bundle.js",
        path: outputPath,
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            MaterializeCsss: 'materialize-css',
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],
    resolve: {
        extensions: [ ".js", ".json", ".ts" ],
    },
};
