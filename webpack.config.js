var path = require("path");
var webpack = require("webpack");
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
	filename: "basic.css"
});

var config = {
	entry: ['webpack-hot-middleware/client',SRC_DIR + "/app/index.js"],
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/dist"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: SRC_DIR,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["react","es2015","stage-2"]
						}	
					}
					
				]
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: [
						"css-loader",
						"sass-loader"

					]
				})
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        query: {
						  publicPath: 'img/',
						  outputPath: 'img/',
						  name: '[name].[ext]',
						}
                    }
                ]
            }

		]
	},
	plugins: [
		extractPlugin,
		new HTMLWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
};

module.exports = config;
