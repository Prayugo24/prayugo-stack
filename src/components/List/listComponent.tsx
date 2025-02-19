import Image from "next/image"

interface IListComponent {
    content: { id: number; src: string | any, github:string, title:string }[];
}

export const ListComponent = ({content}:IListComponent) =>{
    return (
        <div className="w-full mt-10">
            {content.map((value) => (
                <div key={value.id} className="animate-fadefast mx-4 sm:mx-auto flex items-center gap-2 
                    py-4 border-b border-b-[#373F62] hover:bg-[#ffffff05] ">
                    <div className="flex-1 flex items-center gap-3">
                        <a target="_blank" href={value.github}>
                            <Image alt="" loading="lazy" width="480" height="360"
                            data-nimg="1" className="w-24" src={value?.src}/>
                        </a>
                        <a target="_blank" href={value.github}>
                            <p className="text-white text-sm sm:text-base">{value?.title}</p>
                        </a>
                    </div>
                    <a target="_blank" className="px-4 sm:px-5 lg:px-6 py-2.5 border 
                        border-[#373F62] rounded-full text-xs transition-all duration-300 
                        group hover:bg-gradient-to-r from-[#26FFE340] active:bg-[#26FFE3] text-white" 
                        href={value?.github}>Get Code</a>
                </div>
            ))}
        </div>
      
    )
}