const { makeBadge, ValidationError } = require('badge-maker')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  try {
    console.log('License:', license);
    if (license === 'MIT') {
      return '![Static Badge](https://img.shields.io/badge/MIT-license?style=flat-square&label=License&labelColor=%23cdcdcd&color=salmon)';
      } else {
        // if no license is provided an empty string will be returned  
        return '';
      } 
  } catch (error) {
      console.error('Error generating badge', error);
      return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license) {
//     return '[License](#license)';
//   } else {
//     return '';
//   }
// }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const  licenseBadge = renderLicenseBadge(data.license);
  console.log('License Badge:', licenseBadge); // Log the badge string for debugging

  return `# ${data.title}
 
${licenseBadge}  

## Description

${data.description}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.
## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions or feedback regarding this project, please contact me at ${data.questions}, through my github, or my email, ${data.email}.

`;
}

module.exports = {generateMarkdown, renderLicenseBadge};