/**
 * Created by qingniao99 on 2016/7/27.
 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        bundle1: './index.js',
        bundle2: './index2.js',
        bundle3: './index3.js',
        bundle4: './index4.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/static/'
    },
    //plugins: [
    //    new webpack.optimize.OccurrenceOrderPlugin(),
    //    new webpack.HotModuleReplacementPlugin()
    //],
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    }
    //},
    //plugins: [
    //    new webpack.optimize.UglifyJsPlugin({
    //        compress: {
    //            //supresses warnings, usually from module minification
    //            warnings: false
    //        }
    //    })]
}
