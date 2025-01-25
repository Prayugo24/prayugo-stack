import Image from "next/image"
import Link from "next/link"; 

interface ICardArticleComponent {
    contentArticle: { 
        id: number; 
        tag: string; 
        src: string | any, 
        desc:string, 
        title:string , 
        icon:string | any,
        linkUrl:string
    }[];
}
export const CardArticleComponent = ({contentArticle}:ICardArticleComponent) =>{
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10 m-auto px-10 sm:px-0">
            {contentArticle.map((value) => (
                <div key={value?.id} className="cursor-pointer animate-fadefast border border-[#373F62 rounded-lg overflow-hidden transition-all hover:scale-[1.02]">
                    <Link key={value?.id} href={value?.linkUrl} passHref target="_blank">
                        <Image alt="" loading="lazy" width="1280" 
                        height="720" decoding="async" data-nimg="1" 
                        className="w-full" src={value?.src}/>
                        <div className="px-3 py-4 text-white">
                        <p className="">{value?.title}</p>
                        <p className="text-[#D9EBFF] text-xs my-2 w-[90%] leading-5">
                            {value?.desc}
                        </p>
                        <div className="flex items-center justify-between text-xs pt-2">
                            <button className="px-3 py-1.5 bg-[#262B42] border border-[#373F62] rounded-full">
                            {value?.tag}</button>
                            <div  className="flex items-center gap-2 px-3 py-1.5 border 
                            border-[#373F62] rounded-full transition-all hover:scale-105" >
                                <p>Read now</p>
                                <Image alt="" loading="lazy" width="23" height="16" decoding="async" 
                                data-nimg="1" className="w-5" src={value?.icon}/>
                            </div>
                        </div>
                        </div>
                    </Link>
                </div> 
            ))}
        </div>
    )
}