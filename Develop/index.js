// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./Utils/generateMarkdown')
const fs = require('fs');
// TODO: Create an array of questions for user input

inquirer
    .prompt([
    {
        // Title for project
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
    },
    {
        // Description for project
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project:',
    },
    {
        // Table of Contents
        type: 'input',
        name: 'table of contents',
        message: 'Enter the table of contents for your project:',
    },
    {
        // Installation directions
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for your project:',
    },
    {
        // Uses for project
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information for your project:',
    },
    {
        // Contributers
        type: 'input',
        name: 'contributing',
        message: 'Enter the contribution guidlines for your project:',
    },
    {
        // How to test the application
        type: 'input',
        name: 'tests',
        message: 'Enter the test instructions for your project:',
    },
    {
        // Applying a license
        type: 'checkbox',
        name: 'license',
        message: 'What license do you want your README to have?',
        choices: ['MIT', 'MIT'],
    },
    {
        // Questions about the project
        type: 'input',
        name: 'questions',
        message: 'Enter your github username.',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('You must enter a valid username.');
            }
            return true;
        }  
    },
    {
        // Questions about the project
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('You must enter a valid email.');
            }
            return true;
        }  
    },
    ])

// TODO: Create a function to write README file
// .then((data) => {
//     const filename = `${data.name.toLowerCase().split(' ').join(' ')}.json`;

//     fs.writeFile(filename, JSON.stringify(data, null, 4), (err) =>
//         err ? console.log(err) : console.log('It Worked!')
//     );
// });
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
