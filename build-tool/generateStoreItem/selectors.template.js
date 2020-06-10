'use strict';

const { upperFirst } = require('lodash');

/**
 * @param {string} itemName
 * @returns {string}
 */
const selectors = (itemName) => `import { createSelector } from 'reselect';

import AppState from '../AppState';
import { ${upperFirst(itemName)} } from './types';

export const get${upperFirst(itemName)} = (state: AppState): ${upperFirst(itemName)} => state.${itemName};
`;

module.exports = selectors;
