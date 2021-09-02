'use strict';

/** TypeScript files rules for Webpack */
module.exports = {
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
