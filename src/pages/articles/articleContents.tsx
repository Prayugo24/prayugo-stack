import React, { useEffect, useState } from "react";
import Image from "next/image"
import { TagsComponent } from "@/components/tags/tagsComponent";
import serachIcon from "../../assets/images/search_icon.svg"
import "../../styles/articleContents.css";
import { tagArticleSample, contentSample } from "@/mocks/articleContents";
import { CardArticleComponent } from "@/components/cardArticles/cardArticleComponent";
import { PaginationComponent } from "@/components/pagination/paginationComponent";
import { SearchComponent } from "@/components/search/searchComponent";

export const ArticleContents: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  const [activeFilter, setAcveFilter] = useState<string>("ALL");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>(""); 
  useEffect(() =>{
      setTimeout(() => {
          setVisible(true)
      },250)
  },[] )
  const itemsPerPage = 3;
  const tagArticleSamples = tagArticleSample
  const article = contentSample
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); 
  };

  // Filter artikel berdasarkan tag aktif dan kata kunci pencarian
  const filteredProjects = article.filter((article) => {
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
        <TagsComponent
            isNeedPaddingLeft={false}
            tagProjects={tagArticleSamples} 
            activeFilter={activeFilter} 
            setCurrentPage={setCurrentPage}
            setAcveFilter={setAcveFilter} />
        
        <CardArticleComponent contentArticle={paginatedProjects}/>
        <PaginationComponent contentProject={filteredProjects} itemsPerpage={itemsPerPage} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
      
    </div>
  )
    
}