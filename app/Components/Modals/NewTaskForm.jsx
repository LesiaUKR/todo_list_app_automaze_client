"use client";

import { useGlobalState } from "app/context/globalContextProvider";
import { useState } from "react";
import { add } from "app/utils/icons";
import axios from "axios";

function NewTaskForm() {
  const { theme } = useGlobalState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);
  const [priority, setValuePriority] = useState(1);

  // console.log(title);
  // console.log(description);
  // console.log(date);
  // console.log(completed);
  // console.log(important);
  // console.log(priority);

  const handleChange = (name) => (e) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "important":
        setImportant(e.target.checked);
        break;
      case "priority":
        setValuePriority(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = {
      title,
      description,
      date,
      completed,
      important,
      priority,
    };
    try {
      const res = await axios.post("/api/tasks", task);
      if (res.status === 200) {
        toast.success("Task created successfully");
      }
    } catch (error) {
      toast.error("An error occurred while creating the task");
      console.log(error);
    }
  };

  return (
    <form theme={theme} onSubmit={handleSubmit}>
      <h1 className="text-xl font-semibold mb-4">Create a Task</h1>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-1 font-medium"
          style={{ color: theme.colorGrey3 }}
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          onChange={handleChange("title")}
          placeholder="e.g, Watch a video from Fireship."
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          style={{ backgroundColor: theme.colorGrey3 }}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-1 font-medium"
          style={{ color: theme.colorGrey3 }}
        >
          Description
        </label>
        <textarea
          value={description}
          onChange={handleChange("description")}
          name="description"
          id="description"
          rows={4}
          placeholder="e.g, Watch a video about Next.js Auth"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          style={{ backgroundColor: theme.colorGrey3 }}
        ></textarea>
      </div>
      <div className="mb-6">
        <label
          htmlFor="date"
          className="block mb-1 font-medium"
          style={{ color: theme.colorGrey3 }}
        >
          Date
        </label>
        <input
          value={date}
          onChange={handleChange("date")}
          type="date"
          name="date"
          id="date"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          style={{ backgroundColor: theme.colorGrey3 }}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="completed" className="flex items-center cursor-pointer">
          <input
            value={completed.toString()}
            onChange={handleChange("completed")}
            type="checkbox"
            name="completed"
            id="completed"
            className="mr-2"
          />
          Toggle Completed
        </label>
      </div>
      <div className="mb-6">
        <label htmlFor="important" className="flex items-center cursor-pointer">
          <input
            value={important.toString()}
            onChange={handleChange("important")}
            type="checkbox"
            name="important"
            id="important"
            className="mr-2"
          />
          Toggle Important
        </label>
      </div>
      <div className="flex flex-col mb-6 space-y-2 p-2 w-60">
        <input
          type="range"
          className="w-full"
          onChange={handleChange("priority")}
          value={priority}
          min="1"
          max="10"
          step="1"
          name="priority"
        />
        <ul className="flex justify-between w-full px-[10px]">
          <li className="flex justify-center relative">
            <span className="absolute">1</span>
          </li>
          <li className="flex justify-center relative">
            <span className="absolute">2</span>
          </li>
          <li className="flex justify-center relative">
            <span className="absolute">3</span>
          </li>
          <li className="flex justify-center relative">
            <span className="absolute">4</span>
          </li>
          <li className="flex justify-center relative">
            <span className="absolute">5</span>
          </li>
          <li className="flex justify-center relative">
            <span className="absolute">6</span>
          </li>
          <li className="flex justify-center relative">
            <span className="absolute">7</span>
          </li>
          <li className="flex justify-center relative">
            <span className="absolute">8</span>
          </li>
          <li className="flex justify-center relative">
            <span className="absolute">9</span>
          </li>
          <li className="flex justify-center relative">
            <span className="absolute">10</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-end space-y-2 p-2 w-full">
        <button
          type="submit"
          name="Create Task"
          className="px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600 fw-500 fs-1.2rem "
        >
          {add}
        </button>
      </div>
    </form>
  );
}

export default NewTaskForm;
