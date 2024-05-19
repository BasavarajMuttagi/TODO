import SearchBar from "../components/SearchBar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

function HomeLayout() {
  return (
    <div className="h-screen  bg-black p-1 w-full">
      <div className="flex flex-col items-center space-y-10 mt-10">
        <TaskForm />
        <SearchBar />
        <div
          className="flex flex-col space-y-2 overflow-y-auto items-center w-full max-w-screen-lg"
          style={{ maxHeight: "calc(100vh - 210px)", scrollbarWidth: "thin" }}
        >
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
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
