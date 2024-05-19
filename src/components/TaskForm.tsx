import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

function TaskForm({
  closeDialog,
  dialogRef,
}: {
  closeDialog: () => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
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
  } = useForm<taskType>({
    resolver: zodResolver(taskSchema),
  });

  const submitHandlers = (data: taskType) => {
    console.log(data);
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
            Create
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default TaskForm;
