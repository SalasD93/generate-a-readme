// packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const generateMarkDown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        // forces user to answer question
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
                console.log("Please provide installation command.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "usage",
        message: "Provide command for usage.",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please provide command for usage.");
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
                console.log("Please provide command for testing.");
                return false;
            }
        },
    },
    {
        type: "confirm",
        name: "confirmLicense",
        message: "Would you like to add a license?",
        default: false
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license you would like to add.",
        choices: ["Apache", "Apache 2.0", "GNU GPLv3", "MIT", "ISC", "none",],
        // will only display this question if true
        when: ({confirmLicense}) => confirmLicense
    },
];
// function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            // confirms readme was created
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

// function to initialize app and functions
const init = () => {
    inquirer.prompt(questions)
    .then(answers => {
        return generateMarkDown(answers);
    })
    .then(readme => {
        return writeToFile(readme);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
}

// function call to initialize app
init();
