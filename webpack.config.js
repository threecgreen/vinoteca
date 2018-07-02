const path = require('path');

module.exports = {
  // Create multiple dependency graphs
  entry: {
      basic: './vinoteca/static/ts/basic.ts',
      new_wine: './vinoteca/static/ts/new_wine.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'vinoteca/static/js/')
  }
};