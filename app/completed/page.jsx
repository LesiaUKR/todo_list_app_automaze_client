"use client";
import Tasks from "app/Components/Tasks/Tasks";
import { useGlobalState } from "app/context/globalContextProvider.js";
import React from "react";

function CompletedTasksPage() {
  const { completedTasks } = useGlobalState();
  return <Tasks title="Completed tasks" tasks={completedTasks} />;
}

export default CompletedTasksPage;
