'use strict';

const glob = require('glob');

/**
 * @param {string} pattern
 * @param {object} [options]
 * @returns {Promise<string[]>}
 */
const globPromise = (pattern, options) =>
    new Promise((resolve, reject) =>
        glob(pattern, options, (err, matches) => {
            if (err) {
                reject(err);
            } else {
                resolve(matches);
            }
        })
    );

module.exports = globPromise;
