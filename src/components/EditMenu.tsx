import { PencilSimple, Trash } from "@phosphor-icons/react";
import apiClient from "../axios/apiClient";
import useDialog from "../hooks/custom";
import TaskForm from "./TaskForm";

function EditMenu({
  dialogRef,
  id,
  refetch,
}: {
  dialogRef: React.RefObject<HTMLDivElement>;
  id: string;
  refetch: () => void;
}) {
  const methods = useDialog();

  const deleteTask = async () => {
    await apiClient()
      .delete(`/todo/hardDeleteById/${id}`)
      .then(() => refetch());
  };
  return (
    <>
      <div
        ref={dialogRef}
        tabIndex={-1}
        onBlur={() => dialogRef.current?.blur()}
        className="-z-10 top-8 right-0 absolute outline-none w-[10rem] rounded-md bg-neutral-800  text-neutral-400 p-2 space-y-2 focus:z-50"
      >
        <div
          className="w-full select-none cursor-pointer flex items-center space-x-5 p-2 rounded-md hover:bg-white/20"
          onClick={() => {
            dialogRef.current?.blur();
            methods.openDialog();
          }}
        >
          <PencilSimple size={20} />
          <span>Edit</span>
        </div>
        <div
          className="w-full select-none cursor-pointer flex items-center space-x-5 p-2 rounded-md text-white bg-red-500 hover:bg-red-500/80"
          onClick={() => {
            deleteTask(), dialogRef.current?.blur();
          }}
        >
          <Trash size={20} />
          <span>Delete</span>
        </div>
      </div>
      <TaskForm {...methods} refetch={refetch} Type="update" id={id} />
    </>
  );
}

export default EditMenu;
