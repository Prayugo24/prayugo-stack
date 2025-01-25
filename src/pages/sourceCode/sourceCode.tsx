import React, { useEffect, useState } from "react";
import Image from "next/image"
import serachIcon from "../../assets/images/search_icon.svg"
import { sourceCoudeContent } from "@/mocks/sourceCodeContent";
import { PaginationComponent } from "@/components/pagination/paginationComponent";
import { ListComponent } from "@/components/List/listComponent";
import { SearchComponent } from "@/components/search/searchComponent";

export const SourceCode: React.FC = () => {
    const [isVisible, setVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>(""); 
    useEffect(() =>{
          setTimeout(() => {
              setVisible(true)
          },250)
    },[] )

    const itemsPerPage = 10;
    const sourceList = sourceCoudeContent
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); 
    };
  
    // Filter artikel berdasarkan tag aktif dan kata kunci pencarian
    const filteredProjects = sourceList.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
      return  matchesSearch;
    });
  
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const paginatedProjects = filteredProjects.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    
    return(
      <div
        className={`animate-fadefast flex-1 mt-14 mx-[6%] sm:mx-[6vw] mb-20 transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
        }`}>
        <SearchComponent
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}/>
         
        <ListComponent content={paginatedProjects}/>
        <PaginationComponent contentProject={paginatedProjects} itemsPerpage={itemsPerPage} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
      
    </div>
    )
}