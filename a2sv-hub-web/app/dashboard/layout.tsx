import { ReactNode } from "react";
import Sidebar from "../components/layouts/SideBar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen">
      <div className="w-[20%] h-full">
        <Sidebar />
      </div>
      <div className="w-[80%] flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
