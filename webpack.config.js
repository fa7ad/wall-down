const webpack = require('webpack');
const path = require('path');

module.exports = Object.assign({
  entry: './app/src/index.js',
  output: {
    path: './app/js',
    filename: 'bundle.js'
  },
  resolve: {
    root: path.resolve('./app'),
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["es2015", "stage-0", "react"],
        plugins: ["transform-decorators-legacy"]
      }
    }, {
      test: /\.s.ss$/,
      loaders: ["style", "css?sourceMap", "sass?sourceMap"]
    }]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "snoowrap": "snoowrap",
    "lodash": "_"
  }
}, process.env.NODE_ENV === "production" ? {
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
} : {});

