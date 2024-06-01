"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import themes from "./theme";
import { getAllTasks } from "services/api";

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

  useEffect(() => {
    allTasks();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ theme, tasks, isLoading, modal, openModal, closeModal }}
    >
      <GlobalUpdateContext.Provider value={{ setSelectedThemeIndex }}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
