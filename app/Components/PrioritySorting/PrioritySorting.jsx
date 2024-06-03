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
    <button onClick={handleClick}>
      <span>Priority</span>
      {sortOrder === "asc" ? sortingUp : sortingDown}
    </button>
  );
}

export default PrioritySorting;
