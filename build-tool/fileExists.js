'use strict';

const {
    constants,
    promises: { access },
} = require('fs');

/**
 * @param {string} filePath
 * @returns {Promise<boolean>}
 */
const fileExists = async (filePath) => {
    let result = true;

    try {
        await access(filePath, constants.F_OK);
    } catch (err) {
        result = false;
    }

    return result;
};

module.exports = fileExists;
