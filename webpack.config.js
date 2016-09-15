const Webpack = require('webpack')
const cssnano = require('cssnano')
const { resolve } = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const pluginsList = process.env.NODE_ENV === 'production' ? [
  new ExtractTextPlugin('css/styles.css'),
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
] : [
  new ExtractTextPlugin('css/styles.css')
]

module.exports = {
  entry: {
    main: './app/src/index.js'
  },
  output: {
    path: './app',
    filename: 'js/[name].js'
  },
  resolve: {
    root: resolve('./app'),
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      },
      {
        test: /\.s.ss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&localIdentName="[name]-[local]-[hash:9]"' +
          '&importLoaders=1!postcss!sass'
        )
      }
    ]
  },
  postcss: () => [cssnano],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'snoowrap': 'snoowrap',
    'lodash': '_'
  },
  plugins: pluginsList
}
