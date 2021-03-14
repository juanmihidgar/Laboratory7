const { merge } = require('webpack-merge');
const base = require('./base');
const helpers = require('./helpers');
const Dotenv = require('dotenv-webpack');

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: helpers.resolveFromRootPath('dist'),
    filename: './js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: './images/[name].[hash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: 'prod.env',
    }),
  ],
});
