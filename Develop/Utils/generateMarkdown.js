

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// function renderLicenseBadge(license) {
//   const licensebadge = 
//   if (license == badge ){
//     return 'License'
//   } else{
//     return ''
//   }
// };
// console.log(licenseBadge);

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ## Description

  ${description}

  ## Table of Contents

  ${tableofcontents}


    - [Description](#description)
    - [Table of Contents](#table of contents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation

    ${installation}

    ## Usage

    ${usage}

    ## License

    This project is licensed under ${license}
    ![Static Badge](https://img.shields.io/badge/text-text-color?style=for-the-badge)


    ## Contrubuting

    ${contributing}

    ## Tests

    ${tests}

    ## Questions

    For questions or feedback regarding this project, please contact me at ${questions}, through my github, or my email, ${email}.

`;
}

module.exports = generateMarkdown;
