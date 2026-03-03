// TaskList.tsx
import Task from "./task";

export default function TaskList({ tasks = [] }: { tasks?: any[] }) {
  return (
    <div className="w-full h-full p-0">
      {/* Heading with count */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-400">
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
        </p>
      </div>

      {/* Show message if no tasks */}
      {tasks.length === 0 ? (
        <p className="text-gray-400">No tasks available</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
          {tasks.map((task) => (
            <Task key={task.taskid} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}