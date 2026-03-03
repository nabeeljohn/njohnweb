// Task.tsx
export default function Task({ task }: { task: any }) {
  return (
    <div className="bg-gray-800 text-gray-100 rounded-lg p-4 flex flex-col justify-between h-full shadow">
      {/* Task Content */}
      <div>
        <h2 className="font-semibold text-lg mb-2">{task.title}</h2>
        <p className="text-gray-300 mb-2">{task.description}</p>
        <p className="text-sm text-gray-400">
          Created on: {typeof task.createdon === "string"
            ? task.createdon
            : new Date(task.createdon).toLocaleDateString()}
        </p>
      </div>

      {/* Left-aligned Text Buttons */}
      <div className="mt-4 flex space-x-4">
        <button className="text-blue-500 hover:text-blue-600 text-sm">
          Edit
        </button>
        <button className="text-blue-500 hover:text-blue-600 text-sm">
          Mark Done
        </button>
        <button className="text-blue-500 hover:text-blue-600 text-sm">
          Delete
        </button>
      </div>
    </div>
  );
}