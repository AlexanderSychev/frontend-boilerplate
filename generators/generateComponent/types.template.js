'use strict';

/**
 * @returns {string}
 */
const behavior = () => `
export interface Behavior {
    state: string;
    setState(state: string): void;
}
`;

/**
 * @param {boolean} withBehavior
 * @returns {string}
 */
const types = (withBehavior) => `export interface Props {
    className?: string;
}
${withBehavior ? behavior() : ''}`;

module.exports = types;
