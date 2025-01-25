import React from "react";
import serachIcon from "../../assets/images/search_icon.svg"
import Image from "next/image"


export interface ISearchComponent {
    searchTerm: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export const SearchComponent: React.FC<ISearchComponent> = ({
    searchTerm,
    onSearchChange,
  }) =>{
    return (
        <div className="w-full pb-10">
          <form className="w-full flex border border-[#586187] rounded-full px-6 py-2.5
               mx-4 sm:mx-auto mt-10">
              <input 
                className="flex-1 bg-transparent outline-none border-none text-white" 
                placeholder="Search project by name" 
                type="text"
                value={searchTerm}
                onChange={onSearchChange}/>
              <Image alt="" loading="lazy" width="22" height="22" decoding="async" data-nimg="1" 
                className="w-5 cursor-pointer" src={serachIcon}/>
          </form>
        </div>
    )    
}