const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, "./src/js/index.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.min.js'
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },
    devtool: "eval-cheap-module-source-map",
    plugins: [

        new HtmlWebpackPlugin({ title: "Netflix Türkiye - TV Programlarını Çevrimiçi İzleyin, Filmleri Çevrimiçi İzleyin", template: path.resolve(__dirname, './public/index.html'), favicon: "./static/img/favicon/favicon.png" }),
        new Dotenv(),
    ],
    devServer: {
        static: './',
        //contentBase: path.join(__dirname, 'dist/'),
        compress: true,
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true
    },
}