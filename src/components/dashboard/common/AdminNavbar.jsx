import React, { useState } from "react";
import { Menu, UserCircle, LogOut } from "lucide-react";

const AdminNavbar = ({ onMenuClick }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Dummy admin data
  const admin = {
    name: "Admin",
    role: "System Administrator",
    image: null,
  };

  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 z-50 h-16 bg-[#080156] shadow-lg flex items-center justify-between px-4 sm:px-6 md:px-8 border-b border-[#f59c22]/40">
      {/* Left Section: Mobile Menu */}
      <button
        className="lg:hidden text-white/90 hover:text-white transition-all"
        onClick={onMenuClick}
      >
        <Menu size={24} />
      </button>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8 ml-auto relative">
      
      

        {/* Profile Section */}
        <button
          className="flex items-center gap-2 group"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          {admin.image ? (
            <img
              src={admin.image}
              alt="Admin"
              className="w-10 h-10 rounded-full object-cover border-2 border-white"
            />
          ) : (
            <UserCircle
              size={32}
              className="text-white/90 group-hover:text-white transition-all duration-300"
            />
          )}

          <span className="hidden md:inline text-sm text-white/90 group-hover:text-white font-medium transition-all duration-300">
            {admin.name}
          </span>
        </button>

       
      </div>

      {/* Overlay to close dropdown */}
      {isProfileOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsProfileOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default AdminNavbar;
