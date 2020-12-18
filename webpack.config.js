const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: [
    './src/index.js',
    './node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js',
    './node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
  ],
  output: {
    filename: 'my-component.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'node_modules')],
              },
            },
          },
        ],
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      filename: 'index.html',
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
  devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : false,
};
