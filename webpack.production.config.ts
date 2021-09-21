import HTMLWebpackPlugin from "html-webpack-plugin";
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')

import { Configuration } from 'webpack'

export const prodConfig: Configuration = {
    mode: "production",
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "static", to: "static" }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: "[name][fullhash].css",
        })
    ],
    optimization: {
        splitChunks: {
            // chunks: "all",
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },
};
