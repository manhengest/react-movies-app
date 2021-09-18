const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === "development"
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            // chunks: "all",
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    }

    if (isProd) {
        config.minimizer = [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    }

    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name][fullhash].${ext}`

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: ["@babel/polyfill", "./index.tsx"],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 8000,
        hot: isDev
    },
    devtool: isDev ? "source-map" : "eval",
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "static", to: "static" }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: filename('css'),
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        // alias: {
        //     '@fonts': path.resolve(__dirname, "src/assets/fonts")
        // }
    },
    optimization: optimization(),
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
                        loader: 'file-loader',
                        options: {
                            publicPath: 'assets/images',
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            publicPath: 'assets/fonts',
                        },
                    },
                ],
            },
        ]
    }
}
