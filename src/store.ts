import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const storageModule = {
  name: "todo-app-storage",
  storage: createJSONStorage(() => sessionStorage),
};

type store = {
  token: string;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  setToken: (newToken: string) => void;
  logout: () => void;
};

const useTodoStore = create<store>()(
  persist(
    (set) => ({
      token: "",
      todos: [],
      setTodos: (todos) => set(() => ({ todos })),
      setToken: (newToken) => set(() => ({ token: newToken })),
      logout: () => {
        set(() => ({
          token: "",
          todos: [],
        }));
      },
    }),
    storageModule,
  ),
);
export default useTodoStore;

export type Todo = {
  id: string;
  userId: string;
  label: string;
  description: string | null;
  isComplete: boolean;
  isImportant: boolean;
  createdAt: Date;
  updatedAt: Date;
};
