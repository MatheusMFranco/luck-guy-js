const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const glob = require('glob');

module.exports = {
  mode: 'production',

  entry: glob.sync('./src/**/*.ts'),

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
    preferRelative: true,
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
