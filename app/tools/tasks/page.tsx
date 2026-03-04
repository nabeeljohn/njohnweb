import TaskList from "./tasklist";
import { createTask, getTasks, deleteTask, deleteAllTasks } from "@/lib/tasks/db";
import CreateTaskModal from "./createtaskmodal";
import DeleteAllButton from "./deleteallbutton";
import { revalidatePath } from "next/cache";

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

    async function handleDeleteAllTasks() {
        "use server";
        console.log("Deleting all tasks");
        await deleteAllTasks();
        revalidatePath("/tools/tasks"); // revalidate the current page to reflect the deletion
    }

    return (
        <div className="bg-gray-700 text-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title row */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold">Tasks</h1>
                    <div className="flex space-x-3">
                        <CreateTaskModal action={handleCreateTask} />
                        <DeleteAllButton action={handleDeleteAllTasks} />
                    </div>
                </div>

                <TaskList tasks={res} deleteTaskAction={handleDeleteTask} />
            </div>
        </div>
    );
}