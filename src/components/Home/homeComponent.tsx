"use client";  // Tandai ini sebagai client component

import React, { Suspense, useEffect, useState } from "react";
import  CertificationsContent  from "@/pages/certificates/certificateContent";
import SourceCode  from "@/pages/sourceCode/sourceCode";
import ProjectsContent from "@/pages/projects/projectsContent";
import { HeaderComponent } from "@/components/headers/headerComponent";
import { SidebarComponent } from "@/components/sidebars/sideBarComponent";
import ArticleContents from "@/pages/articles/articleContents";
import { useRouter, useSearchParams } from "next/navigation";
import myCv from "../../assets/cv/CV_Prayugo_Dwi_Setiyoko.pdf";

export interface IHomeContent {
  activeMenu: string;
  setActiveMenu:(menu: string) => void
}

function HomeContent({ activeMenu, setActiveMenu }: IHomeContent) {  

  const searchParams = useSearchParams();
  

  useEffect(() => {
    if (searchParams) {
      const activeMenuParam = searchParams.get("activeMenu");
      if (activeMenuParam) {
        setActiveMenu(activeMenuParam);
      }
    }
  }, [searchParams]);

  const renderContent = (): JSX.Element => {
    switch (activeMenu) {
      case "projects":
        return <ProjectsContent />;
      case "articles":
        return <ArticleContents />;
      case "sourcecode":
        return <SourceCode />;
      case "certificate":
        return <CertificationsContent />;
      default:
        return <p className="text-white">No content selected.</p>;
    }
  };

  return <>{renderContent()}</>;
}

export default function HomeComponent() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<string>("articles");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const handleMenuChange = (menu: string) => {
    setActiveMenu(menu);
    router.push(`/?activeMenu=${menu}`);
    setIsSidebarOpen(false); 

  };
  const handleDownloadCV = async () => {
    window.open('/api/download', '_blank');
};

  return (
    
    <div className="h-screen w-full flex flex-col">
      
      <HeaderComponent 
        isSidebarOpen={isSidebarOpen} 
        setIsSidebarOpen={setIsSidebarOpen} 
        downloadMyCv={handleDownloadCV}/>
      <div className="flex flex-1 flex-col md:flex-row">
      <SidebarComponent 
        setActiveMenu={handleMenuChange} 
        activeMenu={activeMenu as string} 
        isSidebarOpen={isSidebarOpen}
        downloadMyCv={handleDownloadCV}
        />

      <main className="flex-1 bg-slate-900 p-6 overflow-y-auto">
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <HomeContent 
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}/>
          </Suspense>
        </main>
      </div>
    </div>
  );
}
