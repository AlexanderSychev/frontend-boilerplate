'use strict';

/**
 * @returns {string}
 */
const index = () => `import * as actions from './actions';
import * as selectors from './selectors';
import * as types from './types';

export { actions, selectors, types };
export { default as reducer } from './reducer';
`;

module.exports = index;
