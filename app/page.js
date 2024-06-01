"use client";
import Tasks from "./Components/Tasks/Tasks";
import { useGlobalState } from "app/context/globalContextProvider.js";

export default function Home() {
  const { tasks } = useGlobalState();
  return <Tasks title="All Tasks" tasks={tasks} />;
}
