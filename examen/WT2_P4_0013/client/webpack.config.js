/* eslint-disable no-mixed-spaces-and-tabs */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const path = require('path')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	plugins: [new HtmlWebpackPlugin({ template: './src/html/index.html' }),
		new MiniCssExtractPlugin({filename:"[name].css"})
	],
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"]
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
				use: ['file-loader']
			}

		]
	},
	devServer: {
		contentBase: dist,
		open: true,
		overlay: true
	}
}
