"use client";
import React, { useState, useEffect } from "react";
import { useGlobalState } from "app/context/globalContextProvider";
import SearchBar from "../Searchbar/Searchbar";
import NewTaskForm from "../Modals/NewTaskForm";
import TaskItem from "../TaskItem/TaskItem";
import Modal from "../Modals/Modal";
import { add, plus } from "app/utils/icons";
import PrioritySorting from "../PrioritySorting/PrioritySorting";

function Tasks({ title, tasks }) {
  const { theme, isLoading, openModal, modal, searchQuery, filterTasks } =
    useGlobalState();

  const [taskList, setTaskList] = useState(tasks);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  const filteredTasks = filterTasks(taskList, searchQuery);

  const handlePrioritySort = (order) => {
    const sortedTasks = [...filteredTasks].sort((a, b) => {
      const firstTask = a.priority;
      const secondTask = b.priority;

      if (order === "asc") {
        return firstTask - secondTask;
      } else {
        return secondTask - firstTask;
      }
    });

    setTaskList(sortedTasks); // Update the taskList state with the sorted tasks
  };

  return (
    <main
      theme={theme}
      className="w-full h-full p-8 overflow-y-auto rounded-xl border-2"
      style={{
        backgroundColor: theme.colorBg2,
        borderColor: theme.borderColor2,
        scrollbarWidth: "thin",
      }}
    >
      {modal && <Modal content={<NewTaskForm />} />}
      <SearchBar />
      <PrioritySorting onSort={handlePrioritySort} />
      <button
        className="fixed flex items-center justify-center w-12 h-12 rounded-full shadow-lg md:top-12 md:right-14"
        style={{
          top: "3rem",
          right: "3.5rem",
          backgroundColor: theme.colorBg,
          borderColor: theme.borderColor2,
          color: theme.colorGrey2,
          fontSize: "1.4rem",
          boxShadow: "0 3px 15px rgba(0, 0, 0, 0.3)",
          border: "2px solid",
        }}
        onClick={openModal}
      >
        {plus}
      </button>

      <h1>{title}</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task._id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.completed}
            priority={task.priority}
            id={task._id}
          />
        ))}
        <button
          className="flex items-center justify-center gap-2.5 h-64 font-semibold cursor-pointer rounded-xl border-2 border-dashed border-${theme.colorGrey5} transition-all duration-300 hover:bg-gray-500"
          style={{
            color: theme.colorGrey2,
            borderColor: theme.colorGrey5,
          }}
          onClick={openModal}
        >
          {add}
          Add New Task
        </button>
      </div>
      {/* <NewTaskForm /> */}
    </main>
  );
}

export default Tasks;
