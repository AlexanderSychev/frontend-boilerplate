'use strict';

const { snakeCase, upperCase } = require('lodash');

/**
 * @param {string} itemName
 * @returns {string}
 */
const actions = (itemName) => `import { actionCreatorFactory } from 'typescript-fsa';

const action = actionCreatorFactory('${upperCase(snakeCase(itemName))}');

export const clear = action('CLEAR');
`;

module.exports = actions;
