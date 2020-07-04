#!/usr/bin/env node

var inquirer = require('inquirer')
var fs = require('fs')
var path = require('path')
var questions = require('./questions').questions

inquirer
  .prompt(questions)
  .then((answers) => {
    fs.copyFile(
      path.join(__dirname, 'templates', answers.type + '.md'),
      answers.type + '.md',
      (err) => {
        if (err) throw err
        console.log(`Created ${answers.type}.md`)
      }
    )

    fs.copyFile(
      path.join(__dirname, 'themes', answers.theme, answers.type + '-style.less'),
      answers.type + '-style.less',
      (err) => {
        if (err) throw err
        console.log(`Created ${answers.type}-style.less`)
      }
    )

    if (answers.directory) {
      fs.mkdir('images', (err) => {
        if (err != null && err.code !== 'EEXIST') throw err
        console.log('Created images directory')
      })
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log('The environment could not be rendered')
    } else {
      // Something else when wrong
      console.log('Unknown error occurred')
    }
  })
