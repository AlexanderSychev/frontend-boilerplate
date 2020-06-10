'use strict';

const BUILD_TIMESTAMP = Number(process.env.BUILD_TIMESTAMP) || Date.now();
const APP_ENV = process.env.APP_ENV || 'development';
const { version: APP_VERSION, name: APP_NAME, description: APP_DESCRIPTION } = require('../package.json');

module.exports = {
    APP_VERSION,
    APP_NAME,
    APP_DESCRIPTION,
    APP_ENV,
    BUILD_TIMESTAMP,
};
