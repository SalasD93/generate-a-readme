// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// var licensePicked = '';
// const 
function renderLicenseBadge(license) {
    if (license === 'none') {
        return '';
    } 
    if (license === 'Apache') {
        return `![GitHub license](https://img.shields.io/badge/license-Apache-blue.svg)`;
    } else if (license === 'Apache 2.0') {
        return `![GitHub license](https://img.shields.io/badge/license-Apache-2.0-blue.svg)`;
    }  else if (license === 'GNU GPLv3') {
        return `![GitHub license](https://img.shields.io/badge/license-GNU-GPLv3-red.svg)`;
    }  else if (license === 'MIT') {
        return `![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)`;
    }  else if (license === 'ISC') {
        return `![GitHub license](https://img.shields.io/badge/license-ISC-yellow.svg)`;
    }
    console.log(license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'none') {
        return '';
    }

    return `* [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'none') {
        return '';
    }

    return `## License

    This project is licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
    # ${data.title}
    ${renderLicenseBadge(data.license)}
    
    ## Description
    
    ${data.description}
    
    ## Table of Contents

    * [Installation](#installation)

    * [Usage](#usage)

    ${renderLicenseLink(data.license)}

    * [Contributing](#contributing)

    * [Tests](#tests)

    * [Questions](#questions)


    ## Installation

    To install necessary dependencies, run the following command:

    ${data.installation}

    ## Usage

    ${data.usage}

    ${renderLicenseSection(data.license)}
    
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