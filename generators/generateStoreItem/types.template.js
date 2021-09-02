'use strict';

const { upperFirst } = require('lodash');

/**
 * @param {string} itemName
 * @returns {string}
 */
const types = (itemName) => `export interface ${upperFirst(itemName)} {
}
`;

module.exports = types;
