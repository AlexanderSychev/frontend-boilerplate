/**
 * @fileoverview Some absolute paths for project.
 * Using by most Gulp tasks and Webpack Bundler.
 */

'use strict';

const path = require('path');

/** Project root directory */
const ROOT = path.resolve(__dirname, '..');

// Source code directories

/** Source code directory */
const SRC = path.join(ROOT, 'src');

/** React components directory */
const COMPONENTS = path.join(SRC, 'components');

/** Redux Store entities directory */
const STORE = path.join(SRC, 'store');

/** Utilities directory */
const UTILS = path.join(SRC, 'utils');

/** Generated code directory */
const LIB = path.join(ROOT, 'lib');

/** Generated JavaScript code directory */
const JS = path.join(LIB, 'js');

/** Generated stylesheets directory */
const CSS = path.join(LIB, 'css');

module.exports = {
    ROOT,
    SRC,
    COMPONENTS,
    STORE,
    UTILS,
    LIB,
    JS,
    CSS,
};
