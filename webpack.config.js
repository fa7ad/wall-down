const webpack = require('webpack');

module.exports = Object.assign({
  entry: './app/index.js',
  output: {
    path: './resources/js',
    filename: 'bundle.js'
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
    "react-dom": "ReactDOM"
  }
}, process.env.NODE_ENV === "production" ? {
  plugins: [
    new webpack.optimize.DedupePlugin(),
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