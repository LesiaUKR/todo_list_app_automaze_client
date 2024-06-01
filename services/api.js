import axios from "axios";

const axiosInterceptorInstance = axios.create({
  baseURL: "https://todo-list-app-automaze-server.onrender.com",
});

export const getAllTasks = async () => {
  try {
    const res = await axiosInterceptorInstance.get("/api/tasks");
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
