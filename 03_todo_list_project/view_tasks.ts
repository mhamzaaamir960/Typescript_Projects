import { tasks } from "./main.js";

export function view_tasks() {
    return tasks.forEach((task) => {
      console.log(`Task ${task.index}: Description: ${task.description}`)
    })
  }
