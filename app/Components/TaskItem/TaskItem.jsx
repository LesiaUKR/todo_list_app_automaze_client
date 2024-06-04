"use client";
import { edit, trash } from "app/utils/icons";
import React from "react";
import { useGlobalState } from "app/context/globalContextProvider";
import EditTaskForm from "../Modals/EditTaskForm";

function TaskItem({
  title,
  description,
  date,
  isCompleted,
  id,
  priority,
  task,
}) {
  const { theme, deleteTask, updateTaskCompletedStatus, openModal } =
    useGlobalState();

  const handleCompletedToggle = async () => {
    try {
      await updateTaskCompletedStatus(id, !isCompleted);
    } catch (error) {
      console.error("Error updating task completed status:", error);
    }
  };

  const handleEditClick = () => {
    openModal(<EditTaskForm task={task} />);
  };

  return (
    <div
      className="p-4 rounded-lg shadow-md flex flex-col gap-2"
      style={{
        backgroundColor: theme.borderColor2,
        boxShadow: theme.shadow7,
        border: `2px solid ${theme.borderColor2}`,
        height: "16rem",
      }}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p>{priority}</p>
      </div>
      <p>{description}</p>
      <p className="mt-auto">{date}</p>
      <div className="flex items-center gap-4 mt-4">
        {isCompleted ? (
          <button
            className={`py-2 px-4 rounded-full ${
              isCompleted ? "bg-green-600" : "bg-red-600"
            } text-white`}
            onClick={handleCompletedToggle}
          >
            Completed
          </button>
        ) : (
          <button
            className="bg-red-600 text-white py-2 px-4 rounded-full"
            onClick={handleCompletedToggle}
          >
            Incomplete
          </button>
        )}
        <button className="ml-auto" onClick={handleEditClick}>
          {edit}
        </button>
        <button
          className="text-red-600"
          onClick={() => {
            console.log("Deleting task with ID onClick:", id);
            deleteTask(id);
          }}
        >
          {trash}
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
