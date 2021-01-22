const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.txt$|tablesorter\.js$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      }
    ]
  },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
      querystring: require.resolve('querystring-es3'),
      url: require.resolve('url/')
    },
    alias: {
      process: 'process/browser'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser'
    }),
    new CopyWebpackPlugin([
      'manifest.json',
      'src/background.js',
      'src/styles.css',
      { from: 'images', to: 'images' }
    ])
  ],
}
