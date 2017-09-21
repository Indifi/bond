/*
 * created by aditya on 21/09/17
 */

"use strict";

const path = require("path");

const outputPath = path.join(__dirname, "../build");

const config = {
    devtool: "cheap-module-source-map",
    entry: "./content/src/scripts/index.js",
    output: {
        path: outputPath,
        filename: "content.js"
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /\.js?$/,
                exclude: /(node_module|vendor|bower_components)/
            }
        ]
    }
};

module.exports = config;
