
import { CardComponent } from "@/components/card/cardComponent";
import { PaginationComponent } from "@/components/pagination/paginationComponent";
import { TagsComponent } from "@/components/tags/tagsComponent";
import { projectsSample,tagProjectsSample } from "@/mocks/projectsContent";
import Image from "next/image"
import React, { useEffect, useState } from "react";

export const ProjectsContent: React.FC = () => {
    const [isVisible, setVisible] = useState(false);
    const [activeFilter, setAcveFilter] = useState<string>("ALL");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 3;
    useEffect(() =>{
        setTimeout(() => {
            setVisible(true)
        },250)
    },[] )


    const projects = projectsSample
    const tagProjects = tagProjectsSample

    const filterProject = projects.filter((project) => {
        if(activeFilter !="ALL") {
            return project.tag == activeFilter
        } else {
            return project
        }
    })

    // logik pagination
    const totalPages = Math.ceil(filterProject.length / itemsPerPage)
    const paginatedProjects = filterProject.slice(
        (currentPage-1) * itemsPerPage, currentPage * itemsPerPage
    )

    
    return (
        <div
            className={`flex-1 px-6 mb-20 transition-opacity duration-500 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
            }`}>
            
            <TagsComponent 
                isNeedPaddingLeft={true}
                tagProjects={tagProjects} 
                activeFilter={activeFilter} 
                setCurrentPage={setCurrentPage}
                setAcveFilter={setAcveFilter} />
                
            <CardComponent 
                contentProject={paginatedProjects}/>


           <PaginationComponent contentProject={filterProject} itemsPerpage={itemsPerPage} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage}/>
        </div>   
    ) 

}
