const inquirer = require('inquirer')
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your eMail'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your app?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your application.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Did you use one of the following licenses?',
        choices: ["Apache", "Mit", "Unlicense"],
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide an installation guide:'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How did testing go?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended use of the website?'
    },
    {
        type: 'input',
        name: 'refs',
        message: 'Please provide credit from any collaborators on this app:'
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName, data) 
    fs.writeFile(fileName,` # Github: ${data.gitHub} \n# Email: ${data.email} \n # Project Title ${data.title} \n # Description ${data.description} \n# License ${data.license} \n# Installation instructions:${data.install} \n# Testing: ${data.testing} \n# Usage: ${data.usage} \n# References: ${data.refs} \n`, (err) =>
    // pass a string thru the data array?
    err ? console.log(err) : console.log('Successfully created readMe.md!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) 
    .then(answers => {
        // console.table(data.gitHub)
        writeToFile("readme.md", answers)
    })
}

// Function call to initialize app
init();