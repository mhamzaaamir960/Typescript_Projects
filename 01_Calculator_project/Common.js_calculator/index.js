#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets! Start your Calculation');
    await sleep();
    rainbowTitle.stop();
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
}
await welcome();
async function writeOperator() {
    let answers = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: chalk.yellow(`Which operator do you want you to perform`),
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponent"]
        },
        {
            type: "number",
            name: "num1",
            message: chalk.cyan(`Enter any 1st number:`),
        },
        {
            type: "number",
            name: "num2",
            message: chalk.cyan(`Enter any 2nd number:`),
        },
    ]);
    if (answers.operator == "Addition") {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2} `));
    }
    else if (answers.operator == "Subtraction") {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2} `));
    }
    else if (answers.operator == "Multiplication") {
        console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2} `));
    }
    else if (answers.operator == "Division") {
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2} `));
    }
    else if (answers.operator == "Modulus") {
        console.log(chalk.green(`${answers.num1} % ${answers.num2} = ${answers.num1 % answers.num2} `));
    }
    else if (answers.operator == "Exponent") {
        console.log(chalk.green(`${answers.num1} ** ${answers.num2} = ${answers.num1 ** answers.num2} `));
    }
    else
        ;
}
// await writeOperator();
async function runAgain() {
    inquirer;
    do {
        await writeOperator();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "Restart",
            message: "Do you want to continue? press y or n:",
        });
    } while (again.Restart == 'y' || again.Restart == 'yes' || again.Restart == 'Y' || again.Restart == 'YES');
}
;
runAgain();
