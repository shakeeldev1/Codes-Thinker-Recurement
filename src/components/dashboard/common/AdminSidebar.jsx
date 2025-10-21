import React, { useState, useEffect } from "react";
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
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  const links = [
    { id: "overview", label: "Overview", icon: <LayoutDashboard size={20} /> },
    { id: "applications", label: "Jobs & Internships", icon: <Briefcase size={20} /> },
    { id: "interviews", label: "Interviews", icon: <CalendarCheck2 size={20} /> },
  ];

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(isDesktop);
  }, [isDesktop]);

  return (
    <>
      {/* Mobile Hamburger Button */}
      {!isDesktop && !isOpen && (
        <button
          aria-label="Open Sidebar"
          className="fixed top-2 left-5 z-50 p-3 shadow-lg rounded-full text-white flex items-center justify-center
          hover:scale-110 hover:shadow-2xl transition-transform duration-300"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      {/* Mobile Backdrop */}
      {!isDesktop && isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-[#080156] to-[#0c0c3c] text-white shadow-xl flex flex-col border-r border-[#f59c22]/20 transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Mobile Close Button */}
        {!isDesktop && isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-5 p-2.5 rounded-full text-white shadow-lg flex items-center justify-center
            hover:scale-110 hover:shadow-2xl transition-transform duration-300 z-50"
          >
            <X size={24} />
          </button>
        )}

        {/* Logo Section */}
        <div className="p-6 flex flex-col items-center border-b border-[#f59c22]/30 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-extrabold tracking-wide mt-6">
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
              to={link.id}
              onClick={() => !isDesktop && setIsOpen(false)}
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
    </>
  );
};

export default AdminSidebar;
