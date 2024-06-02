"use client";
import Tasks from "app/Components/Tasks/Tasks";
import { useGlobalState } from "app/context/globalContextProvider.js";
import React from "react";

function InCompletedTasksPage() {
  const { inCompletedTasks } = useGlobalState();
  return <Tasks title="Incompleted tasks" tasks={inCompletedTasks} />;
}

export default InCompletedTasksPage;
