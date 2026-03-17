import TaskList from "./tasklist";
import { createTask, getTasks, deleteTask, deleteAllTasks, editTask, markIsCompleted } from "@/lib/tasks/db";
import CreateTaskModal from "./createtaskmodal";
import DeleteAllButton from "./deleteallbutton";
import { revalidatePath } from "next/cache";
import { pageTitle } from "@/lib/metadata/metadata";

export const metadata = {
    title: pageTitle("Tasks"),
    description: "Manage your tasks and action items with NJohn Web's Task Manager. Create, view, and delete tasks to stay organized and productive.",
};

export const dynamic = "force-dynamic";

export default async function Tasks() {
    const res = await getTasks();

    async function handleCreateTask(formData: FormData) {
        "use server";
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        console.log("Creating task:", { title, description });
        await createTask(title, description);
        revalidatePath("/tools/tasks"); // revalidate the current page to show the new task
    }

    async function handleDeleteTask(taskid: string) {
        "use server";
        console.log("Deleting task:", taskid);
        await deleteTask(taskid);
        revalidatePath("/tools/tasks"); // revalidate the current page to reflect the deletion
    }

    async function handleEditTask(taskid: string, title: string, description: string) {
        "use server";
        console.log("Editing task:", taskid);
        await editTask(taskid, title, description);
        revalidatePath("/tools/tasks"); // revalidate the current page to reflect the changes
    }

    async function handleDeleteAllTasks() {
        "use server";
        console.log("Deleting all tasks");
        await deleteAllTasks();
        revalidatePath("/tools/tasks"); // revalidate the current page to reflect the deletion
    }

    async function handleMarkIsCompleted(taskid: string) {
        "use server"
        console.log("Marking IsCompleted");
        await markIsCompleted(taskid);
        revalidatePath("/tools/tasks");
    }

    return (
        <>
            {/* Title row */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Tasks</h1>
                <div className="flex space-x-3">
                    <CreateTaskModal action={handleCreateTask} />
                    <DeleteAllButton action={handleDeleteAllTasks} />
                </div>
            </div>
            <div className="mt-8 mb-8 rounded-lg border border-yellow-500/40 bg-yellow-500/10 p-4 text-yellow-200 text-sm">
                ⚠️ This tool is currently in development. Authentication will be required once it is fully implemented.
            </div>
            <TaskList tasks={res} deleteTaskAction={handleDeleteTask} editTaskAction={handleEditTask} isCompletedTaskAction={handleMarkIsCompleted}/>
        </>
    );
}