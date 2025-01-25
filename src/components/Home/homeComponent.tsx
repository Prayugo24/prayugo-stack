"use client";  // Tandai ini sebagai client component

import React, { useEffect, useState } from "react";
import { CertificationsContent } from "@/pages/certificates/certificateContent";
import { SourceCode } from "@/pages/sourceCode/sourceCode";
import { ProjectsContent } from "@/pages/projects/projectsContent";
import { HeaderComponent } from "@/components/headers/headerComponent";
import { SidebarComponent } from "@/components/sidebars/sideBarComponent";
import { ArticleContents } from "@/pages/articles/articleContents";
import { useRouter, useSearchParams } from "next/navigation";


export default function HomeComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeMenu, setActiveMenu] = useState<string>("articles");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 


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

  const handleMenuChange = (menu: string) => {
    setActiveMenu(menu);
    router.push(`/?activeMenu=${menu}`);
    setIsSidebarOpen(false); // Tutup sidebar setelah memilih menu (untuk mobile)

  };

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Header dan Sidebar tetap bisa berada di server-side */}
      <HeaderComponent isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex flex-1 flex-col md:flex-row">
      <SidebarComponent 
        setActiveMenu={handleMenuChange} 
        activeMenu={activeMenu as string} 
        isSidebarOpen={isSidebarOpen}
        />
      <main className="flex-1 bg-slate-900 p-6 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
}
