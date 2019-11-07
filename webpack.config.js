var CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');

const config = {
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
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
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
			template: "./index.html"
		})
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ]
    }
}

module.exports = (_env, argv) => {
	if (argv.mode === 'development') {
		config.devtool = 'eval-source-map';
	  }
	
	  if (argv.mode === 'production') {
		config.devtool = false;
	  }
	
	  return config;
}
