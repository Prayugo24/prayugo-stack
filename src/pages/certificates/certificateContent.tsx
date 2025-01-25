import React, { useEffect, useState } from "react";

import { PaginationComponent } from "@/components/pagination/paginationComponent";
import { SearchComponent } from "@/components/search/searchComponent";
import { CardComponent } from "@/components/card/cardComponent";
import { certificateSample } from "@/mocks/certificateContent";

const CertificationsContent: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  const [activeFilter] = useState<string>("ALL");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>(""); 
  useEffect(() =>{
      setTimeout(() => {
          setVisible(true)
      },250)
  },[] )
  const itemsPerPage = 9;
  const certificate = certificateSample
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
      setCurrentPage(1); 
  };
  const filteredProjects = certificate.filter((article) => {
    const matchesFilter = activeFilter !== "ALL" ? article.tag === activeFilter : true;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div
        className={`animate-fadefast flex-1 mt-14 mx-[6%] sm:mx-[6vw] mb-20 transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
        }`}>
        <SearchComponent
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}/>
        
        <CardComponent 
                        contentProject={paginatedProjects}/>
        <PaginationComponent contentProject={filteredProjects} itemsPerpage={itemsPerPage} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
      
    </div>
  )
}

export default CertificationsContent;