#!/usr/bin/env node


var program = require('commander');
var chalk = require('chalk');
var contor = require('../src/index.js');


program
.command('generate')
.description('生成文件')
.alias('g')
.action(function() {
    contor.run();
});

program.parse(process.argv);