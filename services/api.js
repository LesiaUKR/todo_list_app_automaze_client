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

export const updateTaskById = async (id, updatedTask) => {
  try {
    console.log("Updating task with ID:", id);
    const response = await axiosInterceptorInstance.put(
      `/api/tasks/${id}`,
      updatedTask
    );
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error.response.data);
    throw error;
  }
};

export const updateTaskCompleted = async (id, isCompleted) => {
  try {
    console.log("Updating task completed status with ID:", id);
    const response = await axiosInterceptorInstance.patch(
      `/api/tasks/${id}/completed`,
      { completed: isCompleted }
    );
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating task completed status:", error.response.data);
    throw error;
  }
};

export const deleteTaskById = async (id) => {
  try {
    console.log("Deleting task with ID:", id);
    const response = await axiosInterceptorInstance.delete(`/api/tasks/${id}`);
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting task:", error.response.data);
    throw error;
  }
};
