// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "what is the title of your repository/project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Give a detailed description on your read me.",
  },
  {
    type: "input",
    name: "Dependencies",
    message: "What Dependencies did you install for this project?",
  },
  {
    type: "input",
    name: "Usage",
    message: "What are the steps to get the app working?",
  },
  {
    type: "list",
    name: "License",
    message: "Which License is needed?",
    choices: ["MIT", "Apachie", "BDS 3-clause", "None"],
  },
  {
    type: "input",
    name: "Contributors",
    message: "Who Contributed to this project?",
  },
  {
    type: "input",
    name: "Test",
    message: "How did you test your app?",
  },
  {
    type: "input",
    name: "Github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("README.md has been created successfully");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
