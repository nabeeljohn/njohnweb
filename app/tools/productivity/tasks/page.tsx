import TaskList from "./tasklist";
import { getTasksByMemberId } from "@/lib/tasks/db";
import CreateTaskModal from "./modals/createtaskmodal";
import DeleteAllModal from "./modals/deleteallmodal";
import { pageTitle } from "@/lib/metadata/metadata";
import { handleCreateTaskByMemberId, handleDeleteTaskByTaskId, handleEditTaskByTaskId, handleDeleteAllTasksByMemberId, handleMarkIsCompleted } from "@/lib/tasks/actions";
import { handleGetCurrentUser } from "@/lib/authentication/actions";
import { redirect } from "next/navigation";
import { MdBolt } from "react-icons/md";
export const metadata = {
    title: pageTitle("Tasks Lite"),
    description: "Free, lightweight task list from NJohn Web. The full Tasks app is coming soon.",
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
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 min-w-0">
                    <h1 className="text-3xl font-semibold tracking-tight flex items-center gap-2">
                        Tasks
                        <span className="text-sm font-medium px-2 py-0.5 rounded-md bg-gray-800/70 text-gray-300 border border-gray-700 flex items-center gap-1">
                            <MdBolt className="h-3.5 w-3.5 opacity-80" />
                            Lite
                        </span>
                    </h1>
                    <p className="hidden sm:block text-sm text-gray-400 sm:ml-2">
                    A streamlined version of Tasks. Full app in development—will launch separately and be announced here.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto shrink-0">
                    <CreateTaskModal action={handleCreateTaskByMemberId.bind(null, contact?.memberId || "")} />
                    <DeleteAllModal action={handleDeleteAllTasksByMemberId.bind(null, contact?.memberId || "")} tasks={res} />
                </div>
            </div>
            <TaskList tasks={res} deleteTaskAction={handleDeleteTaskByTaskId} editTaskAction={handleEditTaskByTaskId} isCompletedTaskAction={handleMarkIsCompleted} />
        </>
    );
}