import HTMLWebpackPlugin from "html-webpack-plugin"
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

import { Configuration } from 'webpack'
import { Configuration as WebpackDevServerConfig } from 'webpack-dev-server'

export interface WebpackDevConfiguration extends Configuration {
    devServer: WebpackDevServerConfig;
}

export const devConfig: WebpackDevConfiguration = {
    mode: "development",
    devServer: {
        port: 8000,
        hot: true,
        open: true,
        historyApiFallback: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ],
};
