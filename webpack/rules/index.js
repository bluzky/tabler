module.exports = [
	{
		test: /\.(js)$/,
		exclude: /(node_modules|build|dist\/)/,
		use: {
			loader: 'babel-loader'
		}
	},

	{
		test: /\.(png|gif|jpg|svg)$/i,
		use: [
			{
				loader: 'url-loader?limit=20000',
				options: {
					outputPath: 'images'
				}
			}
		]
	},
	require('./css'),
	require('./sass'),
	{
		test: /\.(eot|svg|ttf|woff|woff2)$/,
		//  exclude: /(node_modules)/,
		use: {
			loader: 'file-loader',
			options: {
				outputPath: 'fonts'
			}
		}
	}
]
