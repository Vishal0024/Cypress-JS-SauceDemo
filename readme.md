
![Static Badge](https://img.shields.io/badge/cypress-13.7.3-blue)
![Static Badge](https://img.shields.io/badge/nodeJS-14.21.3-blue)
![Static Badge](https://img.shields.io/badge/VSCode-1.88.1-blue)

# 📋 Prerequisites

Before running the tests, ensure that the following prerequisites are met:

- Install [Node.js](https://nodejs.org/) on your machine
- Install [Visual Studio Code](https://code.visualstudio.com/download) or another Code IDE
- Install [Git](https://git-scm.com/downloads)

## ⚙️ Setup

1. Clone this repository to your local machine

   - Open Terminal and Type: <br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           git clone https://github.com/Vishal0024/Cypress-JS-SauceDemo.git

2. Import Project in VSCode:

   - Open VSCode and import the project 

3. Install Cypress:
   
   - Open VSCode Terminal and Type: <br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           npm install cypress --save-dev
   

## 🎢 Run Tests

1. To run tests from cypress dashboard:

   - Open VSCode Terminal and Type: <br />
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           npx cypress open --config-file "cypress/runner/config.js"  

   - Choose E2E Testing option
   - Select browser you want to use and click "Start E2E Testing"
   - You will see list of all specs, select the test cases you want to run

## 📁 Folder Structure
    .
    ├── e2e                     # list of Automated tests (alternatively `spec` or `tests`)
    ├── fixtures                # fixtures are used for data mock
    ├── runner                  # runner file to trigger test case execution
    ├── support                 # list of all page objects and user defined commands
    ├── node_modules            # list of all node modules 
    ├── package.json            # contains metadata about a project, such as a name, version, and dependencies 
    └── README.md               