'use strict';

const {
    promises: { writeFile },
} = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

const { COMPONENTS } = require('../../dirs');
const indexUpdater = require('./indexUpdater');

const template = {
    component: require('./component.template'),
    index: require('./index.template'),
    styles: require('./styles.template'),
    types: require('./types.template'),
    useBehavior: require('./useBehavior.template'),
};

/**
 * @param {string} componentName
 * @param {{ behavior: boolean }} opts
 */
const generator = async (componentName, { behavior }) => {
    const componentDir = path.join(COMPONENTS, componentName);
    await mkdirp(componentDir);
    await Promise.all([
        writeFile(path.join(componentDir, 'component.tsx'), template.component(componentName), 'utf-8'),
        writeFile(path.join(componentDir, 'index.ts'), template.index(componentName), 'utf-8'),
        writeFile(path.join(componentDir, 'styles.scss'), template.styles(), 'utf-8'),
        writeFile(path.join(componentDir, 'types.ts'), template.types(behavior), 'utf-8'),
        behavior
            ? writeFile(path.join(componentDir, 'useBehavior.ts'), template.useBehavior(), 'utf-8')
            : Promise.resolve(),
    ]);
    await indexUpdater();
};

module.exports = generator;
