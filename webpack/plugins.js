const manifest = require('./manifest'),
	CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'),
	CopyWebpackPlugin = require('copy-webpack-plugin'),
	path = require('path'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	ImageminPlugin = require('imagemin-webpack-plugin').default,
	webpack = require('webpack')

const plugins = []

plugins.push(
	new CaseSensitivePathsPlugin(),
	new CopyWebpackPlugin([
		{
			from: path.join(manifest.paths.src, manifest.paths.source_font_dir),
			to: path.join(manifest.paths.build, 'fonts')
		},
		{
			from: path.join(
				manifest.paths.src,
				manifest.paths.source_image_dir
			),
			to: path.join(manifest.paths.build, 'images')
		}
	]),
	new MiniCssExtractPlugin({
		filename: 'css/[name].css',
		chunkFilename: 'css/[id].css'
	}),
	new ImageminPlugin({
		disable: manifest.IS_DEVELOPMENT
	}),
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(manifest.NODE_ENV)
		}
	}),

	new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		'window.jQuery': 'jquery',
		Popper: ['popper.js', 'default']
	})
)

if (manifest.IS_DEVELOPMENT) {
	plugins.push(
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	)
}

module.exports = plugins
