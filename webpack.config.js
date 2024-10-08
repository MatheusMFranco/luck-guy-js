const path = require('path');

module.exports = {
  mode: 'production',
  entry: './dist/lucky-guy.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'super-lucky-guy',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
