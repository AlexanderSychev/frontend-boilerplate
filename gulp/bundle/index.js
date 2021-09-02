'use strict';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const { merge } = require('webpack-merge');

const dirs = require('../../dirs');

/** Create `.js` and `.css` bundles for project */
function bundle() {
    const CONFIG = merge(
        require('./base.config'),
        require('./metadata.config'),
        require('./entry.config'),
        require('./output.config')(false),
        require('./ts.config'),
        require('./css.config')(false),
        require('./svg.config'),
    );

    return new Promise((resolve, reject) =>
        webpack(CONFIG, (error, stats) => {
            if (stats) {
                console.log(stats.toString({ colors: true }));
            }
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        })
    );
}

/** Run Webpack Dev Server with HMR */
async function devServer() {
    const COMPILER_CONFIG = merge(
        require('./base.config'),
        require('./metadata.config'),
        require('./entry.config'),
        require('./output.config')(true),
        require('./ts.config'),
        require('./css.config')(true),
        require('./svg.config'),
    );

    const SERVER_CONFIG = {
        hot: true,
        port: 8000,
        compress: true,
        open: true,
        static: {
            directory: dirs.LIB,
            publicPath: '/'
        },
        client: {
            progress: true,
        },
    };

    const compiler = webpack(COMPILER_CONFIG);
    const server = new WebpackDevServer(SERVER_CONFIG, compiler);
    await server.start();
}

module.exports = {
    bundle,
    devServer,
};
