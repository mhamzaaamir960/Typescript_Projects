#!/usr/bin/env node
import inquirer from "inquirer";
import PromptSync from "prompt-sync";
import chalk from "chalk";
import { add_task } from "./add_task.js";
import { view_tasks } from "./view_tasks.js";
import { delete_task } from "./delete_tasks.js";
import { node_banner } from "./banner.js";
const prompt = PromptSync();
await node_banner();

export const tasks : {index:number,description:string}[] =[];
async function operations() {
    let operation = await inquirer.prompt([
        {
            name:"choices",
            type:"list",
            message: chalk.magentaBright.bold("Select the choice!"),
            choices: ["Add Task","View Task","Delete Task","Exit"]
        }
    ])
    if(operation.choices === "Add Task") {
        add_task();
    } else if (operation.choices === "View Task" ) {
        view_tasks();
    } else if (operation.choices === "Delete Task") {
          view_tasks();
          delete_task()
    } else {
        console.log(chalk.bold.cyan("Good Bye"));
        process.exit();
    }
}
do {
    await operations()
} while(true)