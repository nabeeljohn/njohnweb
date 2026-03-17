import Task from "./task";

type TaskListProps = {
  tasks?: any[];
  deleteTaskAction: (taskid: string) => Promise<void>;
  editTaskAction: (taskid: string, title: string, description: string) => Promise<void>;
  isCompletedTaskAction: (taskid: string) => Promise<void>;
};

export default function TaskList({ tasks = [], deleteTaskAction, editTaskAction, isCompletedTaskAction }: TaskListProps) {

  // Sort tasks: incomplete first, then completed; within each group by createdon
  const sortedTasks = [...tasks].sort((a, b) => {
    // Move completed tasks to the end
    if (a.is_completed !== b.is_completed) {
      return a.is_completed ? 1 : -1;
    }
    // Sort by createdon date (oldest first)
    const dateA = new Date(a.createdon).getTime();
    const dateB = new Date(b.createdon).getTime();
    return dateB - dateA; // swap for newest first: dateB - dateA
  });

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
          {sortedTasks.map((task) => (
            <Task
              key={task.taskid}
              task={task}
              deleteTaskAction={deleteTaskAction}
              editTaskAction={editTaskAction}
              isCompletedTaskAction={isCompletedTaskAction}
            />
          ))}
        </div>
      )}
    </div>
  );
}