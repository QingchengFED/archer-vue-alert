/**
 * Created by wangxiaottt on 16/8/18.
 */
var webpack = require('webpack')
var config = require('./webpack.base.config')

config.entry = './demo';

config.output = {
    filename: './demo/dist/index.js',
    publicPath: '/'
}


module.exports = config;