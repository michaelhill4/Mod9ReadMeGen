const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'gitHub',
        message: 'github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'email'
    },
    {
        type: 'input',
        name: 'title',
        message: 'title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'description?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'license?',
        choices: ["one", "two"],
    },
    {
        type: 'input',
        name: 'install',
        message: 'install guide?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'testing?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'usage?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'contributors?'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data) 
    fs.writeFile(fileName, data.gitHub,  (err) =>
    err ? console.log(err) : console.log('Successfully created readMe.md!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.table(answers)
        writeToFile('readMe.md', answers)
    })
}

// Function call to initialize app
init();
