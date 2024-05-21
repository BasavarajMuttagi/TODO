import { Dispatch } from "react";
import useTodoStore, { Todo } from "../store";

function SearchBar({
  setTasks,
}: {
  setTasks: Dispatch<React.SetStateAction<Todo[]>>;
}) {
  const { todos } = useTodoStore();
  const filterTasks = (term: string) => {
    const filtered = todos.filter((task) =>
      task.label.toLowerCase().includes(term.toLowerCase()),
    );
    setTasks(filtered);
  };
  return (
    <div className="w-full rounded outline-none bg-white min-h-10 text-neutral-400 flex justify-between items-center max-w-screen-lg shrink-0">
      <div className="font-semibold text-white/80 flex-1 overflow-x-hidden text-nowrap">
        <input
          type="search"
          placeholder="search task"
          className="bg-inherit outline-none p-2 w-full text-black/80"
          onChange={(e) => filterTasks(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
