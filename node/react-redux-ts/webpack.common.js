const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    './src/index.tsx'
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  output: {
    path: path.resolve('dist/'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React App',
      template: 'assets/index.html',
    }),
  ]
};