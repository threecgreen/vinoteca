const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const inputPath = __dirname + "/front_end/";
const outputPath = __dirname + "/static";


module.exports = {
    devtool: "inline-source-map",
    entry: {
        global: [inputPath + "global.ts", inputPath + "vinoteca-style.sass"],
        home: [inputPath + "home/home.ts"],
        // Dashboards
        dashboards: [inputPath + "dashboards/dashboards.ts"],
        // Producers
        producer_profile: [inputPath + "producer_profile/producer_profile.ts"],
        // Regions
        region_profile: [inputPath + "region_profile/region_profile.ts"],
        // Wines
        edit_purchase: [inputPath + "edit_purchase/edit_purchase.ts"],
        edit_wine: [inputPath + "edit_wine/edit_wine.ts"],
        inventory: [inputPath + "inventory/inventory.ts"],
        new_purchase: [inputPath + "new_purchase/new_purchase.ts"],
        new_wine: [inputPath + "new_wine/new_wine.ts"],
        search_wines: [inputPath + "search_wines/search_wines.ts"],
        wine_profile: [inputPath + "wine_profile/wine_profile.ts"],
        wines: [inputPath + "wines/wines.ts",
                inputPath + "wines/jquery.tablesorter.pager.js",
                inputPath + "wines/jquery.tablesorter.widgets.js",
                inputPath + "wines/jquery.tablesorter.pager.css"],
        // Wine Attrs
        grapes: [inputPath + "grapes/grapes.ts"]
    },
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
    performance: {
        hints: false
    },
    output: {
        filename: "[name].bundle.js",
        path: outputPath,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].bundle.css"
        })
    ],
    resolve: {
        alias: {
            // Avoid moment
            "chart.js": "chart.js/dist/Chart.js",
            // Better for deduplication
            jquery: "jquery/src/jquery"
        },
        extensions: [ ".js", ".json", ".ts", ".tsx" ],
    },
};
