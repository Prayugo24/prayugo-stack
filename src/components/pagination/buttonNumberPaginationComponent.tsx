import React from "react";

interface IPaginationButton {
  page: number;
  isCurrent: boolean;
  onClick: () => void;
}

export const ButtonNumberPaginationComponent = ({ page, isCurrent, onClick }: IPaginationButton) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full ${
        isCurrent
          ? "bg-gradient-to-r from-blue-500 to-teal-500 text-black font-bold"
          : "bg-gray-800 text-white hover:bg-gradient-to-r from-blue-500 to-teal-500"
      }`}
    >
      {page}
    </button>
  );
};