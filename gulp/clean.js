'use strict';

const mkdirp = require('mkdirp');
const rimraf = require('rimraf-promise');

const { LIB } = require('./dirs');

/** Cleaning task - removes and recreates last build of project */
async function clean() {
    await rimraf(LIB);
    await mkdirp(LIB);
}

module.exports = clean;
