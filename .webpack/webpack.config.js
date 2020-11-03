'use strict';

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const chokidar = require("chokidar");

// Theme
const THEME_NAME = "mcg";

module.exports = {
    target: "web",
    entry: {
        main: [
            `./themes/${THEME_NAME}/src/js/index.ts`,
            `./themes/${THEME_NAME}/src/scss/main.scss`,
        ],
        "polyfills-es5": `./themes/${THEME_NAME}/src/js/polyfills-es5.ts`,
    },
    
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, `../themes/${THEME_NAME}/dist`),
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
            "@":path.resolve(__dirname, `../themes/${THEME_NAME}/src/js`),
        },
    },
   plugins: [
        new MiniCssExtractPlugin({
            filename: "style.min.css",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: `./themes/${THEME_NAME}/src/img`,
                    to: `img/`
                },
                {
                    from: `./themes/${THEME_NAME}/src/fonts`,
                    to: `fonts/`
                },
        ],
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