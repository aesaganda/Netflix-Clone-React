const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, "./src/js/index.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.min.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
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
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },
    devtool: "eval-cheap-module-source-map",
    plugins: [
        new HtmlWebpackPlugin({ title: "Webpack & React App", template: path.resolve(__dirname, './src/index.html') })
    ],
    devServer: {
        static: './',
        //contentBase: path.join(__dirname, 'dist/'),
        compress: true,
        port: 9000,
        open: true,
        hot: true,
        historyApiFallback: true
    },
}