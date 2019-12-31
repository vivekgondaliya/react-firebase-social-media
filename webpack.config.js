var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

 module.exports = {
     entry: {
         app: './src/index.js'
     },
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: '[name].bundle.js'
     },
     plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: false
        }),
        new webpack.HotModuleReplacementPlugin()
     ],
     module: {
         rules : [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
         ],
     },
     stats: {
         colors: true
     },
     devtool: 'inline-source-map',
     devServer: {
        historyApiFallback: true,
        contentBase: './dist',
        hot: true
     },
     mode: 'development'
 };