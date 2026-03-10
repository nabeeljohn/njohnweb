// TaskList.tsx
import Task from "./task";

export default function TaskList({ tasks = [], deleteTaskAction, editTaskAction }: { tasks?: any[], deleteTaskAction: (taskid: string) => Promise<void>, editTaskAction: (taskid: string, title: string, description: string) => Promise<void> }) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <Task key={task.taskid} task={task} deleteTaskAction={deleteTaskAction} editTaskAction={editTaskAction} />
          ))}
        </div>
      )}
    </div>
  );
}