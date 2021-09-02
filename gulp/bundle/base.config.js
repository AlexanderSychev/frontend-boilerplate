'use strict';

const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const dirs = require('../../dirs');
const metadata = require('../metadata');

module.exports = {
    mode: metadata.APP_ENV,
    target: 'web',
    optimization: {
        usedExports: true,
        minimizer: [
            new TerserWebpackPlugin({}),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    context: dirs.ROOT,
    node: {
        __filename: true,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        alias: {
            '@components': dirs.COMPONENTS,
            '@store': dirs.STORE,
        },
    },
}
