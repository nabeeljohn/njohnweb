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
          {/* Created On / Completed On Info Bar */}
          <div className="bg-gray-700/60 text-gray-400 text-xs flex flex-col sm:flex-row justify-between px-2 py-2">
            <span>
              Created on:{" "}
              {typeof task.createdon === "string"
                ? task.createdon
                : new Date(task.createdon).toLocaleDateString()}
            </span>

            {task.is_completed && (<span>
              Completed on: 03/18/2026
            </span>)}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center bg-gray-700 p-2">
            <div className="flex space-x-4">
              <button
                className="text-blue-400 hover:text-blue-500 text-sm"
                onClick={() => setIsEditModalOpen(true)}
              >
                Edit
              </button>

              <button
                className="text-blue-400 hover:text-blue-500 text-sm"
                onClick={() =>
                  startCompleteTransition(() => isCompletedTaskAction(task.taskid))
                }
              >
                {isCompleted ? "Mark Pending" : "Mark Completed"}
              </button>

              <button
                className="text-blue-400 hover:text-blue-500 text-sm disabled:opacity-50"
                disabled={isDeleting}
                onClick={() =>
                  startDeleteTransition(() => deleteTaskAction(task.taskid))
                }
              >
                {isDeleting ? "Deleting..." : "Delete"}
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