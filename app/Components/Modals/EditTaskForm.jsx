import React, { useEffect, useState } from "react";
import { useGlobalState } from "app/context/globalContextProvider";
import { add } from "app/utils/icons";
import { updateTaskById } from "services/api";

function EditTaskForm({ task }) {
  const { theme, allTasks, closeModal } = useGlobalState();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    completed: false,
    priority: 1,
  });

  const convertToYYYYMMDD = (dateDDMMYYYY) => {
    const parts = dateDDMMYYYY.split("-");

    return parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : "";
  };

  const dateYYYYMMDD = convertToYYYYMMDD(task.date);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || "",
        description: task.description || "",
        date: dateYYYYMMDD || "",
        completed: task.completed || false,
        priority: task.priority || 1,
      });
    }
  }, [task, dateYYYYMMDD]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Створюємо новий об'єкт без поля _id
      const { _id, ...taskData } = formData;
      const updatedTask = { ...taskData };
      console.log("task._id", task._id);
      await updateTaskById(task._id, updatedTask);
      allTasks(); //
      closeModal(); // Закриваємо модальне вікно
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const { title, description, date, completed, priority } = formData;

  return (
    <form theme={theme} onSubmit={handleSubmit}>
      <h1 className="text-xl font-semibold mb-4">Edit task</h1>
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
          name="title"
          value={title}
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
            checked={completed}
            onChange={handleChange}
            type="checkbox"
            name="completed"
            id="completed"
            className="mr-2"
          />
          Toggle Completed
        </label>
      </div>

      <div className="flex flex-col mb-6 space-y-2 p-2 w-60">
        <label htmlFor="priority" className="flex items-center cursor-pointer">
          Priority
        </label>
        <input
          type="range"
          className="w-full"
          onChange={handleChange}
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
          className="px-4 py-2 font-medium text-white bg-green-600 rounded hover:bg-blue-600 fw-500 fs-1.2rem "
        >
          {add}
          <span>Update Task</span>
        </button>
      </div>
    </form>
  );
}

export default EditTaskForm;
