import { useMemo } from "react";

export const usePagination = (
  currentPage: number,
  totalPages: number,
  maxVisible: number =3 ,
  
) => {
  const renderPageNumbers = useMemo(() => {
    const pages: number[] = [];
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage < maxVisible) {
        for (let i = 1; i <= maxVisible; i++) {
          pages.push(i);
        }
      } else if (currentPage > totalPages - maxVisible) {
        for (let i = totalPages - maxVisible + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        for (let i = currentPage - Math.floor(maxVisible / 2); i <= currentPage + Math.floor(maxVisible / 2); i++) {
          pages.push(i);
        }
      }
    }
    return pages;
  }, [currentPage, totalPages, maxVisible]);

  const handlePageChange = (page: number, setCurrentPage: (page: number) => void) => {
    if (page > 0 && page <= totalPages) {
     console.log(page)
      setCurrentPage(page);
    }
  };

  return { renderPageNumbers, handlePageChange };
};
