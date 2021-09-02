/**
 * @fileoverview Project source code comb tasks.
 * Beautify `.ts` and `.tsx` files by Prettier.
 * Beautify `.css` and `.scss` files by CSSComb.
 */

'use strict';

const path = require('path');
const gulp = require('gulp');
const CssComb = require('csscomb');
const prettier = require('gulp-prettier');

const { SRC } = require('./dirs');
const PRETTIER_CONFIG = require('../.prettierrc.json');

/** Beautify `.ts` and `.tsx` files by Prettier */
function combTs() {
    const PATTERNS = [
        path.join(SRC, '**', '*.ts'),
        path.join(SRC, '**', '*.tsx'),
    ];
    return gulp.src(PATTERNS)
        .pipe(prettier(PRETTIER_CONFIG))
        .pipe(gulp.dest(SRC));
}

/** Beautify `.css` and `.scss` files by CSSComb */
function combCss() {
    const comb = new CssComb('yandex');
    return comb.processPath(SRC);
}

const comb = gulp.parallel(combCss, combTs);

module.exports = {
    comb,
    combTs,
    combCss,
};
