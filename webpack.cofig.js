const path = require('path');
const miniCss = require('mini-css-extract-plugin');
 
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '/assets/js/'),
		filename: 'scripts.js'
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [ 
					miniCss.loader,
					{
						loader : 'css-loader',
						options: { url : false }
					},
					'sass-loader'
				],
			},
		],
	},
	plugins: [
		new miniCss({
			filename: '/assets/css/main.css',
		}),
	]
};