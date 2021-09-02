'use strict';

const gulp = require('gulp');

const clean = require('./gulp/clean');
const html = require('./gulp/html');
const { bundle, devServer } = require('./gulp/bundle');
const { comb, combCss, combTs } = require('./gulp/comb');
const { eslint, tsc, lint } = require('./gulp/lint');
const { watchCss, watchTs, watch } = require('./gulp/watch');

/** Simple build */
const build = gulp.parallel(html, bundle);

const defaultTask = gulp.series(clean, comb, lint, html, devServer, watch);

module.exports = {
    clean,
    html,
    bundle,
    devServer,
    build,
    comb,
    combTs,
    combCss,
    eslint,
    tsc,
    lint,
    watchCss,
    watchTs,
    watch,
    default: defaultTask,
};
