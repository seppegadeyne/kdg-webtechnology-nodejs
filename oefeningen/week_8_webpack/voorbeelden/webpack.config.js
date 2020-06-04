const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: dist
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
          template: './src/html/index.html'
        }),
        new copyWebpackPlugin({
            patterns: [
                { from: './src/img', to: 'img' }
            ]
        })
    ],
    module: {
      rules: [
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          },
          {
              test: /\.(png|jpg|gif)$/i,
              use: [{
                  loader: 'url-loader'
              }]
          }
      ]
    },
    devServer: {
        contentBase: './dist',
        open: true,
        overlay: true
    }
};