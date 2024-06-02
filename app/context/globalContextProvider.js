"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import themes from "./theme";
import { getAllTasks, deleteTaskById } from "services/api";
import { updateTaskById } from "./../../services/api";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const theme = themes[selectedThemeIndex];

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const allTasks = async () => {
    setIsLoading(true);
    try {
      const data = await getAllTasks();
      console.log(data);

      setTasks(data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    setIsLoading(true);
    try {
      const data = await deleteTaskById(id);
      console.log("Task deleted:", data);

      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log("Error deleting task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateTask = async (task) => {
    setIsLoading(true);
    try {
      const res = await updateTaskById(task._id, task);
      console.log("res.data", res.data);

      setTasks(tasks.map((t) => (t._id === task._id ? res.data : t)));
    } catch (error) {
      console.log("Error updating task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateTaskCompletedStatus = async (id, isCompleted) => {
    setIsLoading(true);
    try {
      const updatedTask = await updateTaskCompleted(id, isCompleted);
      console.log("Updated task:", updatedTask);

      setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)));
    } catch (error) {
      console.log("Error updating task completed status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const completedTasks = tasks.filter((task) => task.completed);
  const inCompletedTasks = tasks.filter((task) => !task.completed);

  useEffect(() => {
    allTasks();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        tasks,
        isLoading,
        modal,
        openModal,
        closeModal,
        deleteTask,
        completedTasks,
        inCompletedTasks,
        updateTask,
        updateTaskCompletedStatus,
      }}
    >
      <GlobalUpdateContext.Provider value={{ setSelectedThemeIndex }}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
