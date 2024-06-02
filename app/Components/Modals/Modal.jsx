"use client";
import { useGlobalState } from "app/context/globalProvider";
import React from "react";

function Modal({ content }) {
  const { closeModal, theme } = useGlobalState();

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-45 backdrop-filter backdrop-blur-sm"
        onClick={closeModal}
      ></div>
      <div
        className="relative mx-4 p-8 max-w-lg w-full rounded-lg shadow-lg"
        style={{
          backgroundColor: theme.colorBg2,
          borderRadius: theme.borderRadiusMd2,
        }}
      >
        {content}
      </div>
    </div>
  );
}

export default Modal;
