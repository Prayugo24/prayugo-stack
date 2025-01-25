
import { usePagination } from "@/hooks/pagination/usePagination";
import React, { useEffect, useState } from "react";
import { ButtonNumberPaginationComponent } from "./buttonNumberPaginationComponent";
import { ButtonNextOrPrevComponent } from "./buttonNextOrPrevComponent";

interface IPagination {
    contentProject: { id: number; tag?: string; src: string | any, desc?:string , title?:string }[];
    itemsPerpage: number
    currentPage:number
    totalPages:number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface IContentProject {
    id: number;
    tag: string;
    src: string;
}[]


export const PaginationComponent = ({
    contentProject,
    itemsPerpage,
    currentPage,
    totalPages,
    setCurrentPage
}: IPagination) => {

    const { renderPageNumbers, handlePageChange } = usePagination(currentPage, totalPages);


    return(
        <div className="flex justify-end items-center gap-3 mt-8">
                <p className="text-white">
                    Page {currentPage} of {totalPages}
                </p>
                {/* Previous Button */}
                <ButtonNextOrPrevComponent 
                    allowButtonCondition={currentPage === 1} 
                    cursorCondition={currentPage === 1}
                    textButton="← Prev"
                    onClick={() => handlePageChange(currentPage - 1, setCurrentPage)}
                />
                

                {/* Numbered Buttons */}
                {renderPageNumbers.map((page, index) => (
                 <ButtonNumberPaginationComponent
                    key={page}
                    page={page}
                    isCurrent={page === currentPage}
                    onClick={() => handlePageChange(page, setCurrentPage)}
                />
       
                ))}

                {/* Next Button */}
                <ButtonNextOrPrevComponent 
                    allowButtonCondition={currentPage === totalPages} 
                    cursorCondition={currentPage === totalPages}
                    textButton=" Next →"
                    onClick={() => handlePageChange(currentPage + 1, setCurrentPage)}
                />
        </div>
    )

}