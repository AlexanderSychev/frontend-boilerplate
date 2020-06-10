'use strict';

const appState = require('./appState');
const reducer = require('./reducer');
const indexUpdater = require('./indexUpdater');

module.exports = {
    appState,
    reducer,
    index: indexUpdater,
};
