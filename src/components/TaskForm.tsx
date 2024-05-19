function TaskForm() {
  return (
    <dialog>
      <div className="border border-white/50  p-5 space-y-5 w-full max-w-screen-lg rounded outline-none h-96 bg-black text-white">
        <div className="space-y-1">
          <label htmlFor="taskname">Label</label>
          <input
            type="text"
            className="px-2 py-1 outline-none rounded w-full"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="taskname">Description</label>
          <textarea className="px-2 py-1 outline-none rounded w-full h-44 resize-none" />
        </div>
        <div className="flex justify-between items-center">
          <button className="px-2 py-1 rounded border border-white/50 hover:text-black hover:bg-white">
            Cancel
          </button>
          <button className="px-2 py-1 rounded border border-white/50 bg-white text-black hover:brightness-90">
            Create
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default TaskForm;
