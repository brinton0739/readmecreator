const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your projects title?',
        },
        {
            type: 'input',
            message: 'What enter a description for your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are your installation instructions?',
            name: 'installationInstructions',
        },
        {
            type: 'input',
            message: 'What are the usage instructions?',
            name: 'usageInstructions',
        },
        {
            type: 'input',
            message: 'Enter any contribution guidelines?',
            name: 'contributionGuidelines',
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'testInstructions',
        },
        {
            type: 'list',
            message: 'Licensing?',
            name: 'license',
            choices: ['gpl', 'mit', 'apache-2.0', 'unlicensed'],
        },
        {
            type: 'input',
            message: 'github user?',
            name: 'githubUser',
        },
        {
            type: 'input',
            message: 'What is the owners email?',
            name: 'email',
        },
    ])
    .then((data) => {
        const filename = `README.md`;

        fs.writeFile(filename, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Success!')
        );
    });
}

// Function call to initialize app
init();
