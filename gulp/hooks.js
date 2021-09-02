/**
 * @fileoverview Gulp tasks for Husky Git hooks
 */

'use strict';

const gulp = require('gulp');

const { lint } = require('./lint');
const { comb } = require('./comb');

/** Comb and lint code before commit */
const precommit = gulp.series(comb, lint);

/** Comb and lint code before push */
const prepush = gulp.series(comb, lint);

module.exports = {
    precommit,
    prepush,
};
