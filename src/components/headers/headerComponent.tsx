import Image from "next/image"
import logoFlame from "../../assets/images/flame.gif"
import logoProjects from "../../assets/images/logo.png"
type HeaderProps = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen : boolean) => void;
};

export const HeaderComponent = (
    {isSidebarOpen, setIsSidebarOpen} : HeaderProps
) => {
    return (
        <header
            className="py-4 px-6 flex justify-between bg-slate-900 text-white p-4 border-b border-gray-500 shadow-black shadow-lg">
            {/* Logo */}
            <a href="">
                <Image
                    alt=""
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    className="rounded-xl w-[220px] h-auto"
                    src={logoProjects}/>
            </a>

            {/* Link dan Tombol Download CV (Hanya muncul di desktop) */}
            <a
                target="_blank"
                className="max-md:hidden flex gap-3 text-sm items-center mr-14 group"
                href="https://greatstack.dev/go/javascript-course">
                <Image
                    alt=""
                    loading="lazy"
                    width="25"
                    height="25"
                    decoding="async"
                    data-nimg="1"
                    className="mr-[-5px]"
                    src={logoFlame}/>
                <p className="animate-pulse text-base">Let's Start To Develop Something Exciting</p>
                <button
                    className="bg-gradient-animated bg-[length:500%_500%] animate-gradient text-white text-[15px] px-7 py-2 rounded-full transition-all group-hover:scale-105">
                    DOWNLOAD MY CV RESUME
                </button>
            </a>

            {/* Tombol Hamburger (Hanya muncul di mobile) */}
            <button
                className="md:hidden p-2 focus:outline-none"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
            </button>
        </header>
    )
}