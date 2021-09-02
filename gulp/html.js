/**
 * @fileoverview Test `.html` page generation task. Uses Pug template language.
 */

'use strict';

const path = require('path');
const pug = require('pug');
const fs = require('fs/promises');

const metadata = require('./metadata');
const { SRC, LIB } = require('./dirs');

const SRC_FILE = path.join(SRC, 'index.pug');
const DST_FILE = path.join(LIB, 'index.html');

async function html() {
    const content = await fs.readFile(SRC_FILE, 'utf-8');
    const template = pug.compile(content);
    const compiled = template(metadata);
    await fs.writeFile(DST_FILE, compiled, 'utf-8');
}

module.exports = html;
