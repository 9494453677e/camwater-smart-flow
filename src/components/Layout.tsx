
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 transition-all duration-300">
      <div className="flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6 animate-fade-in">
            <div className="max-w-full overflow-hidden">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
