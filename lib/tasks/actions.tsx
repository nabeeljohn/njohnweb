"use server"; // <-- only once at the top

import { createTask, getTasks, deleteTask, deleteAllTasks, editTask, toggleIsCompleted } from "@/lib/tasks/db";
import { revalidatePath } from "next/cache";
const tasksPath = "tools/productivity/tasks";

// Create a new task
export async function handleCreateTask(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  console.log("Creating task:", { title, description });
  await createTask(title, description);
  revalidatePath(tasksPath);
}

// Delete a single task
export async function handleDeleteTask(taskid: string) {
  console.log("Deleting task:", taskid);
  await deleteTask(taskid);
  revalidatePath(tasksPath);
}

// Edit a task
export async function handleEditTask(taskid: string, title: string, description: string) {
  console.log("Editing task:", taskid);
  await editTask(taskid, title, description);
  revalidatePath(tasksPath);
}

// Delete all tasks
export async function handleDeleteAllTasks() {
  console.log("Deleting all tasks");
  // await delay(5000);
  await deleteAllTasks();
  revalidatePath(tasksPath);
}

// Mark a task as completed
export async function handleMarkIsCompleted(taskid: string) {
  console.log("Marking task as completed:", taskid);
  await toggleIsCompleted(taskid);
  revalidatePath(tasksPath);
}

// Delay function for simulation and testing only
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));