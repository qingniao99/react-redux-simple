/**
 * Created by qingniao99 on 2016/7/27.
 */
var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        bundle1: './index.js',
        bundle2: './index2.js',
        bundle3: './index3.js',
        bundle4: './index4.js',
        bundle5: './index5.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist'], {
            root: process.cwd(),
            verbose: true,
            dry: false,
            exclude: []
        })
    ]
}
