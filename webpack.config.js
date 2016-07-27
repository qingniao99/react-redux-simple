/**
 * Created by qingniao99 on 2016/7/27.
 */
var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    //plugins: [
    //    new webpack.optimize.OccurrenceOrderPlugin(),
    //    new webpack.HotModuleReplacementPlugin()
    //],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    }
}
