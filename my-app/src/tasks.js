import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getTasks(query) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (query) {
    tasks = matchSorter(tasks, query, { keys: ["title", "description"] });
  }
  return tasks.sort(sortBy("title", "createdAt"));
}

const now = new Date();
const day = String(now.getDate()).padStart(2, "0");
const month = String(now.getMonth() + 1).padStart(2, "0");
const year = now.getFullYear();
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");
const seconds = String(now.getSeconds()).padStart(2, "0");

export async function createTask() {
  let id = Math.random().toString(36).substring(2, 9);
  let task = {
    id,
    createdAt: `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`,
  };
  let tasks = await getTasks();
  tasks.unshift(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return task;
}

export async function getTask(id) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let task = tasks.find((task) => task.id === id);
  return task ?? null;
}

export async function updateTask(id, updates) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    throw new Error(`No task found for ID: ${id}`);
  }
  tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return tasks[taskIndex];
}

export async function deleteTask(id) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let filteredTasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  return filteredTasks.length < tasks.length;
}
