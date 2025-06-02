
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Settings, 
  FileText, 
  Map, 
  Bell, 
  ChartBar,
  Database
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Sensors", href: "/sensors", icon: Database },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Network Map", href: "/map", icon: Map },
  { name: "Alerts", href: "/alerts", icon: Bell },
  { name: "Analytics", href: "/analytics", icon: ChartBar },
  { name: "Notifications", href: "/notifications", icon: Bell },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-lg border-r border-slate-200">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
            <Database className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-800">AquaFlow</h1>
            <p className="text-xs text-slate-500">Water Management</p>
          </div>
        </div>
      </div>
      
      <nav className="px-4 pb-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50",
                    isActive
                      ? "bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 border-r-2 border-blue-500"
                      : "text-slate-600 hover:text-blue-600"
                  )
                }
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
