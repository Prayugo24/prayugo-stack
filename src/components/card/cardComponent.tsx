import Image from "next/image"

interface ICardComponent {
    contentProject: { id: number; tag: string[] | string ; src: string | any, url:string }[];
}

export const CardComponent= ({contentProject}:ICardComponent) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 lg:px-[4%]">
            {contentProject.map((value) =>(
                <a key={value.id} href={value.url} className="m-auto" target="_blank">
                <Image alt={value.tag[0]} loading="lazy" width="1280" height="720" decoding="async" data-nimg="1" 
                    className="rounded-xl" src={value.src} />            
                </a>
            ))}
        </div>
    )
}