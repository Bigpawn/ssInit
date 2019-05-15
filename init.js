#!/usr/bin/env node

var argv = process.argv; // 命令行参数
var filePath = __dirname; // 当前文件的路径
var currentPath = process.cwd(); // 当前shell上下文路径，也就是生成器要生成文件的目标位置

argv.shift();
argv.shift();

var data = {
    ComponentName: argv[0],
    attr: {

    }
}

for(var i = 1; i < argv.length; i++) {
    var arr = argv[i].split(':')
    var k = arr[0];
    var v = arr[1];
    data.attr[k] = v;
}


var fs = require('fs');

var nunjucks = require('nunjucks');

var tpl = fs.readFileSync(filePath + '/init.tpl').toString();

var compiledData = nunjucks.renderString(tpl,data);


fs.writeFileSync(currentPath + '/init.tsx', compiledData);