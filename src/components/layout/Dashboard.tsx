
import React, { ReactNode, useState } from "react";
import Sidebar from "../nav/Sidebar";
import TopBar from "../nav/TopBar";
import { cn } from "@/lib/utils";

interface DashboardProps {
  children: ReactNode;
}

export default function Dashboard({ children }: DashboardProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-marketing-gray-50 dark:bg-gray-900 flex">
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      <div className={cn(
        "flex-1 transition-all duration-300 ease-in-out",
        sidebarCollapsed ? "ml-20" : "ml-64"
      )}>
        <TopBar />
        <main className="p-6 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
}
