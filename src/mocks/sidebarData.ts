import  { StaticImageData } from "next/image"
import logoProjects from "../assets/images/projects.png"
import logoBooks from "../assets/images/book.png"
import logoCertified from "../assets/images/certified.png"
import sourceCode from "../assets/images/sourceCode.svg"

interface MenuItem {
    id: string;
    label: string;
    icon: StaticImageData;
}

export const MenuItems: MenuItem[] = [
    { id: "articles", label: "Articles", icon: logoBooks },
    { id: "projects", label: "Projects", icon: logoProjects },
    { id: "sourcecode", label: "Source Code", icon: sourceCode },
    { id: "certificate", label: "Certificat Course", icon: logoCertified },
];