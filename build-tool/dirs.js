'use strict';

const path = require('path');

const ROOT = path.resolve(__dirname, '../');

// Compiled code directories

const LIB = path.join(ROOT, 'lib');

const JS = path.join(LIB, 'js');

const CSS = path.join(LIB, 'css');

// Source code directories

const SRC = path.join(ROOT, 'src');

const COMPONENTS = path.join(SRC, 'components');

const STORE = path.join(SRC, 'store');

const UTILS = path.join(SRC, 'utils');

module.exports = {
    ROOT,
    LIB,
    SRC,
    COMPONENTS,
    STORE,
    UTILS,
    JS,
    CSS,
};
