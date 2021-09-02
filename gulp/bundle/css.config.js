'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssModulesBEMGenerator = require('./cssModulesBEMGenerator');
const dirs = require('../../dirs');

/**
 * Generate CSS files rules
 * @param {boolean} [devServer] Will config will use Webpack Dev Server?
 * @returns {*}
 */
module.exports = (devServer) => ({
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    devServer
                        ? 'style-loader'
                        : {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                esModule: true,
                            },
                        },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentContext: dirs.SRC,
                                getLocalIdent: (
                                    { resourcePath },
                                    _,
                                    localName,
                                    { context: baseDir },
                                ) => cssModulesBEMGenerator(
                                    resourcePath,
                                    localName,
                                    baseDir,
                                ),
                            },
                        },
                    },
                    'sass-loader',
                    'postcss-loader',
                ],
            },
        ],
    },
});
