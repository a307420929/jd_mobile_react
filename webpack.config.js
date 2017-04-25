let webpack = require('webpack');
let path = require('path');
let loaders = require('./webpack.loaders');
let ExtractTextPlugin = require('extract-text-webpack-plugin');  //单独抽离出css文件插件
let CopyWebpackPlugin = require('copy-webpack-plugin');
let HtmlwebpackPlugin = require('html-webpack-plugin');  //自动生成html插件

module.exports = {
    entry:[
        'webpack-dev-server/client?http://0.0.0.0:8080',
        './index.js'
    ],
    devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
    output:{
        path:path.join(__dirname,'build'),
        filename:'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: loaders
    },
    devServer: {
        port:8081,
        contentBase: "./build", //静态资源的目录
        noInfo: true, //  --no-info option
        hot: true,   //自动刷新
        inline: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin("index.css"),
        new HtmlwebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}