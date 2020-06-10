'use strict';

const index = (componentName) => `export { Props as ${componentName}Props } from './types';
export { default } from './component'
`;

module.exports = index;
