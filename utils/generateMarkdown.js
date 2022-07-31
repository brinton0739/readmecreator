// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  switch (license) {
    case 'gpl':
      return `  [<img src="./assets/GNU.png"  width="50" height="50">](#license)
`;
    case 'mit':
      return `  [<img src="./assets/MIT.png"  width="50" height="50">](#license)
`;
    case 'apache-2.0':
      return `  [<img src="./assets/apache.png"  width="50" height="50">](#license)
`;
    default:
      return '';
  }
};

// If there is no license, return an empty string
const renderLicense = (license) => {
  switch (license) {
    case 'gpl':
      return `
This application is licensed under the GPL license, you can read more about GPL licensing
[here](https://en.wikipedia.org/wiki/GNU_General_Public_License)`;
    case 'mit':
      return `
This application is licensed under the MIT license, you can read more about MIT licensing
[here](https://en.wikipedia.org/wiki/MIT_License)`;
    case 'apache-2.0':
      return `
This application is licensed under the Apache license, you can read more about Apache licensing
[here](https://en.wikipedia.org/wiki/Apache_License)`;
    default:
      return '';
  }
};

const onlyOneLine = (text) => {
  if (text) {
    return `
${text}`
  }

  return '';
}

const generateMarkdown = (data) => {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${onlyOneLine(data.description)}
## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${onlyOneLine(data.installationInstructions)}
## Usage
${onlyOneLine(data.usageInstructions)}
## License
${renderLicense(data.license)}
## Contributing
${onlyOneLine(data.contributionGuidelines)}
## Tests
${onlyOneLine(data.testInstructions)}
## Questions

Link to my github [profile](https://github.com/${data.githubUser})

please [email](mailto:${data.email}) me with any additional questions.
`;


};

module.exports = generateMarkdown;
