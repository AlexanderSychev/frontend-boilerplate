'use strict';

const { Command } = require('commander');

const program = new Command();

program.version('1.0.0').description('Project entities generators');

// "generate-component" command
const generateComponent = require('./generateComponent');
program
    .command('generate-component <componentName>')
    .option('-b, --behavior', 'With behavior hook')
    .description('Generate React component')
    .action(generateComponent);

// "generate-store-item" command
const generateStoreItem = require('./generateStoreItem');
program
    .command('generate-store-item <itemName>')
    .description('Generate Redux store item')
    .action(generateStoreItem);

// Run program
program.parse(process.argv);
