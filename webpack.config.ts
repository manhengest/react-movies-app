const { resolve } = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
import { Configuration } from 'webpack'

import { prodConfig } from "./webpack.production.config";
import { devConfig } from "./webpack.development.config";

const config = function (env: any, argv: { mode: string }): Configuration {
    const isDev = argv.mode === "development";
    const isProd = !isDev;

    let commonConfig = {
        context: resolve(__dirname, "src"),
        devtool: isProd ? "source-map" : "eval",
        entry: ["@babel/polyfill", "./index.tsx"],
        output: {
            filename: isDev ? "[name].js" : "[name][fullhash].js",
            path: resolve(__dirname, "dist")
        },
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        },
        module: {
            rules: [
                {
                    test: /\.?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                },
                {
                    test: /\.?ts$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-typescript"]
                        }
                    }
                },
                {
                    test: /\.?tsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
                        }
                    }
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.?svg$/,
                    type: 'asset/resource',
                    generator: {
                        filename: isDev ? "assets/icons/[name][ext][query]" : "assets/icons/[hash][ext][query]"
                    }
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: isDev ? "assets/images/[name][ext][query]" : "assets/images/[hash][ext][query]"
                    }
                },
                {
                    test: /\.(ttf|woff|woff2|eot)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: isDev ? "assets/fonts/[name][ext][query]" : "assets/fonts/[hash][ext][query]"
                    }
                }
            ]
        }
    }

    if (isDev) {
        Object.assign(commonConfig, devConfig)
    } else {
        Object.assign(commonConfig, prodConfig)
    }

    return commonConfig
}

export default config
