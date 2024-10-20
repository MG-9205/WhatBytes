"use client";

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen max-h-fit flex flex-col">
      
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

   
      <div className="flex-1 grid grid-cols-1 md:grid-cols-[250px_1fr] min-h-screen">
        
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        
        <main className="p-2 overflow-hidden min-h-[100vh]">
          {children}
        </main>
      </div>
    </div>
  );
}
