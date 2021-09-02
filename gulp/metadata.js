/**
 * @fileoverview Project metadata object.
 * Using by some Gulp tasks and Webpack Bundler.
 */

'use strict';

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const {
    version: APP_VERSION,
    name: APP_NAME,
    description: APP_DESCRIPTION,
} = require('../package.json');

// Parse arguments
const argv = yargs(hideBin(process.argv)).argv;

/**
 * @typedef {Object} MetadataObject Metadata object signature
 * @property {string} APP_VERSION Application version (from `package.json`);
 * @property {string} APP_NAME Application name (from `package.json`);
 * @property {string} APP_DESCRIPTION Application description (from `package.json`)
 * @property {'development' | 'production'} APP_ENV Application build environment (from `--env` flag)
 * @property {number} BUILD_TIMESTAMP Build date and time (build running timestamp)
 */

/**
 * Project metadata:
 *   - Application version (from `package.json`);
 *   - Application name (from `package.json`);
 *   - Application description (from `package.json`);
 *   - Application build environment (from `--env` flag);
 *   - Build date and time (build running timestamp);
 * @type {MetadataObject}
 */
const METADATA = {
    APP_VERSION,
    APP_NAME,
    APP_DESCRIPTION,
    APP_ENV: argv.env || 'production',
    BUILD_TIMESTAMP: Date.now(),
};

/** Metadata values object */
module.exports = METADATA;
