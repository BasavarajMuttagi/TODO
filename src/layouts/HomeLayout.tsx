import AddTask from "../components/AddTask";
import SearchBar from "../components/SearchBar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import useDialog from "../hooks/custom";

function HomeLayout() {
  const methods = useDialog();
  return (
    <div className="h-screen  bg-black p-1 w-full">
      <div className="flex flex-col items-center space-y-5 mt-10">
        <AddTask openDialog={methods.openDialog} />
        
        <SearchBar />
        <TaskForm {...methods} />
        <div
          className="flex flex-col space-y-2 overflow-y-auto items-center w-full max-w-screen-lg"
          style={{ maxHeight: "calc(100vh - 250px)", scrollbarWidth: "thin" }}
        >
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 
            20,
          ].map(() => (
            <TaskCard />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
