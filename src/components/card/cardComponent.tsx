import Image from "next/image"
import { Crown, LayoutTemplate, MonitorSmartphone } from "lucide-react"; // Import ikon

interface ICardComponent {
    contentProject: { id: number; tag: string[] | string ; src: string | any, url:string }[];
}

export const CardComponent = ({ contentProject }: ICardComponent) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 lg:px-[4%]">
            {contentProject.map((value) => {
                const tags = Array.isArray(value.tag) ? value.tag : [value.tag];

                const isPremium = tags.includes("Premium");
                const isTemplate = tags.includes("Template");
                const isApplication = tags.includes("Application");
                return (
                    <a key={value.id} href={value.url} className="relative m-auto" target="_blank">
                         <div className="absolute top-2 right-2 flex flex-col gap-1">
                            {isPremium && (
                                <div className="bg-red-700 text-white text-xs font-bold px-3 py-1 flex items-center gap-1 rounded-md shadow-md">
                                    <Crown size={14} className="text-white" />
                                    PREMIUM
                                </div>    
                            )}
                            
                            {isTemplate && (
                                <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 flex items-center gap-1 rounded-md shadow-md">
                                    <LayoutTemplate size={14} className="text-white" />
                                    TEMPLATE
                                </div>
                            )}
                                
                            {isApplication && (
                                <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 flex items-center gap-1 rounded-md shadow-md">
                                    <MonitorSmartphone size={14} className="text-white" />
                                    APPLICATION
                                </div>    
                            )}
                            
                        </div>
                        <Image
                            alt={Array.isArray(value.tag) ? value.tag[0] : value.tag}
                            loading="lazy"
                            width="1280"
                            height="720"
                            decoding="async"
                            data-nimg="1"
                            className="rounded-xl"
                            src={value.src}
                        />
                    </a>
                );
            })}
        </div>
    );
};