import { CircleNotch, Star } from "@phosphor-icons/react";
import apiClient from "../axios/apiClient";
import { taskCardProps } from "./TaskCard";
import { useState } from "react";

function BookMark({
  isImportant,
  id,
  refetch,
}: {
  isImportant: boolean;
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
    return <CircleNotch size={20} className="animate-spin" />;
  }
  return (
    <div>
      {isImportant ? (
        <Star
          size={20}
          weight="fill"
          className="text-yellow-500 cursor-pointer hover:brightness-150"
          onClick={() => updateState({ isImportant: !isImportant })}
        />
      ) : (
        <Star
          size={20}
          className="cursor-pointer hover:brightness-150"
          onClick={() => updateState({ isImportant: !isImportant })}
        />
      )}
    </div>
  );
}

export default BookMark;
