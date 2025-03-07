import Image from "next/image"
import { Crown, LayoutTemplate, MonitorSmartphone } from "lucide-react"; // Import ikon


interface IListComponent {
    content: { id: number; src: string | any, tag: string[] | string, github:string, title:string }[];
}

export const ListComponent = ({ content }: IListComponent) => {
    return (
        <div className="w-full mt-10">
            {content.map((value) => {
                const tags = Array.isArray(value.tag) ? value.tag : [value.tag];
                
                const isPremium = tags.includes("Premium");
                const isTemplate = tags.includes("Template");
                const isApplication = tags.includes("Application");

                return (
                    <div
                        key={value.id}
                        className="animate-fadefast mx-4 sm:mx-auto flex items-center gap-2 
                        py-4 border-b border-b-[#373F62] hover:bg-[#ffffff05]"
                    >
                        <div className="flex-1 flex items-center gap-3">
                            
                            <a target="_blank" href={value.github}>
                                <Image
                                    alt=""
                                    loading="lazy"
                                    width="480"
                                    height="360"
                                    data-nimg="1"
                                    className="w-24"
                                    src={value?.src}
                                />
                            </a>

                            
                            <a target="_blank" href={value.github} className="flex flex-col">
                                <p className="text-white text-sm sm:text-base flex items-center gap-2">
                                    {value?.title}

                                    
                                    {isPremium && (
                                        <span className="bg-yellow-500 text-white text-[10px] px-2 py-1 flex items-center gap-1 rounded-md">
                                            <Crown size={12} className="text-white" /> PREMIUM
                                        </span>
                                    )}
                                    {isTemplate && (
                                        <span className="bg-blue-500 text-white text-[10px] px-2 py-1 flex items-center gap-1 rounded-md">
                                            <LayoutTemplate size={12} className="text-white" /> TEMPLATE
                                        </span>
                                    )}
                                    {isApplication && (
                                        <span className="bg-green-500 text-white text-[10px] px-2 py-1 flex items-center gap-1 rounded-md">
                                            <MonitorSmartphone size={12} className="text-white" /> APPLICATION
                                        </span>
                                    )}
                                </p>
                            </a>
                        </div>

                        
                        <a
                            target="_blank"
                            className="px-4 sm:px-5 lg:px-6 py-2.5 border border-[#373F62] rounded-full text-xs 
                            transition-all duration-300 group hover:bg-gradient-to-r from-[#26FFE340] 
                            active:bg-[#26FFE3] text-white"
                            href={value?.github}
                        >
                            Get Code
                        </a>
                    </div>
                );
            })}
        </div>
    );
};