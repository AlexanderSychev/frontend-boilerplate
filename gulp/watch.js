'use strict';

const gulp = require('gulp');

const { combCss } = require('./comb');
const { lint } = require('./lint');

/** Watch CSS files change */
function watchCss() {
    const PATTERNS = [
        './src/**/*.css',
        './src/**/*.scss',
        './src/**/*.sass',
    ];
    gulp.watch(PATTERNS, combCss);
    return Promise.resolve();
}

/** Watch TypeScript files change */
function watchTs() {
    const PATTERNS = [
        './src/**/*.ts',
        './src/**/*.tsx',
    ];
    gulp.watch(PATTERNS, lint);
    return Promise.resolve();
}

const watch = gulp.parallel(watchTs, watchCss);

module.exports = {
    watchCss,
    watchTs,
    watch,
};
