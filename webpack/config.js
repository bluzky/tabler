// ------------------
// @Table of Contents
// ------------------

/**
 * + @Loading Dependencies
 * + @Entry Point Setup
 * + @Path Resolving
 * + @Exporting Module
 */

// ---------------------
// @Loading Dependencies
// ---------------------

const path = require('path'),
	manifest = require('./manifest'),
	rules = require('./rules'),
	plugins = require('./plugins')

// ------------------
// @Entry Point Setup
// ------------------

var entries = {}
for (var key in manifest.entries) {
	entries[key] = path.join(
		manifest.paths.src,
		manifest.paths.js_source_dir,
		manifest.entries[key]
	)
}

// ---------------
// @Path Resolving
// ---------------

const resolve = {
	extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js'],
	modules: [
		path.join(__dirname, '../node_modules'),
		path.join(manifest.paths.src, '')
	]
}

// -----------------
// @Exporting Module
// -----------------

module.exports = {
	devtool: manifest.IS_PRODUCTION ? false : 'inline-source-map',
	context: path.join(manifest.paths.src, manifest.paths.js_source_dir),
	watch: !manifest.IS_PRODUCTION,
	entry: entries,
	output: {
		path: manifest.paths.build,
		publicPath: manifest.paths.public_path,
		filename: manifest.outputFiles.bundle,
		chunkFilename: 'js/[name].js'
	},
	module: {
		rules
	},
	resolve,
	plugins,
	optimization: {
		minimize: manifest.IS_PRODUCTION,
		splitChunks: {
			chunks: 'async',
			minSize: 10000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					name: 'vendor',
					chunks: 'all',
					minChunks: 2
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	}
}
