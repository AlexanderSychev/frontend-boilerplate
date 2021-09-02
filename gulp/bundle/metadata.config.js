'use strict';

const webpack = require('webpack');
const { mapKeys, mapValues } = require('lodash');

const metadata = require('../metadata');

/**
 * Application metadata configuration - providing them as inline defines
 */
module.exports = {
    plugins: [
        new webpack.DefinePlugin(
            mapValues(
                mapKeys(metadata, (_, key) => `process.env.${key}`),
                (value) => JSON.stringify(value),
            ),
        ),
    ],
};
