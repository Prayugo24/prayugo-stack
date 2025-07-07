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
                <div key={value?.id} className="cursor-pointer animate-fadefast border border-[#373F62] rounded-lg overflow-hidden transition-all hover:scale-[1.02] h-[400px] flex flex-col bg-gray-900">
                    <Link key={value?.id} href={value?.linkUrl} passHref target="_blank" className="flex flex-col h-full">
                        <div className="h-48 overflow-hidden">
                            <Image alt="" loading="lazy" width="1280" 
                            height="720" decoding="async" data-nimg="1" 
                            className="w-full h-full object-cover" src={value?.src}/>
                        </div>
                        <div className="px-4 py-4 text-white flex-1 flex flex-col justify-between">
                            <div className="flex-1">
                                <h3 className="font-semibold text-sm line-clamp-2 mb-2 min-h-[2.5rem]">{value?.title}</h3>
                                <p className="text-[#D9EBFF] text-xs leading-5 line-clamp-3 mb-4 min-h-[3.6rem]">
                                    {value?.desc}
                                </p>
                            </div>
                            <div className="flex items-center justify-between text-xs mt-auto">
                                <span className="px-3 py-1.5 bg-blue-600/20 border border-blue-500/40 text-blue-300 rounded-full text-xs font-medium whitespace-nowrap">
                                    {value?.tag}
                                </span>
                                <div className="flex items-center gap-2 px-3 py-1.5 border border-[#373F62] rounded-full transition-all hover:scale-105 bg-gray-800/50 text-white">
                                    <p className="text-xs">Read now</p>
                                    <Image alt="" loading="lazy" width="16" height="16" decoding="async" 
                                    data-nimg="1" className="w-4 h-4" src={value?.icon}/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div> 
            ))}
        </div>
    )
}