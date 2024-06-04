"use client";
import React from "react";
import { useGlobalState } from "app/context/globalContextProvider";
import { ModalStyled } from "./Modal.styled";

function Modal({ content }) {
  const { closeModal, theme } = useGlobalState();

  return (
    <ModalStyled theme={theme}>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-content">{content}</div>
    </ModalStyled>
  );
}

export default Modal;
