const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PUBLIC = path.resolve(__dirname, 'public');

module.exports = {
	entry: './src/index.jsx',
	output: {
		filename: 'main.js',
		path: PUBLIC,
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
	},
	module: {
		rules: [
			{
				exclude: /node_modules/,
				use: [{loader: 'babel-loader'}],
			},
		],
	},
	devServer: {
		contentBase: PUBLIC,
		port: 9000,
	},
	plugins: [new HtmlWebpackPlugin()],
};
