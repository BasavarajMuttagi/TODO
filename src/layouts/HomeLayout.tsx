import TaskCard from "../components/TaskCard";

function HomeLayout() {
  return (
    <div className="h-screen flex justify-between items-center bg-purple-950 p-1">
      <div className="flex flex-col space-y-2 overflow-y-auto flex-1 items-center"  style={{ maxHeight: "calc(100vh - 150px)", scrollbarWidth: "thin" }}>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map(() => (
          <TaskCard />
        ))}
      </div>
    </div>
  );
}

export default HomeLayout;
