// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseTableOfContents = (data) => {
  const licenseChoosen = data.License;

  if (licenseChoosen === "None") {
    return "";
  } else {
    return "* [License](#license)";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseChoosen = data.License;

  let licenseBadge = "";

  if (licenseChoosen === "MIT") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    return licenseBadge;
  }
  if (licenseChoosen === "Apache") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    return licenseBadge;
  }
  if (licenseChoosen === "BDS 3-Clause") {
    licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    return licenseBadge;
  }
  if (licenseChoosen === "None") {
    return licenseBadge;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const licenseChoosen = data.License;

  if (licenseChoosen === "None") {
    return "";
  } else {
    return `# License
    ${renderLicenseBadge(data)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
https://github.com/${data.Github}/${data.Title}
# Description
# ${data.Description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseTableOfContents(data)}
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)
# Installation
The following dependencies were installed to this project: ${data.Dependencies}
# Usage 
To run this app, ${data.Usage} 
${renderLicenseSection(data)}
# Contributors
${data.Contributors}
# Test
The following is needed to run tests: ${data.Test}
# Questions
If you have any questions about this repository, contact ${
    data.Contributors
  } directly at: ${data.Email}
`;
}

module.exports = generateMarkdown;
