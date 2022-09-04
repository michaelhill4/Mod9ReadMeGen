// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function rendersourceLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {const generateMarkdown = function({gitHub, email, title, description, license, install, testing, usage, refs,}) {
//   let licenseChoice = `${license}`;
//   let sourceLink = '';
//   if (licenseChoice === 'Unlicense') {
//     licenseChoice = 'Unlicense';
//     sourceLink = 'https://choosealicense.com/licenses/unlicense/';
//   };
//   if (licenseChoice === 'Apache') {
//     licenseChoice = 'ApacheLicense2.0';
//     sourceLink = 'https://choosealicense.com/licenses/apache-2.0/';
//   };
//   if (licenseChoice === 'MIT') {
//     licenseChoice = 'MITLicense';
//     sourceLink = 'https://choosealicense.com/licenses/mit/';
//   }
//   };
// }
// return (`
// ## Title
// ${title}
// [GitHub link: ${gitHub}](https://github.com/${gitHub})
// ## Description
// ${description}
// ## Install Instructions
// ${install}
// ## Credits
// ${credits}
// ## Instructions/How to use
// ${instruct}
// ## License:
// Permission to use this application is granted under the ${license} license. ${sourceLink}
// ### Please feel free to contact me at ${email}
// ## Testing info:
// ${testing}
// ## Usage info:
// ${usage}
// ## References
// ${refs}

//   `)


module.exports = generateMarkdown;
