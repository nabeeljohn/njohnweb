import TaskList from "./tasklist";
import { getTasks } from "@/lib/tasks/db";
import CreateTaskModal from "./createtaskmodal";
import DeleteAllButton from "./deleteallbutton";
import { pageTitle } from "@/lib/metadata/metadata";
import { handleCreateTask, handleDeleteTask, handleEditTask, handleDeleteAllTasks, handleMarkIsCompleted } from "@/lib/tasks/actions";


export const metadata = {
    title: pageTitle("Tasks"),
    description: "Manage your tasks and action items with NJohn Web's Task Manager. Create, view, and delete tasks to stay organized and productive.",
};

export const dynamic = "force-dynamic";

export default async function Tasks() {
    const res = await getTasks();

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