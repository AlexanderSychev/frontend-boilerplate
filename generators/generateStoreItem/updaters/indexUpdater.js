'use strict';

const path = require('path');
const {
    promises: { unlink, writeFile },
} = require('fs');

const getItemsList = require('./getItemsList');
const fileExists = require('../../fileExists');
const { STORE } = require('../../../dirs');

/**
 * @param {string[]} items
 * @returns {{
 *   imports: string,
 *   exports: string,
 * }}
 */
const getCode = (items) => {
    const imports = items.map((item) => `import * as ${item} from './${item}';`).join('\n');
    const exports = items.map((item) => `    ${item},`).join('\n');
    return { imports, exports };
};

/**
 * @param {imports} string
 * @param {exports} string
 */
const renderIndex = (imports, exports) => `/**
* @file Application store main file. This file is automatically updating. Please, don't edit it manually.
*/

import createStore from './createStore';
${imports}

export {
${exports}
};
export const store = createStore();
`;

const indexUpdater = async () => {
    const items = await getItemsList();
    const { imports, exports } = getCode(items);
    const indexContent = renderIndex(imports, exports);

    const indexFile = path.join(STORE, 'index.ts');

    if (await fileExists(indexFile)) {
        unlink(indexFile);
    }

    await writeFile(indexFile, indexContent, 'utf-8');
};

module.exports = indexUpdater;
