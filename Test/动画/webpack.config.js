/**
 * 测试版本
 */
var path, base, webpack;

base               = "./src";
path               = require('path');
webpack            = require("webpack");

module.exports = {
    entry: {
        main:         "./test"
    },
    output: {
        filename: "1.js"
    },
    module: {
        loaders: [
            {
                test:    /\.js$/,
                loader:  'babel',
                exclude: /node_modules|vue\/dist|vue-loader/
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    },
    devtool: "source-map",
    sourceMap: true
};