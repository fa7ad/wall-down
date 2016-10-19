const _ = require('lodash')
const Webpack = require('webpack')
const cssnano = require('cssnano')
const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { NODE_ENV } = process.env

const pluginsList = [
  new ExtractTextPlugin('css/styles.css'),
  new Webpack.NoErrorsPlugin()
]

const prodPlugins = [
  new Webpack.optimize.DedupePlugin(),
  new Webpack.optimize.OccurrenceOrderPlugin(true),
  new Webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    output: {
      comments: false
    }
  })
]

module.exports = {
  noInfo: true,
  target: 'node-webkit',
  entry: {
    main: ['babel-polyfill', './app/src/']
  },
  output: {
    path: './app',
    filename: 'js/[name].js'
  },
  devtool: 'cheap-module-sourcemap',
  resolve: {
    root: resolve('./app'),
    extensions: ['', '.js', '.jsx', '.sass']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s.ss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&localIdentName="[name]-[local]-[hash:9]"' +
          '&importLoaders=1!postcss!sass'
        )
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      }
    ]
  },
  postcss: () => [cssnano],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'snoowrap': 'snoowrap',
    'lodash': '_',
    'nw': 'nw'
  },
  plugins: _.uniq(
    NODE_ENV === 'production' ? _.concat(prodPlugins, pluginsList) : pluginsList)
}
