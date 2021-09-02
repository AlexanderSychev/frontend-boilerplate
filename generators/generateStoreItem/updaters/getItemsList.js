'use strict';

const path = require('path');
const { stat } = require('fs/promises');

const globPromise = require('../../globPromise');
const { STORE } = require('../../../dirs');

/**
 * @returns {Promise<string[]>}
 */
const getItemsList = async () => {
    /** @type {string[]} */
    const dirs = [];

    const allItems = await globPromise(path.join(STORE, '*'));
    const allItemsStats = await Promise.all(allItems.map((item) => stat(item)));

    const storeDir =
        process.platform === 'win32'
        ? STORE.replace(/\\/g, '/')
        : STORE;

    allItemsStats.forEach((stat, index) => {
        if (stat.isDirectory()) {
            const dir = allItems[index].replace(storeDir, '').substr(1);
            if (dir !== 'thunks') {
                dirs.push(dir);
            }
        }
    });

    return dirs;
};

module.exports = getItemsList;
