'use strict';

const path = require('path');
const { stat, unlink, writeFile } = require('fs/promises');

const globPromise = require('../globPromise');
const fileExists = require('../fileExists');
const { COMPONENTS } = require('../../dirs');

/**
 * @returns {Promise<string>}
 */
const getAutoExports = async () => {
    /** @type {string[]} */
    const dirs = [];

    const allItems = await globPromise(path.join(COMPONENTS, '*'));
    const allItemsStats = await Promise.all(allItems.map((item) => stat(item)));

    const componentsDir =
        process.platform === 'win32'
        ? COMPONENTS.replace(/\\/g, '/')
        : COMPONENTS;

    allItemsStats.forEach((stat, index) => {
        if (stat.isDirectory()) {
            const dir = allItems[index].replace(componentsDir, '').substr(1);
            if (dir !== 'utils') {
                dirs.push(dir);
            }
        }
    });

    return dirs.map((dir) => `export { default as ${dir} } from './${dir}';`).join('\n');
};

/**
 * @param {string} autoExports
 */
const renderIndex = (autoExports) => `/**
 * @file Application components. This file is automatically updating. Please, don't edit it manually.
 */

${autoExports}
export { default as App } from './App';
`;

const indexUpdater = async () => {
    const autoExports = await getAutoExports();
    const indexContent = renderIndex(autoExports);

    const indexFile = path.join(COMPONENTS, 'index.ts');

    if (await fileExists(indexFile)) {
        await unlink(indexFile);
    }

    await writeFile(indexFile, indexContent, 'utf-8');
};

module.exports = indexUpdater;
