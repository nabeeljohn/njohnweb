"use client";

import { useTransition } from "react";

export default function Task({
  task,
  deleteTaskAction,
}: {
  task: any;
  deleteTaskAction: (taskid: string) => Promise<void>;
}) {
  // Initialize the transition hook
  const [isPending, startTransition] = useTransition();

  return (
    <div className="bg-gray-800 text-gray-100 rounded-lg p-4 flex flex-col justify-between h-full shadow">
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
      <div className="mt-4 flex space-x-4 bg-gray-700 p-2 rounded">
        <button className="text-blue-400 hover:text-blue-500 text-sm">
          Edit
        </button>
        <button className="text-blue-400 hover:text-blue-500 text-sm">
          Mark Done
        </button>
        <button
          className="text-blue-400 hover:text-blue-500 text-sm disabled:opacity-50"
          disabled={isPending}
          onClick={() =>
            startTransition(() => deleteTaskAction(task.taskid))
          }
        >
          {isPending ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}