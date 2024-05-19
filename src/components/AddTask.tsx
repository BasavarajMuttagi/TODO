import { Plus } from "@phosphor-icons/react";

function AddTask({ openDialog }: { openDialog: () => void }) {
  return (
    <div className="flex justify-end items-center w-full shrink-0 max-w-screen-lg">
      <button
        className="bg-violet-500 rounded px-2 py-1 flex justify-between items-center space-x-5 text-white"
        onClick={() => openDialog()}
      >
        <span className="font-semibold">Task</span>
        <Plus size={20} weight="regular" />
      </button>
    </div>
  );
}

export default AddTask;
