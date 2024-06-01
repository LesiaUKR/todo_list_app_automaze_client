"use client";
import { useGlobalState } from "app/context/globalContextProvider";
import { search } from "app/utils/icons";

function SearchBar() {
  const { theme } = useGlobalState();
  return (
    <form className="px-4 w-full">
      <div className="relative">
        <input
          placeholder="Search task..."
          className="block w-full mb-6 p-4 py-3 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="search"
        />
        <button className="absolute end-2.5 bottom-1/2 translate-y-1/2 p-4 text-sm font-medium text-white rounded-lg  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {search}
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
