// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// var licensePicked = '';
// const 
// function renderLicenseBadge(license) {
//     if (data.license === 'none') {
//         return '';
//     } 
//     if (data.license === 'Apache') {
//         return 'https://img.shields.io/badge/license-Apache-blue.svg';
//     } else if (data.license === 'Apache 2.0') {
//         return 'https://img.shields.io/badge/license-Apache-2.0-blue.svg';
//     }  else if (data.license === 'GNU GPLv3') {
//         return 'https://img.shields.io/badge/license-GNU-GPLv3-red.svg';
//     }  else if (data.license === 'MIT') {
//         return 'https://img.shields.io/badge/license-MIT-green.svg';
//     }  else if (data.license === 'ISC') {
//         return 'https://img.shields.io/badge/license-ISC-yellow.svg';
//     }
//     console.log(license);
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
        return '';
    }

    return `
        * [License](#license)
    `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return '';
    }

    return `
        ## License

        This project is licensed under the ${data.license} license.
    `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    
return `
    # ${data.title}

    ![GitHub license](${data.license})
    
    ## Description
    
    ${data.description}
    
    ## Table of Contents

    * [Installation](#installation)

    * [Usage](#usage)

    * [Contributing](#contributing)

    * [Tests](#tests)

    * [Questions](#questions)


    ## Installation

    To install necessary dependencies, run the following command:

    ${data.installation}

    ## Usage

    ${data.usage}
    
    ## Contributing

    ${data.contributions}

    ## Tests

    To run tests, run the following command:

    ${data.test}
    
    ## Questions

    If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [Users'GithubName](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;