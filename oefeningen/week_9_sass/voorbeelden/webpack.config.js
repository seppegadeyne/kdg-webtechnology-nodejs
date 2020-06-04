const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const dist = path.resolve(__dirname, 'dist');

module.exports = {
    mode: "production",
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
        new miniCssExtractPlugin({
            filename: '[name].css'
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
              test: /\.s?css$/,
              use: [
                  miniCssExtractPlugin.loader,
                  'css-loader',
                  {
                      loader: 'sass-loader',
                      options: {
                          implementation: require('sass')
                      }
                  }
              ]
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