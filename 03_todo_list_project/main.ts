import inquirer from "inquirer";
import PromptSync from "prompt-sync";
import { add_task } from "./add_task.js";
import { view_tasks } from "./view_tasks.js";
import { delete_task } from "./delete_tasks.js";
const prompt = PromptSync();

export const tasks : {index:number,description:string}[] =[];
async function operations() {
    let operation = await inquirer.prompt([
        {
            name:"choices",
            type:"list",
            message: "Select the choice which you want!",
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
        console.log("Good Bye");
        process.exit();
    }
}

do {
    await operations()
} while(true)