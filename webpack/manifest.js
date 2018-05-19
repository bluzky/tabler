// ------------------
// @Table of Contents
// ------------------

/**
 * + @Loading Dependencies
 * + @Environment Holders
 * + @Utils
 * + @App Paths
 * + @Output Files Names
 * + @Entries Files Names
 * + @Exporting Module
 */

// ---------------------
// @Loading Dependencies
// ---------------------

const path = require('path')

// --------------------
// @Environment Holders
// --------------------

const NODE_ENV = process.env.NODE_ENV || 'development',
	IS_DEVELOPMENT = NODE_ENV === 'development',
	IS_PRODUCTION = NODE_ENV === 'production'

// ------
// @Utils
// ------

const dir = src => path.join(__dirname, src)

// ----------
// @App Paths
// ----------

const paths = {
	src: dir('../src/assets'),
	build: dir('../build/assets'),
	public_path: '/assets/',
	js_source_dir: 'js',
	style_source_dir: 'scss',
	static_source_dir: '',
	source_font_dir: 'fonts',
	source_image_dir: 'images'
}

// -------------------
// @Output Files Names
// -------------------

const outputFiles = {
	bundle: 'js/[name].js'
}

// --------------------
// @Entries Files Names
// --------------------

const entries = {
	core: 'core.js',
	dashboard: 'dashboard.js'
}

// -----------------
// @Exporting Module
// -----------------

module.exports = {
	paths,
	outputFiles,
	entries,
	NODE_ENV,
	IS_DEVELOPMENT,
	IS_PRODUCTION
}
