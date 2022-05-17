/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 * Set the version of USWDS you're using (2 or 3)
 */

uswds.settings.version = 2;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.src.uswds = "./node_modules/uswds/dist"
uswds.paths.dist.css = './assets/uswds/css';
uswds.paths.dist.sass = "./assets/uswds/css";
uswds.paths.src.fonts = "./node_modules/uswds/dist/fonts";
uswds.paths.dist.fonts = "./assets/uswds/fonts";


/**
 * Exports
 * Export functions to Gulp to help compile SASS and other assets.
 * Add as many as the project needs.
 */

exports.init = uswds.init;
exports.compile = uswds.compile;
exports.copyAssets = uswds.copyAssets