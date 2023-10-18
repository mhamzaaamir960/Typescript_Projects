import chalk from "chalk";
import { tasks } from "./main.js";

export function view_tasks() {
    return tasks.forEach((task) => {
      console.log(`${chalk.grey(`Task ${task.index}:`)} \n${chalk.blue(`Description:`)} ${chalk.green(`${task.description}`)}`)
    })
  }
