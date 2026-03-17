"use client";

import { useState, useTransition } from "react";
import EditTaskModal from "./edittaskmodal";

export default function Task({
  task,
  deleteTaskAction,
  editTaskAction,
  isCompletedTaskAction,
}: {
  task: any;
  deleteTaskAction: (taskid: string) => Promise<void>;
  editTaskAction: (taskid: string, title: string, description: string) => Promise<void>;
  isCompletedTaskAction: (taskid: string) => Promise<void>;
}) {
  // Initialize the transition hook
  const [isDeleting, startDeleteTransition] = useTransition();
  const [isCompleting, startCompleteTransition] = useTransition();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const isCompleted = task.is_completed;

  return (
    <>
      <div className={`text-gray-100 rounded-lg p-4 flex flex-col justify-between h-full shadow ${isCompleted ? "bg-gray-900" : "bg-gray-800"}`}>
        {/* Task Content */}
        <div>
          <h2 className="font-semibold text-lg mb-2">{task.title}</h2>
          <p className="text-gray-300 mb-2">{task.description}</p>
          <p className="text-sm text-gray-400">
            Created on:{" "}
            {typeof task.createdon === "string"
              ? task.createdon
              : new Date(task.createdon).toLocaleDateString()}
          </p>
        </div>

        {/* Buttons */}
        {/* Buttons + Completed Status */}
        <div className="mt-4 flex justify-between items-center bg-gray-700 p-2 rounded">

          {/* Left side: buttons */}
          <div className="flex space-x-4">
            <button
              className="text-blue-400 hover:text-blue-500 text-sm"
              onClick={() => setIsEditModalOpen(true)}
            >
              Edit
            </button>

            <button
              className="text-blue-400 hover:text-blue-500 text-sm"
              onClick={() => startCompleteTransition(() => isCompletedTaskAction(task.taskid))}
            >
              Mark Done
            </button>

            <button
              className="text-blue-400 hover:text-blue-500 text-sm disabled:opacity-50"
              disabled={isDeleting}
              onClick={() => startDeleteTransition(() => deleteTaskAction(task.taskid))}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>

          {/* Right side: completed indicator */}
          {task.is_completed && (
            <span className="text-green-400 text-sm font-semibold">
              COMPLETED
            </span>
          )}

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
    </>
  );
}