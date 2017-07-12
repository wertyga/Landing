var webpack = require('webpack');
var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

    entry: [
        path.join(__dirname, './client/index.js')
    ],

    output: {
        path: path.join(__dirname, 'public'),
        publicPath: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot-loader', 'babel-loader'],
                include: path.join(__dirname, 'client')
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.sass$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.eot$|.ttf$|.woff$|.jpg$|.jpeg$|.png$|.webp$|.svg$|.woff2$/,
                loaders: ['file-loader']
            }
        ]
    },

    plugins: [
        new UglifyJSPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProvidePlugin({
            'React': 'react',
            "createReactClass": "create-react-class",
            "PropTypes":"prop-types",
            '$': 'jquery'
        })
    ],

    resolve: {
        extensions: ['.js', '.jsx']
    }
}