
import { MenuItems } from "@/mocks/sidebarData";
import Image from "next/image"
type SidebarProps = {
    setActiveMenu: (menu: string) => void;
    activeMenu: string;
    isSidebarOpen: boolean;

};

export const SidebarComponent: React.FC<SidebarProps> = ({  activeMenu, setActiveMenu, isSidebarOpen }) => {
    
    const menuItems = MenuItems
    return (
        <nav
            className={`bg-slate-900 text-white w-60 h-full border-r border-gray-500 fixed 
                right-0 md:relative transform transition-transform duration-300 ease-in-out ${
                isSidebarOpen ? "translate-x-0 border-l" : "translate-x-full"
            } md:translate-x-0 z-100`}
            >
            <ul className="space-y-0 py-8">
                {menuItems.map((item) => (
                <li key={item.id}>
                    <button className="w-full" onClick={() => setActiveMenu(item.id)}>
                        <div
                            className={`flex items-center transition-colors duration-200 ${
                            activeMenu === item.id
                                ? "group bg-gradient-to-r from-[#26FFE340] active:bg-[#26FFE3]"
                                : "group hover:bg-gradient-to-r from-[#26FFE340] active:bg-[#26FFE3]"
                            }`}>
                                <div className={`bg-[#26FFE3] rounded-r menu min-w-1 min-h-16 mr-5 opacity-0 ${
                                    activeMenu === item.id
                                    ? "opacity-100 transition-opacity duration-300"
                                    : "group-hover:opacity-100 transition-opacity duration-300"
                                }`}>

                                </div>
                                <div className="flex items-center gap-2 text-sm mr-16">
                                    <Image alt="" loading="lazy" width="18" height="25" decoding="async" data-nimg="1" src={item.icon} />
                                    <p className="">{item.label}</p>
                                </div>
                        </div>
                    </button>
                </li>
                ))}
        
                <li key={"download-cv"} className="lg:hidden !mt-6 flex justify-center">
                    <button
                        className="bg-gradient-animated bg-[length:500%_500%] 
                        animate-gradient text-white text-[10px] px-3 py-2 
                        rounded-full transition-all hover:scale-105"
                    >
                        DOWNLOAD MY CV RESUME
                    </button>
                </li>
            </ul>
        </nav>
    )
}
