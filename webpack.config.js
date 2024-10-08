const path = require('path');
const glob = require('glob');

module.exports = {
  mode: 'production',

  entry: glob.sync('./src/**/*.ts', { ignore: ['./src/**/*.test.ts'] }),

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules|\.test\.ts$/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
    preferRelative: true,
  },
};
