"use client";
import { edit, trash } from "app/utils/icons";
import formatDate from "app/utils/formatDate";
import React from "react";
import { useGlobalState } from "app/context/globalContextProvider";

function TaskItem({ title, description, date, isCompleted, id, priority }) {
  const { theme } = useGlobalState();
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
      <p className="mt-auto">{formatDate(date)}</p>
      <div className="flex items-center gap-4 mt-4">
        {isCompleted ? (
          <button
            className={`py-2 px-4 rounded-full ${
              isCompleted ? "bg-green-600" : "bg-red-600"
            } text-white`}
            onClick={() => {
              const task = {
                id,
                isCompleted: !isCompleted,
              };

              updateTask(task);
            }}
          >
            Completed
          </button>
        ) : (
          <button
            className="bg-red-600 text-white rounded-full px-4 py-1"
            onClick={() => {
              const task = {
                id,
                isCompleted: !isCompleted,
              };

              updateTask(task);
            }}
          >
            Incomplete
          </button>
        )}
        <button className="ml-auto">{edit}</button>
        <button
          className="text-red-600"
          onClick={() => {
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
