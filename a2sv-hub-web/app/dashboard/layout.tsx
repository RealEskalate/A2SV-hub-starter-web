import { ReactNode } from "react";
import NavBar from "../components/layouts/NavBar";
import Sidebar from "../components/layouts/SideBar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="flex w-[20%]">
        <Sidebar />
      </div>
      {/* Main content area */}
      <div className="flex flex-col w-[80%] overflow-y-auto">
        <NavBar />
        <main className="flex-1 p-6">
            {children}
            </main>
      </div>
    </div>
  );
}
