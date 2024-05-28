"use client";

import React from "react";
import { GlobalStyles } from "./GlobalStyleProvider.styled";

function GlobalStyleProvider({ children }) {
  return (
    <>
      <GlobalStyles />
      <div className="global-container">{children}</div>
    </>
  );
}

export default GlobalStyleProvider;
