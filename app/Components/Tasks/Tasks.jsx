"use client";
import React from "react";
import { TaskStyled } from "./Tasks.styled";
import { useGlobalState } from "app/context/globalContextProvider";
import SearchBar from "../Searchbar/Searchbar";
import NewTaskForm from "../Modals/NewTaskForm";

function Tasks() {
  const { theme } = useGlobalState();
  return (
    <TaskStyled theme={theme}>
      Tasks <SearchBar />
      <NewTaskForm />
    </TaskStyled>
  );
}

export default Tasks;
