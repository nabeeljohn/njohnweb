"use server";

import { createTaskByMemberId, getTasksByMemberId, deleteTask, deleteAllTasks, editTask, toggleIsCompleted } from "@/lib/tasks/db";
import { revalidatePath } from "next/cache";
import { productivityToolsUrls } from "../urls/urls";

// Create a new task
export async function handleCreateTaskByMemberId(memberId: string, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  console.log("Creating task:", { title, description });
  await createTaskByMemberId(memberId, title, description);
  revalidatePath(productivityToolsUrls.tasks);
}

// Delete a single task
export async function handleDeleteTask(taskid: string) {
  console.log("Deleting task:", taskid);
  await deleteTask(taskid);
  revalidatePath(productivityToolsUrls.tasks);
}

// Edit a task
export async function handleEditTask(taskid: string, title: string, description: string) {
  console.log("Editing task:", taskid);
  await editTask(taskid, title, description);
  revalidatePath(productivityToolsUrls.tasks);
}

// Delete all tasks
export async function handleDeleteAllTasks() {
  console.log("Deleting all tasks");
  // await delay(5000);
  await deleteAllTasks();
  revalidatePath(productivityToolsUrls.tasks);
}

// Mark a task as completed
export async function handleMarkIsCompleted(taskid: string) {
  console.log("Marking task as completed:", taskid);
  await toggleIsCompleted(taskid);
  revalidatePath(productivityToolsUrls.tasks);
}

// Delay function for simulation and testing only
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));