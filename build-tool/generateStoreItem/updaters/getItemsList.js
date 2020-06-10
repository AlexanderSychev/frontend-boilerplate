'use strict';

const path = require('path');
const {
    promises: { stat },
} = require('fs');

const globPromise = require('../../globPromise');
const { STORE } = require('../../dirs');

/**
 * @returns {Promise<string[]>}
 */
const getItemsList = async () => {
    /** @type {string[]} */
    const dirs = [];

    const allItems = await globPromise(path.join(STORE, '*'));
    const allItemsStats = await Promise.all(allItems.map((item) => stat(item)));

    allItemsStats.forEach((stat, index) => {
        if (stat.isDirectory()) {
            const dir = allItems[index].replace(STORE, '').substr(1);
            if (dir !== 'thunks') {
                dirs.push(dir);
            }
        }
    });

    return dirs;
};

module.exports = getItemsList;
