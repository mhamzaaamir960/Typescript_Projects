import PromptSync from "prompt-sync";
const prompt = PromptSync();
import { tasks } from "./main.js";
let index;

export function add_task() {
    let description: string = prompt("Write your task here: ");
    index = tasks.length + 1;
    tasks.push({index,description});
    }