const { resolve } = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

import { prodConfig } from "./webpack.production.config";
import { devConfig } from "./webpack.development.config";

const config = function (env: any, argv: { mode: string }) {
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
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            // alias: {
            //     '@fonts': resolve(__dirname, "src/assets/fonts")
            // }
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
                    test: /\.s[ac]ss$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: isDev,
                                reloadAll: true,
                                publicPath: "assets/styles/",
                            },
                        },
                        "css-loader",
                        "sass-loader"
                    ],
                },
                {
                    test: /\.(png|jpe?g|svg|gif)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                publicPath: "assets/images",
                            },
                        },
                    ],
                },
                {
                    test: /\.(ttf|woff|woff2|eot)$/i,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                publicPath: "assets/fonts",
                            },
                        },
                    ],
                },
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
