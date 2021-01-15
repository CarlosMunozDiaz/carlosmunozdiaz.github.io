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
				test: /\.m?(j|t)sx?$/,
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
		alias: {
		svelte: path.resolve('node_modules', 'svelte'),
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main'],
	}
};