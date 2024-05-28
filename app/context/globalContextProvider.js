"use client";
import React, { createContext, useContext, useState } from "react";
import themes from "./theme";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);
  const theme = themes[selectedThemeIndex];

  return (
    <GlobalContext.Provider value={{ theme }}>
      <GlobalUpdateContext.Provider value={{ setSelectedThemeIndex }}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
