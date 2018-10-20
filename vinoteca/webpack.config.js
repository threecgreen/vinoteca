const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const inputPath = __dirname + "/front_end/";
const outputPath = __dirname + "/static";


module.exports = {
    devtool: "inline-source-map",
    entry: {
        global: [inputPath + "global.ts", inputPath + "vinoteca-style.sass" ],
        home: [inputPath + "home/home.ts" ],
        // Wines
        edit_wine: [inputPath + "edit_wine/edit_wine.ts"],
        new_purchase: [inputPath + "new_purchase/new_purchase.ts"],
        new_wine: [inputPath + "new_wine/new_wine.ts"],
        search_wines: [inputPath + "search_wines/search_wines.ts"],
        wine_profile: [inputPath + "wine_profile/wine_profile.ts"],
        wines: [inputPath + "wines/wines.ts",
                inputPath + "wines/jquery.tablesorter.pager.js",
                inputPath + "wines/jquery.tablesorter.widgets.js",
                inputPath + "wines/jquery.tablesorter.pager.css"],
    },
    mode: "development",
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
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
    output: {
        filename: "[name].bundle.js",
        path: outputPath,
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.$": "jquery",
            "window.jQuery": "jquery",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].bundle.css"
        })
    ],
    resolve: {
        extensions: [ ".js", ".json", ".ts" ],
    },
};
