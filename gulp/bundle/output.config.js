'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dirs = require('../../dirs');
const metadata = require('../metadata');

/**
 * Generate output file(s) confugiration
 * @param {boolean} [devServer] Will config will use Webpack Dev Server?
 * @returns {*}
 */
module.exports = (devServer) => {
    const result = {
        output: {
            path: dirs.JS,
            filename: `${metadata.APP_NAME}.js`,
        },
    };

    if (devServer) {
        result.output.publicPath = '/js/';
    } else {
        result.plugins = [
            new MiniCssExtractPlugin({
                filename: path.join(
                    path.relative(dirs.JS, dirs.CSS),
                    `${metadata.APP_NAME}.css`,
                ),
            }),
        ];
    }

    return result;
};
