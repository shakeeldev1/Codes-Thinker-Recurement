import React from "react";
import { Search, Bell, UserCircle } from "lucide-react";

const AdminNavbar = () => {
  return (
    <header className="fixed top-0 left-64 right-0 z-50 h-16 bg-[#080156] shadow-lg flex items-center justify-end px-8 backdrop-blur-sm border-b border-[#f59c22]/40">
      {/* Right Section: Search + Notifications + Profile */}
      <div className="flex items-center gap-8">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 text-sm rounded-full bg-white/15 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 w-56"
          />
          <Search
            className="absolute left-3 top-2.5 text-white/80"
            size={18}
          />
        </div>

        {/* Notification Bell */}
        <button className="relative group">
          <Bell
            size={24}
            className="text-white/90 group-hover:text-white transition-all duration-300"
          />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-2 group">
          <div className="relative">
            <UserCircle
              size={32}
              className="text-white/90 group-hover:text-white transition-all duration-300"
            />
            <div className="absolute -bottom-1 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <span className="hidden md:inline text-sm text-white/90 group-hover:text-white font-medium transition-all duration-300">
            Admin
          </span>
        </button>
      </div>
    </header>
  );
};

export default AdminNavbar;
