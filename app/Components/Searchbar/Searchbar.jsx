"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useGlobalState } from "app/context/globalContextProvider";
import { search } from "app/utils/icons";

function SearchBar() {
  const { theme, setSearchQuery } = useGlobalState();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((query) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
    setSearchQuery(query); // Зберігаємо пошуковий запит у глобальному стані
  }, 300);

  return (
    <form className="px-4 w-full">
      <div className="relative">
        <input
          placeholder="Search task..."
          className="block w-full mb-6 p-4 py-3 ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          defaultValue={searchParams.get("search")?.toString()}
          onChange={(event) => handleSearch(event.target.value)}
        />
        <button
          type="button"
          className="absolute right-2.5 bottom-1/2 transform translate-y-1/2 p-2 text-sm font-medium text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          style={{ backgroundColor: theme.buttonColor }}
        >
          {search}
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
