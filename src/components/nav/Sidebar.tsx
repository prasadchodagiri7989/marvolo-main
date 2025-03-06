import { cn } from "@/lib/utils";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  BarChart3, 
  Share2, 
  FileText, 
  Sparkles, 
  Settings,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Users,
  Search,
  Mail,
  LineChart,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const navigationItems = [
    { name: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
    { name: "Social Media", path: "/social-media", icon: <Share2 size={20} /> },
    { name: "Analytics", path: "/analytics", icon: <BarChart3 size={20} /> },
    { name: "Campaigns", path: "/campaigns", icon: <LineChart size={20} /> },
    { name: "Content Hub", path: "/content-hub", icon: <FileText size={20} /> },
    { name: "AI Assistant", path: "/ai-assistant", icon: <Sparkles size={20} /> },
    { name: "Email Marketing", path: "/email", icon: <Mail size={20} /> },
    { name: "Chatbots", path: "/chatbots", icon: <MessageSquare size={20} /> },
    { name: "Leads", path: "/leads", icon: <Users size={20} /> },
    { name: "SEO", path: "/seo", icon: <Search size={20} /> },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-20 h-full bg-sidebar transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex h-full flex-col border-r border-sidebar-border">
        <div className={cn(
          "flex h-16 items-center px-4 border-b border-sidebar-border",
          collapsed ? "justify-center" : "justify-between"
        )}>
          {!collapsed && (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <Sparkles size={18} />
              </div>
              <span className="font-semibold">Cificap AI</span>
            </div>
          )}
          {collapsed && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              <Sparkles size={18} />
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="rounded-full p-1.5 text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        <nav className="flex-1 overflow-auto py-4">
          <ul className="space-y-1 px-2">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                      collapsed && "justify-center px-2"
                    )
                  }
                >
                  <span className="flex items-center justify-center">
                    {item.icon}
                  </span>
                  {!collapsed && <span className="ml-3">{item.name}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto border-t border-sidebar-border px-4 py-4">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              cn(
                "flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                collapsed && "justify-center px-2"
              )
            }
          >
            <span className="flex items-center justify-center">
              <Settings size={20} />
            </span>
            {!collapsed && <span className="ml-3">Settings</span>}
          </NavLink>
        </div>
      </div>
    </aside>
  );
}
