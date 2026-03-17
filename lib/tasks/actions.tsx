"use server"; // <-- only once at the top

import { createTask, getTasks, deleteTask, deleteAllTasks, editTask, toggleIsCompleted } from "@/lib/tasks/db";
import { revalidatePath } from "next/cache";

// Create a new task
export async function handleCreateTask(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  console.log("Creating task:", { title, description });
  await createTask(title, description);
  revalidatePath("/tools/tasks");
}

// Delete a single task
export async function handleDeleteTask(taskid: string) {
  console.log("Deleting task:", taskid);
  await deleteTask(taskid);
  revalidatePath("/tools/tasks");
}

// Edit a task
export async function handleEditTask(taskid: string, title: string, description: string) {
  console.log("Editing task:", taskid);
  await editTask(taskid, title, description);
  revalidatePath("/tools/tasks");
}

// Delete all tasks
export async function handleDeleteAllTasks() {
  console.log("Deleting all tasks");
  await deleteAllTasks();
  revalidatePath("/tools/tasks");
}

// Mark a task as completed
export async function handleMarkIsCompleted(taskid: string) {
  console.log("Marking task as completed:", taskid);
  await toggleIsCompleted(taskid);
  revalidatePath("/tools/tasks");
}