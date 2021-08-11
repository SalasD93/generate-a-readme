// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkDown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log("Please input your GitHub username.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please input your email address.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log("Please input the title of your project.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project.",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please provide a brief description of your project.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation command.",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please provide installation instructions.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "usage",
        message: "Provide information about usage.",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please provide information about usage.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "contributions",
        message: "Provide guidelines for contributions.",
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log("Please provide guidelines for contributions.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "test",
        message: "Provide command for testing.",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Please provide instructions for testing.");
                return false;
            }
        },
    },
    {
        type: "confirm",
        name: "confirmLicense",
        message: "Would you like to add any license?",
        default: false,
    },
    {
        type: "list",
        name: "license",
        message: "Please select any license you would like to add.",
        choices: ["Apache", "Apache 2.0", "GNU GPLv3", "MIT", "ISC", "none",],
        when: ({confirmLicense}) => confirmLicense,
    },
];
// TODO: Create a function to write README file
// function writeToFile('README.md', data) {

// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        console.log(generateMarkDown(answers));
    })
}

// Function call to initialize app
init();
