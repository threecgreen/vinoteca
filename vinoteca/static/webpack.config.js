const path = require("path"),
      webpack = require("webpack");

module.exports = {
    devtool: "inline-source-map",
    entry: "./ts/index.ts",
    mode: "production",
    module: {
        rules: [
            {
                // exclude: /node_modules/,
                test: /\.tsx?$/,
                use: "ts-loader",
            },
        ],
    },
    node: {
        "chart.js": true,
        "jquery": true,
        "materialize-css": true,
        "tablesorter": true,
    },
    output: {
        filename: "index.bundle.js",
        path: path.resolve(__dirname, "js"),
    },
    resolve: {
        extensions: [ ".js", ".json", ".ts" ],
        // modules: [
        //     path.join(__dirname, "..", "..", "node_modules"),
        // ],
    },
};
