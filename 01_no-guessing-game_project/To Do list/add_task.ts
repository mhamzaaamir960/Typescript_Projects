import PromptSync from "prompt-sync";
import chalk from "chalk";
const prompt = PromptSync();
import { tasks } from "./main.js";
let index;

export function add_task() {
    let description: string = prompt(chalk.yellowBright("Write your task here: "));
    index = tasks.length + 1;
    tasks.push({index,description});
}