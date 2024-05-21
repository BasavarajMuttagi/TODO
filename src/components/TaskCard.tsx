import { DotsThree } from "@phosphor-icons/react";
import CheckMark from "./CheckMark";
import BookMark from "./BookMark";

export type taskCardProps = {
  isComplete: boolean;
  isImportant: boolean;
  label: string;
  id: string;
  refetch: () => void;
};
function TaskCard({
  isComplete = false,
  isImportant = false,
  label,
  id,
  refetch,
}: taskCardProps) {
  return (
    <div className="w-full rounded outline-none bg-white/15 min-h-10 text-neutral-400 flex justify-between items-center px-2 py-4 space-x-2  shrink-0 hover:bg-white/35">
      <CheckMark isComplete={isComplete} id={id} refetch={refetch} />
      <div className="font-semibold text-white/80 flex-1 overflow-x-hidden text-nowrap">
        <p className="hover:brightness-150 select-none">{label}</p>
      </div>
      <div className="flex items-center space-x-2">
        <BookMark isImportant={isImportant} id={id} refetch={refetch} />
        <div>
          <DotsThree
            size={30}
            weight="bold"
            className="cursor-pointer hover:brightness-150"
          />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
