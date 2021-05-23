// Packages needed for this application
const inquirer = require('inquirer');
const { type } = require('os');
const Employee = require('./lib/Employee');

const initApp = () => {
    inquirer
        .prompt([
            {
                type: "text",
                name: "name",
                message: "What is your name?"
            },
            {
                type: "number",
                name: "id",
                message: "What is your ID?",
                validate: (number) => {
                    if (typeof number === "number") {
                        return number;
                    }
                }
            },
            {
                type: "text",
                name: "email",
                message: "What is your email address?",
            },
        ])
        .then((responses) => console.log(responses));
        console.log(new Employee(response.name, response.id, response.email));
 };

// Function call to initialize app
initApp();