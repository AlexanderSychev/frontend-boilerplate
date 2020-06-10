'use strict';

const CssComb = require('csscomb');

const { SRC } = require('./dirs');

module.exports = () => {
    const comb = new CssComb('yandex');
    return comb.processPath(SRC);
};
