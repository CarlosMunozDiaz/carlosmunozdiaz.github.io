const path = require("path");

module.exports = {
	entry: "./development/root.js",
	module: {
	    rules: [
		    {
				test: /\.html$/i,
				use: ['html-loader']
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
			          presets: ['@babel/preset-env', '@babel/preset-react']
			        }
				}
			},
			// {
			// 	test: /\.(js|jsx)$/,
			// 	exclude: /node_modules/,
			// 	use: {
			// 		loader: "eslint-loader"
			// 	}
			// }
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	}
};