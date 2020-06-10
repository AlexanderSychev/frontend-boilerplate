'use strict';

const { Command } = require('commander');

const program = new Command();

// GENERAL
program.version('1.0.0').option('-e, --environment', 'Application environment');

// DEVELOPMENT COMMANDS

// "generate-component" command
const generateComponent = require('./generateComponent');
program
    .command('generate-component <componentName>')
    .option('-b, --behavior', 'With behavior hook')
    .description('Generate React component')
    .action(generateComponent);

// "generate-store-item" command
const generateStoreItem = require('./generateStoreItem');
program.command('generate-store-item <itemName>').description('Generate Redux store item').action(generateStoreItem);

// BUILDING COMMANDS

const csscomb = require('./csscomb');
program.command('csscomb').description('Comb all stylesheet files').action(csscomb);

// "html" command
const html = require('./html');
program.command('html <source> <target>').description('Build HTML file from PUG file').action(html);

// "bundle" command
const bundle = require('./bundle');
program.command('bundle').description('Bundle scripts and styles').action(bundle);

// Run program
program.parse(process.argv);
