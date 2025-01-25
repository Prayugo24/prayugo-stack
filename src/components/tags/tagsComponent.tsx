interface ITagsComponent {
    isNeedPaddingLeft:boolean
    tagProjects: ITag[]
    activeFilter: string
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setAcveFilter: React.Dispatch<React.SetStateAction<string>>;
    
}
interface ITag {
    id: number,
    tag: string
}

export const TagsComponent= ({isNeedPaddingLeft,tagProjects,activeFilter , setCurrentPage, setAcveFilter}:ITagsComponent) =>{
    return (
        <div className={`flex flex-wrap text-white gap-4 ma-auto mt-0 ${isNeedPaddingLeft? "lg:px-[4%]": ""}`}>
            {tagProjects.map((value) => (
                <button key={value.id} onClick={() => {
                    setAcveFilter(value.tag);
                    setCurrentPage(1);
                }}
                    className={`flex items-center gap-2 md:gap-3 rounded-full cursor-pointer border border-[#373F62] px-6 h-9 font-medium hover:bg-gradient-to-r from-[#42b0cc] 
                    ${activeFilter == value.tag ? "bg-gradient-to-r from-[#42b0cc]" : "bg-[#181E33]"}`}>
                    <p className="text-sm flex items-center gap-1">{value.tag}</p>
                </button>
            ))}

        </div>
    )
}