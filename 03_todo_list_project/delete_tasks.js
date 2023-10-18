import PromptSync from "prompt-sync";
import chalk from "chalk";
const prompt = PromptSync();
import { tasks } from "./main.js";
export function delete_task() {
    const index = parseInt(prompt(chalk.yellowBright("Enter task index whcih task you want to delete: ")));
    const taskIndex = tasks.findIndex((task) => task.index === index);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        for (let i = taskIndex; i < tasks.length; i++) {
            tasks[i].index--;
            console.log(chalk.greenBright.bold(`Task ${tasks[i].index} is deleted successfully!`));
        }
    }
}
