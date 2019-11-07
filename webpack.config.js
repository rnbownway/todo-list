var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
var path = require('path')

var config = {
	context: path.join(__dirname, 'src'),
	entry: {
		index: './index.tsx'
	},
	output: {
		path: path.join(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: 'index.html',
				to: 'index.html'
			}
		]),
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	}
}

function setMiniCSS(mode) {
	return {
		test: /\.css$/,
		use: [
			{
				loader: MiniCssExtractPlugin.loader,
				options: {
					hmr: mode === 'development',
					reloadAll: true
				}
			},
			{
				loader: 'css-loader',
				options: {
					importLoaders: 1,
					modules: {
						localIdentName: '[local]-[hash:base64:5]'
					}
				}
			}
		]
	}
}

module.exports = (_env, argv) => {
	if (argv.mode === 'development') {
		config.devtool = 'eval-source-map'
	}

	if (argv.mode === 'production') {
		config.devtool = false
	}

	config.module.rules.push(
		setMiniCSS(argv.mode)
	)

	return config
}
