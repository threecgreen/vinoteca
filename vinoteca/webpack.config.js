const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const inputPath = __dirname + "/front_end/";
const outputPath = __dirname + "/static";

// For date-fns locales
const supportedLocales = ["en"];

module.exports = (env, argv) => {
    const isProd = argv.mode == "production" || argv.mode == "p";

    // console.log(`This is ${isProd ? 'production' : 'development'}`);
    return {
        devtool: isProd ? false : "inline-source-map",
        // Dead-code elimination fails for multiple entries per https://github.com/webpack/webpack/issues/4453
        // Creating an array of entries resulted in a core dump
        entry: {
            global: [inputPath + "global.ts", inputPath + "vinoteca-style.sass"],
            home: [inputPath + "home/home.ts"],
            // Dashboards
            dashboards: [inputPath + "dashboards/dashboards.ts"],
            // Producers
            producer_profile: [inputPath + "producer_profile/producer_profile.ts"],
            // Places
            region_profile: [inputPath + "region_profile/region_profile.ts"],
            viti_area_profile: [inputPath + "viti_area_profile/viti_area_profile.ts"],
            // Wines
            inventory: [inputPath + "inventory/inventory.ts"],
            new_purchase: [inputPath + "new_purchase/new_purchase.ts"],
            new_wine: [inputPath + "new_wine/new_wine.ts"],
            search_wines: [inputPath + "search_wines/search_wines.ts"],
            wine_profile: [inputPath + "wine_profile/wine_profile.ts"],
            wines: [inputPath + "wines/wines.ts"],
            // Wine Attrs
            grapes: [inputPath + "grapes/grapes.ts"],
            wine_type_profile: [inputPath + "wine_type_profile/wine_type_profile.ts"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: { configFile: isProd ? "tsconfig.prod.json" : "tsconfig.json" },
                        }
                    ]
                },
                {
                    test: /\.(css|sass)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: !isProd,
                            },
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: !isProd,
                            }
                        },
                    ],
                },
                // Don't load moment.js because we don't use the date functionality
                {
                    test: __dirname + '/node_modules/moment/moment.js',
                    use: 'null-loader',
                },
            ],
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        name: "vendors",
                        test: /[\\/]node_modules[\\/]/,
                        chunks: "initial",
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
            }),
            // Reduce date-fns locales
            new webpack.ContextReplacementPlugin(
                /date\-fns[\/\\]/,
                new RegExp(`[/\\\\\](${supportedLocales.join('|')})[/\\\\\]`)
            ),
            // If we do include moment, reduce locales
            new webpack.ContextReplacementPlugin(
                /moment[\/\\]locale$/,
                new RegExp(`[/\\\\\](${supportedLocales.join('|')})[/\\\\\]`)
            ),
        ],
        resolve: {
            extensions: [".js", ".json", ".ts", ".tsx"],
        },
    };
}
