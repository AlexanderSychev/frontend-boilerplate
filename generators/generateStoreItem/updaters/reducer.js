'use strict';

const path = require('path');
const {
    promises: { unlink, writeFile },
} = require('fs');

const fileExists = require('../../fileExists');
const getItemsList = require('./getItemsList');
const { STORE } = require('../../../dirs');

/**
 * @param {string[]} items
 * @returns {{
 *   imports: string,
 *   fields: string,
 * }}
 */
const getCode = (items) => {
    /** @type {string[]} */
    const imports = [];
    /** @type {string[]} */
    const fields = [];

    items.forEach((item) => {
        imports.push(`import { reducer as ${item} } from './${item}';`);
        fields.push(`    ${item},`);
    });

    return {
        imports: imports.join('\n'),
        fields: fields.join('\n'),
    };
};

/**
 * @param {string} imports
 * @param {string} fields
 * @returns {string}
 */
const renderReducer = (imports, fields) => `/**
 * @file Application state reducer. This file is automatically updating. Please, don't edit it manually.
 */

import { combineReducers } from 'redux';

import AppState from './AppState';
${imports}

export default combineReducers<AppState>({
${fields}
});
`;

const reducer = async () => {
    const items = await getItemsList();
    const { imports, fields } = getCode(items);
    const reducerContent = renderReducer(imports, fields);

    const reducerFile = path.join(STORE, 'reducer.ts');

    if (await fileExists(reducerFile)) {
        await unlink(reducerFile);
    }

    await writeFile(reducerFile, reducerContent, 'utf-8');
};

module.exports = reducer;
