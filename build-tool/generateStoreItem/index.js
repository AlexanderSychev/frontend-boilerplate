'use strict';

const {
    promises: { writeFile },
} = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

const updaters = require('./updaters');
const { STORE } = require('../dirs');

const template = {
    actions: require('./actions.template'),
    index: require('./index.template'),
    reducer: require('./reducer.template'),
    selectors: require('./selectors.template'),
    types: require('./types.template'),
};

/**
 * @param {string} itemName
 */
const generator = async (itemName) => {
    const storeItemDir = path.join(STORE, itemName);
    await mkdirp(storeItemDir);
    await Promise.all([
        writeFile(path.join(storeItemDir, 'actions.ts'), template.actions(itemName), 'utf-8'),
        writeFile(path.join(storeItemDir, 'index.ts'), template.index(), 'utf-8'),
        writeFile(path.join(storeItemDir, 'reducer.ts'), template.reducer(itemName), 'utf-8'),
        writeFile(path.join(storeItemDir, 'selectors.ts'), template.selectors(itemName), 'utf-8'),
        writeFile(path.join(storeItemDir, 'types.ts'), template.types(itemName), 'utf-8'),
    ]);

    await Promise.all([updaters.appState(), updaters.reducer(), updaters.index()]);
};

module.exports = generator;
