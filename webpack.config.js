/**
 * Created by wangxiaottt on 16/7/13.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        loaders: [
            {test: /\.vue$/, loader: 'vue'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.html$/, loader: 'html'}
        ]
    },
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'index.js'
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    vue: {
        postcss: [require('postcss-pxtorem')({
            rootValue: 12,
            unitPrecision: 5,
            propWhiteList: ['font', 'font-size', 'line-height', 'letter-spacing', 'min-height', 'height', 'width', 'padding', 'margin', 'left', 'right', 'top', 'bottom'],
            selectorBlackList: [/^html$/],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        })]
    }
};