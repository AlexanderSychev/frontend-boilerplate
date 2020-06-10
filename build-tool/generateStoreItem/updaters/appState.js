'use strict';

const path = require('path');
const {
    promises: { unlink, writeFile },
} = require('fs');
const { upperFirst } = require('lodash');

const getItemsList = require('./getItemsList');
const fileExists = require('../../fileExists');
const { STORE } = require('../../dirs');

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
        imports.push(`import { types as ${item}Types } from './${item}';`);
        fields.push(`    ${item}: ${item}Types.${upperFirst(item)};`);
    });

    return {
        imports: imports.join('\n'),
        fields: fields.join('\n'),
    };
};

/**
 * @param {string} imports
 * @param {string} fields
 */
const renderAppState = (imports, fields) => `/**
 * @file Application state signature. This file is automatically updating. Please, don't edit it manually.
 */

${imports}

export default interface AppState {
${fields}
}
`;

const appState = async () => {
    const items = await getItemsList();
    const { imports, fields } = getCode(items);
    const appStateContent = renderAppState(imports, fields);

    const appStateFile = path.join(STORE, 'AppState.ts');

    if (await fileExists(appStateFile)) {
        unlink(appStateFile);
    }

    await writeFile(appStateFile, appStateContent, 'utf-8');
};

module.exports = appState;
