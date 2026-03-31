import TaskList from "./tasklist";
import { getTasksByMemberId } from "@/lib/tasks/db";
import CreateTaskModal from "./modals/createtaskmodal";
import DeleteAllModal from "./modals/deleteallmodal";
import { pageTitle } from "@/lib/metadata/metadata";
import { handleCreateTaskByMemberId, handleDeleteTaskByTaskId, handleEditTaskByTaskId, handleDeleteAllTasksByMemberId, handleMarkIsCompleted } from "@/lib/tasks/actions";
import { handleGetCurrentUser } from "@/lib/authentication/actions";
import { redirect } from "next/navigation";

export const metadata = {
    title: pageTitle("Tasks"),
    description: "Manage your tasks and action items with NJohn Web's Task Manager. Create, view, and delete tasks to stay organized and productive.",
};

export const dynamic = "force-dynamic";

export default async function Tasks() {
    const contact = await handleGetCurrentUser();
    
    if (!contact) {
        redirect("/authentication/signin?redirect=" + encodeURIComponent("/tools/productivity/tasks"));
    }

    const res = await getTasksByMemberId(contact?.memberId || "");

    return (
        <>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Tasks</h1>
                <div className="flex gap-3">
                    <CreateTaskModal action={handleCreateTaskByMemberId.bind(null, contact?.memberId || "")} />
                    <DeleteAllModal action={handleDeleteAllTasksByMemberId.bind(null, contact?.memberId || "")} tasks={res}/>
                </div>
            </div>
            <TaskList tasks={res} deleteTaskAction={handleDeleteTaskByTaskId} editTaskAction={handleEditTaskByTaskId} isCompletedTaskAction={handleMarkIsCompleted}/>
        </>
    );
}