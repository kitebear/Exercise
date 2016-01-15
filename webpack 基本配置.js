var webpack = require("webpack");               //webpack
var path = require('path');

var config = {
    //页面入口
    entry: {
        'entry': [
            "./public/vue/main.js"
        ]
    },
    //出口文件输出配置
    output: {
        path: './dist',  //js的位置
        publicPath: './dist', //web打包的资源地址
        filename: "build.js"
    },
    //加载器
    module: {
        loaders: [
            //{
            //    test: /\.scss$/,
            //    loader: "style-loader!css-loader!sass-loader"
            //},
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel!eslint',
                exclude: /node_modules/
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.png$/, loader: "url-loader?prefix=img/&limit=5000"},
            {test: /\.jpg$/, loader: "url-loader?prefix=img/&limit=5000"},
            {test: /\.gif$/, loader: "url-loader?prefix=img/&limit=5000"},
            {test: /\.woff$/, loader: "url-loader?prefix=font/&limit=5000"}
        ]
    },
    loaders: {
        js: 'babel!eslint'
    },
    //sourceMap: true, //源支持
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],
    resolve: {
        //查找module的话从这里开始查找
        root: [
            './public/', //绝对路径
            path.join(__dirname, 'dist'),
            path.join(__dirname, 'node_modules')
        ]
    }
};

module.exports = config;
