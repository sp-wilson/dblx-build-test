'use strict';

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const chokidar = require("chokidar");

// Theme
const THEME_NAME = "mcg";
const THEME_PATH = `./themes/${THEME_NAME}/assets/`;

module.exports = {
    target: "web",
    entry: {
        main: [
            `${THEME_PATH}/src/js/index.ts`,
            `${THEME_PATH}/src/scss/main.scss`,
        ],
        "polyfills-es5": `${THEME_PATH}/src/js/polyfills-es5.ts`,
    },
    output: {
        path: path.resolve(__dirname, `.${THEME_PATH}`),
    },
    module:{
        rules: [
            {
                test: /\.([tj]sx?|mjs)$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: { babelrc: false },
                    },
                ],
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                        },
                    },
                    {
                        loader: "css-loader",
                        options: { url: false },
                    },
                    {
                        loader: "postcss-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".ts", ".tsx", ".scss"],
        alias: {
            "@":path.resolve(__dirname, `.${THEME_PATH}/src/js`),
        },
    },
    watchOptions: {
        ignored: /node_modules/,
    },
   plugins: [
        new MiniCssExtractPlugin({
            filename: "style.min.css",
        }),
        new BrowserSyncPlugin({
            notify: false,
            host: 'http://localhost',
            port: 3000,
            logLevel: 'silent',
            proxy: 'http://localhost:8080/',
            files: [
                {
                    match: [
                        '**/*.php'
                    ],
                    fn: function(event, file) {
                        if (event === "change") {
                            const bs = require('browser-sync').get('bs-webpack-plugin');
                            bs.reload();
                        }
                    }
                }
            ]
        })
   ]
};