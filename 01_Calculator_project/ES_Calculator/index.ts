#!/usr/bin/env node
// shebang

import sumoftwo from "./sum.js";
import subtractoftwo from "./subtract.js";
import divisionoftwo from "./division.js";
import multiplyoftwo from "./multiply.js";
import modulusoftwo from "./modulus.js";
import exponentoftwo from "./exponent.js";
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import banner from "node-banner";



async function banner_text() {
    await new Promise ((res) => {
        setTimeout(res,1000)
        banner(" Hamza  Calculator ");
    })
}
await banner_text();

const sleep = () => {
    return  new Promise((res)=> {
       setTimeout(res,2000);
       
   });     
};
 
async function welcome_text() {
    let rainbow_text = chalkAnimation.rainbow("\t Let's start Calculation ");
    await sleep();
    rainbow_text.stop();
    console.log(chalk.gray(`
     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________| 
    
    `));
};
await welcome_text();

async function userInput() {
    let answers = await inquirer.prompt([
        {
            name: "Operator",
            type: "list",
            message: chalk.bold.rgb(6,3,3)("Which operation do you want to perform?"),
            choices: ["Addition","Subtraction","Multiplication","Division","Exponent","Modulus"]
        },
        {
            name:"input_1",
            type: "number",
            message: chalk.yellow("Enter 1st number for the operation: "),
        },
        {
            name:"input_2",
            type: "number",
            message: chalk.yellow("Enter 2nd number for the operation: "),
        }
    ]);
    if(answers.Operator == "Addition") {
        console.log(`${chalk.bold.blue(answers.input_1)} + ${chalk.bold.blue(answers.input_2)} => ${chalk.bold.green(sumoftwo(answers.input_1,answers.input_2))}`)
    } else if (answers.Operator == "Subtraction") {
        console.log(`${chalk.bold.blue(answers.input_1)} - ${chalk.bold.blue(answers.input_2)} => ${chalk.bold.green(subtractoftwo(answers.input_1,answers.input_2))}`)
    } else if (answers.Operator == "Multiplication") {
        console.log(`${chalk.bold.blue(answers.input_1)} x ${chalk.bold.blue(answers.input_2)} => ${chalk.bold.green(multiplyoftwo(answers.input_1,answers.input_2))}`)
    } else  if(answers.Operator == "Division") {
        console.log(`${chalk.bold.blue(answers.input_1)} / ${chalk.bold.blue(answers.input_2)} => ${chalk.bold.green(divisionoftwo(answers.input_1,answers.input_2))}`)
    } else if (answers.Operator == "Exponent") {
        console.log(`${chalk.bold.blue(answers.input_1)} ** ${chalk.bold.blue(answers.input_2)} => ${chalk.bold.green(exponentoftwo(answers.input_1,answers.input_2))}`)
    } else  {
        console.log(`${chalk.bold.blue(answers.input_1)} % ${chalk.bold.blue(answers.input_2)} => ${chalk.bold.green(modulusoftwo(answers.input_1,answers.input_2))}`)
    };
}; 
// userInput();

async function run_again () {
    let again;
    do{
        await userInput();
        again = await inquirer.prompt([
            {
                name:"restart",
                type:String,
                message: chalk.redBright("Do you want to restart again? Press yes or not: "),
            }
        ])
    } while (again.restart === "yes" || again.restart === "Yes")
}
run_again();