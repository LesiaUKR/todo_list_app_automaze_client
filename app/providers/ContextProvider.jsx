"use client";

import React from "react";
import { GlobalContextProvider } from "app/context/globalContextProvider";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function ContextProvider({ children }) {
  const [isReady, setIsReady] = React.useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 200);

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <GlobalContextProvider>
      <Toaster />
      {children}
    </GlobalContextProvider>
  );
}

export default ContextProvider;
