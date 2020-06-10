'use strict';
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
        name = resourcePath.replace(baseDir, '').replace('/styles.scss', '').replace('.scss', '');

        if (name.startsWith('/')) {
            name = name.substr(1);
        }

        name = `${baseClassName}--${name
            .split('/')
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
