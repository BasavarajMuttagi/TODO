import { CheckCircle, DotsThree, Star } from "@phosphor-icons/react";

type taskCardProps = {
  isCompleted: boolean;
  isImportant: boolean;
  label: string;
};
function TaskCard({
  isCompleted = false,
  isImportant = false,
  label,
}: taskCardProps) {
  return (
    <div className="w-full rounded outline-none bg-white/15 min-h-10 text-neutral-400 flex justify-between items-center px-2 py-4 space-x-2  shrink-0 hover:bg-white/35">
      <div>
        {isCompleted ? (
          <CheckCircle
            size={28}
            weight="fill"
            className="text-green-500 cursor-pointer hover:brightness-150"
          />
        ) : (
          <CheckCircle
            size={28}
            className="cursor-pointer hover:brightness-150"
          />
        )}
      </div>
      <div className="font-semibold text-white/80 flex-1 overflow-x-hidden text-nowrap">
        <p className="hover:brightness-150 select-none">{label}</p>
      </div>
      <div className="flex items-center space-x-2">
        <div>
          {isImportant ? (
            <Star
              size={20}
              weight="fill"
              className="text-yellow-500 cursor-pointer hover:brightness-150"
            />
          ) : (
            <Star size={20} className="cursor-pointer hover:brightness-150" />
          )}
        </div>
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
