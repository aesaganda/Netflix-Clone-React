const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { EnvironmentPlugin } = require('webpack')

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
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },
    devtool: "eval-cheap-module-source-map",
    plugins: [
        new HtmlWebpackPlugin({ title: "Netflix Türkiye - TV Programlarını Çevrimiçi İzleyin, Filmleri Çevrimiçi İzleyin", template: path.resolve(__dirname, './src/index.html') }),
        new EnvironmentPlugin({
            API_KEY: "36a5061485b27e94b39f5b1cdc2a97a2",
            PROFILE_BASE_URL : "https://www.themoviedb.org/t/p/w470_and_h470_face",
            ACTOR_MOVIE_BASE_URL : "https://www.themoviedb.org/t/p/w150_and_h225_bestv2",
            MOVIE_BASE_URL : "https://api.themoviedb.org/3/",
            CARD_IMG_BASE_URL : "https://www.themoviedb.org/t/p/w220_and_h330_face/",
            REMOVE_API_URL : `https://api.themoviedb.org/3/list/8214743/remove_item?session_id=03736be069f18c992cec140c9e99f579734c39fb&api_key=36a5061485b27e94b39f5b1cdc2a97a2&media_id=`,
            ADD_MOVIE_API_URL : `https://api.themoviedb.org/3/list/8214743/add_item?api_key=36a5061485b27e94b39f5b1cdc2a97a2&session_id=03736be069f18c992cec140c9e99f579734c39fb&media_id=`,
            BASE_QUERY_URL : "https://api.themoviedb.org/3/search/movie?api_key=36a5061485b27e94b39f5b1cdc2a97a2&language=en-US&query=&include_adult=false"
        })
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