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
        entry: {
            vinoteca: [inputPath + "app.ts", inputPath + "vinoteca-style.sass"],
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
                                includePaths: [__dirname + "node_modules/materialize-css"]
                            }
                        },
                    ],
                },
                // Don't load moment.js because we don't use the date functionality
                {
                    test: __dirname + "/node_modules/moment/moment.js",
                    use: "null-loader",
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
                filename: "[name].bundle.css",
                sourceMap: !isProd,
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
