'use strict';

const path = require('path');
const { kebabCase } = require('lodash');

/**
 * BEM-like class names generator for CSS modules
 * @param {string} resourcePath
 * @param {string} localName
 * @param {string} baseDir
 * @returns {string}
 */
function cssModulesBEMGenerator(resourcePath, localName, baseDir) {
    const baseClassName = 'app';
    let name;

    if (localName === baseClassName) {
        name = localName;
    } else {
        name = resourcePath
            .replace(baseDir, '')
            .replace(`${path.sep}styles.scss`, '')
            .replace(`${path.sep}styles.css`, '')
            .replace('.scss', '')
            .replace('.css', '');

        if (name.startsWith(path.sep)) {
            name = name.substr(1);
        }

        name = `${baseClassName}--${name
            .split(path.sep)
            .map((chunk) => kebabCase(chunk))
            .join('--')}`;

        if (localName !== 'root') {
            name = `${name}__${localName
                .split('_')
                .map((chunk) => kebabCase(chunk))
                .join('_')}`;
        }
    }
    return name;
}

module.exports = cssModulesBEMGenerator;
