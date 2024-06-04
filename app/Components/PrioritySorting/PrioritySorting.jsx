import React, { useState } from "react";
import { sortingUp, sortingDown } from "app/utils/icons";

function PrioritySorting({ onSort }) {
  const [sortOrder, setSortOrder] = useState("asc");

  const handleClick = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    onSort(newOrder);
  };

  return (
    <div className="flex justify-end mb-6 pr-4">
      <button className="flex items-center gap-2" onClick={handleClick}>
        <span>Priority</span>
        {sortOrder === "asc" ? sortingUp : sortingDown}
      </button>
    </div>
  );
}

export default PrioritySorting;
