import axios from "axios";
import useTodoStore from "../store";

function apiClient() {
  return axios.create({
    baseURL: "https://api-food-delivery.vercel.app",
    headers: {
      Authorization: `Bearer ${useTodoStore.getState().token}`,
    },
  });
}

export default apiClient;
