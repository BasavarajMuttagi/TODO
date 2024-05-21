import AddTask from "../components/AddTask";
import SearchBar from "../components/SearchBar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import useDialog from "../hooks/custom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useTodoStore, { Todo } from "../store";
import apiClient from "../axios/apiClient";

function HomeLayout() {
  const methods = useDialog();
  const { setTodos, todos } = useTodoStore();
  const [tasks, setTasks] = useState<Todo[]>(todos);

  const getAllTasks = async () => {
    const result = await apiClient().get("/todo/getAllTodos");
    console.log(result.data);
    return result.data;
  };

  const { isLoading, isError, error } = useQuery({
    queryKey: ["all tasks"],
    queryFn: () =>
      getAllTasks().then((res) => {
        setTodos(res);
        return res;
      }),
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="h-screen  bg-black p-1 w-full">
      <div className="flex flex-col items-center space-y-5 mt-10">
        <AddTask openDialog={methods.openDialog} />

        <SearchBar setTasks={setTasks} />
        <TaskForm {...methods} />
        <div
          className="flex flex-col space-y-2 overflow-y-auto items-center w-full max-w-screen-lg"
          style={{ maxHeight: "calc(100vh - 250px)", scrollbarWidth: "thin" }}
        >
          {tasks.map(({ id, label, isComplete, isImportant }) => (
            <TaskCard
              key={id}
              isComplete={isComplete}
              isImportant={isImportant}
              label={label}
              id={id}
            />
          ))}
          {tasks.length == 0 && (
            <div className="text-white/70 font-semibold">No Data</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
