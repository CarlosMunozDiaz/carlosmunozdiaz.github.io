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
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
			          presets: ['@babel/preset-env']
			        }
				}
			},
			{
				test: /\.svelte$/,
				exclude: /node_modules/,
				use: {
				  loader: 'svelte-loader'
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
		extensions: ['*', '.js', '.svelte']
	}
};