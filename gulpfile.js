'use strict';

const gulp = require('gulp');

const clean = require('./gulp/clean');
const html = require('./gulp/html');
const build = require('./gulp/build');
const { comb, combCss, combTs } = require('./gulp/comb');
const { eslint, tsc, lint } = require('./gulp/lint');

const defaultTask = gulp.series(clean, comb, lint, build, html);

module.exports = {
    clean,
    html,
    build,
    comb,
    combTs,
    combCss,
    eslint,
    tsc,
    lint,
    default: defaultTask,
};
