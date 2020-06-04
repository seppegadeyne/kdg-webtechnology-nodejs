const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    module: {
        rules: [
            { test: /\.css$/,
			use: ["style-loader", "css-loader"]
		   //loader: "style-loader!css-loader"

			},
		  { test: /\.png$/, loader: "url-loader" }

		]
    },
    plugins: [ new htmlWebpackPlugin({template:"./src/html/ruzzle.html"})  ]
};
