'use strict';

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { merge } = require('webpack-merge');

const dirs = require('./dirs');
const metadata = require('./metadata');
const cssModulesBEMGenerator = require('./cssModulesBEMGenerator');

/** Base configuration */
const BASE_CONFIG = {
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
    plugins: [
        new webpack.DefinePlugin({
            'process.env.APP_ENV': JSON.stringify(metadata.APP_ENV),
            'process.env.APP_NAME': JSON.stringify(metadata.APP_NAME),
            'process.env.APP_VERSION': JSON.stringify(metadata.APP_VERSION),
            'process.env.APP_DESCRIPTION': JSON.stringify(metadata.APP_DESCRIPTION),
            'process.env.BUILD_TIMESTAMP': JSON.stringify(metadata.BUILD_TIMESTAMP),
        }),
    ],
};

/** Entry point configuration */
const ENTRY_POINT = {
    entry: path.join(dirs.SRC, 'index.tsx'),
};

/** Bundler output configuration */
const OUTPUT = {
    output: {
        path: dirs.JS,
        filename: `${metadata.APP_NAME}.js`,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: path.join(path.relative(dirs.JS, dirs.CSS), `${metadata.APP_NAME}.css`),
        }),
    ],
};

/** TypeScript files rules for Webpack */
const TS_RULES = {
    module: {
        rules: [
            {
                test: /\.[tj]sx?/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    babelrc: false,
                    presets: [
                        [
                            '@babel/env',
                            {
                                modules: false,
                                targets: {
                                    browsers: ['last 1 version'],
                                    safari: '9',
                                    ie: '11',
                                    ios: '9',
                                    android: '4',
                                },
                            },
                        ],
                        '@babel/react',
                        '@babel/typescript',
                    ],
                    plugins: [
                        [
                            '@babel/plugin-proposal-decorators',
                            { legacy: true },
                        ],
                        [
                            '@babel/plugin-proposal-class-properties',
                            { loose: true },
                        ],
                    ],
                },
            },
        ],
    },
};

/** CSS files rules */
const CSS_RULES = {
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    {
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
};

/** SVG files rules */
const SVG_RULES = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'url-loader',
            },
        ],
    },
};

/**
 * Wrapper function which runs Webpack with configuration
 * made by merge of configuration chunks
 */
function bundle(...chunks) {
    return new Promise((resolve, reject) =>
        webpack(merge(...chunks), (error, stats) => {
            if (error) {
                reject(error);
            } else {
                console.log(stats.toString({ colors: true }));
                resolve();
            }
        })
    );
}

/** Create `.js` and `.css` bundles for project */
function build() {
    return bundle(
        BASE_CONFIG,
        ENTRY_POINT,
        OUTPUT,
        TS_RULES,
        CSS_RULES,
        SVG_RULES,
    );
}

module.exports = build;
