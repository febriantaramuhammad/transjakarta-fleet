import { useState } from "react";

export function usePagination(totalItems: number, pageSize = 5) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / pageSize);
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    start,
    end,
    offset: (currentPage - 1) * pageSize,
    pageSize,
  };
}
