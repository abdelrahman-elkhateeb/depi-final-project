import { useState } from "react";
import { useGetTasksQuery } from "./tasksApi";
import AlertModal from "./DeleteTask";
import UpdateTask from "./UpdateTask";
import CreateTask from "./CreateTask";
import TaskCard from "./TaskCard";
import TaskSkeleton from "./TaskSkeleton";

const TasksList = () => {
  const [taskIdToDelete, setTaskIdToDelete] = useState();
  const [taskToEdit, setTaskToEdit] = useState();
  const { isLoading, data } = useGetTasksQuery();
  return (
    <div>
      <div className=" mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-2 md:gap-4  rounded-md">
        {isLoading
          ? Array.from({ length: 8 }, (_, index) => (
              <TaskSkeleton key={index} />
            ))
          : data?.tasks?.map((task) => (
              <TaskCard
                key={task._id}
                id={task._id}
                setTaskIdToDelete={setTaskIdToDelete}
                title={task.title}
                completed={task.completed}
                description={task.description}
                dueDate={task.dueDate}
                priority={task.priority}
                setTaskToEdit={setTaskToEdit}
              />
            ))}
      </div>
      <AlertModal id={taskIdToDelete} />
      <UpdateTask taskEdit={taskToEdit} />
      <CreateTask />
    </div>
  );
};

export default TasksList;