"use client";

import { useState, useTransition } from "react";
import EditTaskModal from "./modals/edittaskmodal";
import ViewTaskModal from "./modals/viewtaskmodal";

type TaskProps = {
  task: any;
  deleteTaskAction: (taskid: string) => Promise<void>;
  editTaskAction: (taskid: string, title: string, description: string) => Promise<void>;
  isCompletedTaskAction: (taskid: string) => Promise<void>;
};

export default function Task({ task, deleteTaskAction, editTaskAction, isCompletedTaskAction }: TaskProps) {
  const [isDeleting, startDeleteTransition] = useTransition();
  const [isCompleting, startCompleteTransition] = useTransition();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); // view modal state
  const isCompleted = task.is_completed;

  return (
    <>
      {/* Task Card */}
      <div
        onClick={() => setIsViewModalOpen(true)}
        className={`text-gray-100 rounded-lg p-4 flex flex-col justify-between h-full shadow 
    ${isCompleted ? "bg-gray-900" : "bg-gray-800"} 
    cursor-pointer border border-transparent hover:border-gray-500 transition-all duration-200`}
      >
        {/* Task Content */}
        <div className="pb-4">
          <h2 className="font-semibold text-lg mb-2 truncate">{task.title}</h2>
          <p className="text-gray-300 mb-2 line-clamp-2">{task.description}</p>
        </div>

        {/* Bottom Section: Created On + Buttons */}
        <div
          className="flex flex-col w-full rounded-md overflow-hidden"
          onClick={(e) => e.stopPropagation()} // prevent opening modal when clicking buttons
        >
          {/* Open / Done Info Bar */}
          <div className={`text-xs flex flex-col sm:flex-row justify-between px-3 py-2 rounded-t-md bg-gray-700/50 ${isCompleted ? "bg-gray-800/50" : "bg-gray-700/50"}`}>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-gray-400 uppercase tracking-wide">
                Open
              </span>
              <span className="text-gray-100">
                {typeof task.createdon === "string"
                  ? task.createdon
                  : new Date(task.createdon).toLocaleString(undefined, {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "2-digit"
                  })}
              </span>
            </div>

            {task.is_completed && (
              <div className="flex items-center gap-2 mt-1 sm:mt-0">
                <span className="text-[10px] text-gray-400 uppercase tracking-wide">
                  Done
                </span>
                <span className="text-gray-100">
                  {typeof task.completed_on === "string"
                    ? task.completed_on
                    : new Date(task.completed_on).toLocaleString(undefined, {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "numeric",
                      minute: "2-digit"
                    })}
                </span>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className={`flex items-center justify-between px-3 py-2 rounded-b-md ${isCompleted ? "bg-gray-800/50" : "bg-gray-700/50"}`}>
            <div className="flex space-x-4">
              <button
                className="text-gray-300 hover:text-white hover:bg-gray-600/40 px-2.5 py-1 rounded-md text-xs transition active:scale-95 bg-gray-700/50"
                onClick={() => setIsEditModalOpen(true)}
              >
                Edit
              </button>

              <button
                className="text-gray-300 hover:text-white hover:bg-gray-600/40 px-2.5 py-1 rounded-md text-xs transition active:scale-95 bg-gray-700/50"
                onClick={() =>
                  startCompleteTransition(() => isCompletedTaskAction(task.taskid))
                }
              >
                {isCompleted ? "Undo" : "Done"}
              </button>

              <button
                className="text-gray-300 hover:text-red-300 hover:bg-red-500/10 px-2.5 py-1 rounded-md text-xs transition disabled:opacity-40 active:scale-95 bg-gray-700/50"
                disabled={isDeleting}
                onClick={() =>
                  startDeleteTransition(() => deleteTaskAction(task.taskid))
                }
              >
                {isDeleting ? "..." : "Delete"}
              </button>
            </div>

            {task.is_completed && (
              <span className="text-green-400 text-sm font-semibold">
                COMPLETED
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <EditTaskModal
          task={task}
          onClose={() => setIsEditModalOpen(false)}
          onSave={async (taskid, title, description) => {
            await editTaskAction(taskid, title, description);
            setIsEditModalOpen(false);
          }}
        />
      )}

      {/* View Modal */}
      {isViewModalOpen && (
        <ViewTaskModal task={task} onClose={() => setIsViewModalOpen(false)} />
      )}
    </>
  );
}