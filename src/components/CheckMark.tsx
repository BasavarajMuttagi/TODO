import { CheckCircle, CircleNotch } from "@phosphor-icons/react";
import apiClient from "../axios/apiClient";
import { taskCardProps } from "./TaskCard";
import { useState } from "react";

function CheckMark({
  isComplete,
  id,
  refetch,
}: {
  isComplete: boolean;
  id: string;
  refetch: () => void;
}) {
  const [isLoading, setLoading] = useState<boolean>(false);
  const updateState = async (data: Partial<taskCardProps>) => {
    setLoading(true);
    await apiClient()
      .put(`/todo/update/${id}`, data)
      .then(() => refetch())
      .finally(() => setLoading(false));
  };

  if (isLoading) {
    return <CircleNotch size={28} className="animate-spin" />;
  }
  return (
    <div>
      {isComplete ? (
        <CheckCircle
          size={28}
          weight="fill"
          className="text-green-500 cursor-pointer hover:brightness-150"
          onClick={() => updateState({ isComplete: !isComplete })}
        />
      ) : (
        <CheckCircle
          size={28}
          className="cursor-pointer hover:brightness-150"
          onClick={() => updateState({ isComplete: !isComplete })}
        />
      )}
    </div>
  );
}

export default CheckMark;
