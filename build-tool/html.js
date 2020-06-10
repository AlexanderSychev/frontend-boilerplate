'use strict';

const pug = require('pug');
const fs = require('fs');
const path = require('path');

const { SRC, LIB } = require('./dirs');
const metadata = require('./metadata');

/**
 * @param {string} source Source PUG file
 * @param {string} target Target HTML file
 */
const html = async (source, target) => {
    const content = await new Promise((resolve, reject) =>
        fs.readFile(path.isAbsolute(source) ? source : path.join(SRC, source), 'utf-8', (err, data) =>
            err ? reject(err) : resolve(data)
        )
    );

    const template = pug.compile(content);
    const rendered = template(metadata);

    await new Promise((resolve, reject) =>
        fs.writeFile(path.isAbsolute(target) ? target : path.join(LIB, target), rendered, 'utf-8', (err) =>
            err ? reject(err) : resolve()
        )
    );
};

module.exports = html;
