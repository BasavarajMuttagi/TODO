import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import apiClient from "../axios/apiClient";

function TaskForm({
  closeDialog,
  dialogRef,
  refetch,
  Type,
  id,
}: {
  closeDialog: () => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
  refetch: () => void;
  Type: "create" | "update";
  id?: string;
}) {
  const taskSchema = z.object({
    label: z.string().min(1),
    description: z.string().min(1),
  });

  type taskType = z.infer<typeof taskSchema>;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<taskType>({
    resolver: zodResolver(taskSchema),
  });

  const submitHandlers = async (data: taskType) => {
    if (Type == "create") {
      await apiClient()
        .post("/todo/create", data)
        .then(() => refetch())
        .then(() => reset());
      closeDialog();
    } else {
      await apiClient()
        .put(`/todo/update/${id}`, data)
        .then(() => refetch())
        .then(() => reset());
      closeDialog();
    }
  };
  return (
    <dialog
      ref={dialogRef}
      className="border border-white/50  p-5  w-full max-w-screen-lg rounded outline-none h-[28rem] bg-black text-white overflow-hidden top-1/4"
    >
      <form onSubmit={handleSubmit(submitHandlers)} className="space-y-5">
        <div className="space-y-1">
          <label htmlFor="taskname">Label</label>
          <input
            {...register("label")}
            type="text"
            className="px-2 py-1 outline-none rounded w-full text-black"
          />
          {errors.label && (
            <p className="text-red-400 text-xs">{errors.label.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <label htmlFor="taskname">Description</label>
          <textarea
            {...register("description")}
            className="px-2 py-1 outline-none rounded w-full h-52 resize-none text-black"
          />
          {errors.description && (
            <p className="text-red-400 text-xs">{errors.description.message}</p>
          )}
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={(e) => {
              closeDialog(), e.preventDefault();
            }}
            className="px-2 py-1 rounded border border-white/50 hover:text-black hover:bg-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-2 py-1 rounded border border-white/50 bg-white text-black hover:brightness-90"
          >
            {Type == "create" ? "Create" : "Update"}
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default TaskForm;
