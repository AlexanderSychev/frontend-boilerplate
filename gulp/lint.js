/**
 * @fileoverview Source code linting tasks for Gulp.
 * Using ESLint and TypeScript Compiler
 */

'use strict';

const path = require('path');
const gulpEslint = require('gulp-eslint');
const gulp = require('gulp');
const typescript = require('gulp-typescript');

const { SRC } = require('../dirs');

/** Lint source code by ESLint */
function eslint() {
    const PATTERNS = [
        path.join(SRC, '**', '*.ts'),
        path.join(SRC, '**', '*.tsx'),
    ];
    return gulp.src(PATTERNS)
        .pipe(gulpEslint())
        .pipe(gulpEslint.formatEach())
        .pipe(gulpEslint.failAfterError());
}

/** Check source code by TypeScript Compiler (without `.js` files emitting) */
function tsc() {
    const PATTERNS = [
        path.join(SRC, '**', '*.ts'),
        path.join(SRC, '**', '*.tsx'),
    ];
    const project = typescript.createProject('tsconfig.json', { noEmit: true });
    return gulp.src(PATTERNS).pipe(project());
}

/** Total code linting - by ESLint and TypeScript Compiler */
const lint = gulp.parallel(eslint, tsc);

module.exports = { eslint, tsc, lint };
