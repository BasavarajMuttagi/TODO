import { CheckCircle, DotsThree, Star } from "@phosphor-icons/react";

function TaskCard() {
  return (
    <div className="w-full rounded outline-none bg-white/25 min-h-10 text-neutral-400 flex justify-between items-center px-2 py-4 space-x-2 max-w-screen-lg shrink-0">
      <div>
        {false ? (
          <CheckCircle size={28} weight="fill" className="text-green-500"/>
        ) : (
          <CheckCircle size={28}  />
        )}
      </div>
      <div className="font-semibold text-white/80 flex-1 overflow-x-hidden text-nowrap">
        <p></p>
      </div>
      <div className="flex items-center space-x-2">
        <div>
          {false ? (
            <Star size={20} weight="fill" className="text-yellow-500" />
          ) : (
            <Star size={20} />
          )}
        </div>
        <div>
          <DotsThree size={30} weight="bold" />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
