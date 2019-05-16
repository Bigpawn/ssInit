var fs = require('fs');
var chalk = require('chalk');
var inquirer = require('inquirer');
var symbols = require('log-symbols');

var re = new RegExp("^[a-zA-Z]+$"); //检查文件名是否是英文，只支持英文

exports.run = function() {
   inquirer.prompt([
       {
           type: 'list',
           name: 'type',
           message: '请选择模板类型',
           choices: [
               'react-page-------react页面',
               'react-component-----react组件'
           ]
       },
       {
           type: 'input',
           name: 'name',
           message: '请输入模板名称'
       }
   ]).then(answers => {
       var name = answers.name;
       var type = answers.type;
       if(!re.test(name)) {
            console.log(symbols.error, chalk.red('错误！请输入英文名称'));
            return;
       }
       if(!fs.existsSync(name)) {
            console.log(symbols.success, chalk.green('开始创建.........请稍等'));
            
       }else {
           console.log(symbols.error, chalk.red('该名称已经被占用了'));
       }
   })
}