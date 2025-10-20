import React, { useState } from "react";
import {
  LayoutDashboard,
  Briefcase,
  CalendarCheck2,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard size={20} /> },
    {
      id: "applications",
      label: "Jobs & Internships",
      icon: <Briefcase size={20} />,
    },
    {
      id: "interviews",
      label: "Interviews",
      icon: <CalendarCheck2 size={20} />,
    },
  ];

  return (
    <>
      {/* ======= MOBILE HEADER ======= */}
      <div className="lg:hidden fixed top-0 left-0 w-full flex items-center justify-between bg-[#080156] text-white px-5 py-4 shadow-md z-50">
        {/* <h1 className="text-xl font-extrabold tracking-wide">
          <span className="text-[#f59c22]">Codes</span>Thinker
        </h1> */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-[#f59c22]/20 transition"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ======= SIDEBAR ======= */}
      <aside
        className={`fixed  lg:top-0 top-10 left-0 h-screen w-64 bg-gradient-to-b from-[#080156] to-[#0c0c3c] text-white shadow-xl flex flex-col border-r border-[#f59c22]/20 transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="p-6 flex flex-col items-center border-b border-[#f59c22]/30 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-extrabold tracking-wide">
              <span className="text-[#f59c22] drop-shadow-sm">Codes</span>
              <span className="text-white">Thinker</span>
            </h1>
            <p className="text-sm text-gray-300 mt-1 font-medium tracking-wide">
              Admin Portal
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-[#f59c22]/40 scrollbar-track-transparent">
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={`${link.id}`}
              onClick={() => setIsOpen(false)} // close sidebar on mobile link click
              className={({ isActive }) =>
                `relative flex items-center gap-3 w-full px-4 py-3 rounded-xl text-[15px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#f59c22] to-[#ffb84d] text-[#080156] shadow-lg"
                    : "text-gray-200 hover:bg-white/10 hover:text-[#f59c22]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute left-0 w-1 h-8 bg-[#f59c22] rounded-r-lg shadow-sm"></span>
                  )}
                  {link.icon}
                  {link.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-[#f59c22]/30 bg-[#080156]/30 backdrop-blur-md">
          <button
            onClick={() => {
              setIsOpen(false);
              navigate("/login");
            }}
            className="flex items-center gap-3 text-[#f59c22] font-semibold hover:text-white w-full px-3 py-2 rounded-xl hover:bg-[#f59c22]/20 transition-all duration-300"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* ======= MOBILE OVERLAY ======= */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;
