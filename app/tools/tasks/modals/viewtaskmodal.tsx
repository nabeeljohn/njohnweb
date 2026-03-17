"use client";

type ViewTaskModalProps = {
  task: any;
  onClose: () => void;
};

export default function ViewTaskModal({ task, onClose }: ViewTaskModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-gray-800 p-6 rounded-xl w-full max-w-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{task.title}</h2>
        <p className="text-gray-300 whitespace-pre-wrap">{task.description}</p>

        <p className="text-sm text-gray-400 mt-4">
          Created on:{" "}
          {typeof task.createdon === "string"
            ? task.createdon
            : new Date(task.createdon).toLocaleDateString()}
        </p>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}