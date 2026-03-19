"use client";

import { useState, useEffect, useTransition } from "react";

type EditTaskModalProps = {
  task: any;
  onClose: () => void;
  onSave: (taskid: string, title: string, description: string) => void;
};

export default function EditTaskModal({task, onClose, onSave}: EditTaskModalProps) {
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  if (!task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-lg text-gray-100">
        <h2 className="text-xl font-semibold mb-4">Edit Task</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            startTransition(() => {
              onSave(task.taskid, title, description);
              onClose();
            });
          }}
          className="space-y-4"
        >
          {/* Title */}
          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              value={description}
              rows={6}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 resize-y"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500 text-sm"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isPending}
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-sm disabled:opacity-50"
            >
              {isPending ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}