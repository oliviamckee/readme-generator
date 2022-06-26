// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  const badgeUrl = String(license).split(" ").join("%20");
  return `
  ![${license} license badge](https://img.shields.io/badge/license-${badgeUrl}-green)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  console.log(license);
  if (license = 'MIT License')
    return `
  [${license}](https://choosealicense.com/licenses/mit/)
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
  This application is covered under the ${renderLicenseLink(license)} license.  
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}

  ## Table of Contents 
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

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests 
  ${data.tests}

  ## Questions
  My Github profile: [${data.github}](https://github.com/${data.github})
  Please email me with any questions, comments, or concerns at ${data.email}.
`;
}

module.exports = generateMarkdown;
