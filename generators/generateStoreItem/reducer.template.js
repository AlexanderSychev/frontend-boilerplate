'use strict';

const { upperFirst } = require('lodash');

/**
 * @param {string} itemName
 * @returns {string}
 */
const reducer = (itemName) => `import { reducerWithInitialState } from 'typescript-fsa-reducers';

import * as actions from './actions';
import resetStore from '../resetStore';
import { ${upperFirst(itemName)} } from './types';

export default reducerWithInitialState<${upperFirst(itemName)}>({})
    .cases([resetStore, actions.clear], () => ({}));
`;

module.exports = reducer;
