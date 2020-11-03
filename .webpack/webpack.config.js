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
    entry: `./themes/${THEME_NAME}/src/entry.js`,
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, `../themes/${THEME_NAME}/dist`),
        filename: 'scripts.min.js'
    },
    module:{
        rules: [
            {
            test:  /\.s?css$/,
               use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"

                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
            test: /\.js$/,
            exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            }
        ]
   },
   plugins: [
        new MiniCssExtractPlugin({
            filename: "style.min.css",
        }),
        new CopyPlugin([
            { from: `./themes/${THEME_NAME}/src/img`, to: `img/` },
        ]),
        new BrowserSyncPlugin({
            notify: false,
            host: 'http://localhost',
            port: 3000,
            logLevel: 'silent',
            files: ['./*.php'],
            proxy: 'http://localhost:8080/',
        })
   ]
};