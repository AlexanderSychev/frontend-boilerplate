'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const dirs = require('./dirs');
const metadata = require('./metadata');
const cssModulesBEMGenerator = require('./cssModulesBEMGenerator');

const bundle = () =>
    new Promise((resolve, reject) =>
        webpack(
            {
                mode: metadata.APP_ENV,
                target: 'web',
                entry: path.join(dirs.SRC, 'index.tsx'),
                optimization: {
                    usedExports: true,
                    minimizer: [new TerserWebpackPlugin({}), new OptimizeCSSAssetsPlugin({})],
                },
                output: {
                    path: dirs.JS,
                    filename: `${metadata.APP_NAME}.js`,
                },
                context: dirs.ROOT,
                node: {
                    __filename: true,
                },
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
                                    ['@babel/plugin-proposal-decorators', { legacy: true }],
                                    ['@babel/plugin-proposal-class-properties', { loose: true }],
                                ],
                            },
                        },
                        {
                            test: /\.s[ac]ss$/i,
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
                                            context: dirs.SRC,
                                            getLocalIdent: ({ resourcePath }, _, localName, { context: baseDir }) =>
                                                cssModulesBEMGenerator(resourcePath, localName, baseDir),
                                        },
                                    },
                                },
                                'sass-loader',
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                        plugins: [autoprefixer()],
                                    },
                                },
                            ],
                        },
                        {
                            test: /\.svg$/,
                            loader: 'url-loader',
                        },
                    ],
                },
                plugins: [
                    new webpack.DefinePlugin({
                        'process.env.APP_ENV': JSON.stringify(metadata.APP_ENV),
                        'process.env.APP_NAME': JSON.stringify(metadata.APP_NAME),
                        'process.env.APP_VERSION': JSON.stringify(metadata.APP_VERSION),
                        'process.env.APP_DESCRIPTION': JSON.stringify(metadata.APP_DESCRIPTION),
                        'process.env.BUILD_TIMESTAMP': JSON.stringify(metadata.BUILD_TIMESTAMP),
                    }),
                    new MiniCssExtractPlugin({
                        filename: path.join(path.relative(dirs.JS, dirs.CSS), `${metadata.APP_NAME}.css`),
                    }),
                ],
                resolve: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
                    alias: {
                        '@components': dirs.COMPONENTS,
                        '@store': dirs.STORE,
                    },
                },
                // externals: {
                //     axios: 'axios',
                //     classnames: 'classNames',
                //     react: 'React',
                //     'react-dom': 'ReactDOM',
                //     redux: 'Redux',
                //     'react-redux': 'ReactRedux',
                //     'redux-thunk': 'ReduxThunk',
                // },
            },
            (error, stats) => {
                if (error) {
                    reject(error);
                } else {
                    console.log(stats.toString({ colors: true }));
                    resolve();
                }
            }
        )
    );

module.exports = bundle;
