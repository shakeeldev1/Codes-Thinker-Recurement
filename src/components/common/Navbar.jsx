import React, { useState } from "react";
import { Link } from "react-router-dom";
import ApplicationFormModal from "./ApplicationFormModal";

const Navbar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ mobile menu toggle

  return (
    <nav className="bg-[#060145] shadow-md py-2 fixed top-0 w-full max-w-[1600px] z-40">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
       {/* ======= LOGO SECTION ======= */}
<div className="relative group overflow-hidden w-20 sm:w-32 md:w-40 h-16 flex items-center justify-center">
  {/* Always show the company logo on all devices */}
  <Link
    to="/"
    className="flex items-center justify-center"
  >
    <img
      src="/images/companylogo.webp"
      alt="Codes Thinker Logo"
      className="h-12 sm:h-14 md:h-16 w-auto"
    />
  </Link>
</div>



          {/* ======= NAV LINKS (Desktop only) ======= */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-4 text-2xl">
              <Link
                className="group relative text-white px-3 py-2 text-lg font-medium hover:text-[#01b5e8] transition-colors duration-300"
                to="/"
              >
                Home
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#f5f9fa] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link
                className="group relative text-white px-3 py-2 text-lg font-medium hover:text-[#01b5e8] transition-colors duration-300"
                to="/about"
              >
                About
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#f5f9fa] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link
                className="group relative text-white px-3 py-2 text-lg font-medium hover:text-[#01b5e8] transition-colors duration-300"
                to="/jobs"
              >
                Jobs
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#f5f9fa] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link
                className="group relative text-white px-3 py-2 text-lg font-medium hover:text-[#01b5e8] transition-colors duration-300"
                to="/contact"
              >
                Contact
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#f5f9fa] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
              <Link
                className="group relative text-white px-3 py-2 text-lg font-medium hover:text-[#01b5e8] transition-colors duration-300"
                to="/faqs"
              >
                FAQs
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#f5f9fa] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </div>
          </div>

          {/* ======= APPLY BUTTON (Desktop) ======= */}
          <div className="hidden lg:flex gap-4">
            <button
              className="text-white px-8 py-2 border border-[#f3f7f9] rounded-full text-lg font-semibold shadow-lg bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700"
              onClick={() => setIsFormOpen(true)}
            >
              Apply Now
            </button>
          </div>

          {/* ======= HAMBURGER ICON (Mobile) ======= */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#01b5e8] focus:outline-none"
            >
              {isMenuOpen ? (
                // Close icon
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 352 512"
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M242.72 256L345.36 153.36c12.28-12.28 12.28-32.19 0-44.48l-22.63-22.63c-12.28-12.28-32.19-12.28-44.48 0L176 188.28 73.36 85.64c-12.28-12.28-32.19-12.28-44.48 0L6.25 108.28c-12.28 12.28-12.28 32.19 0 44.48L108.9 256 6.25 358.64c-12.28 12.28-12.28 32.19 0 44.48l22.63 22.63c12.28 12.28 32.19 12.28 44.48 0L176 323.72l102.64 102.64c12.28 12.28 32.19 12.28 44.48 0l22.63-22.63c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ======= MOBILE MENU (Dropdown) ======= */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#070156] border-t border-[#1f1f70] pb-4">
          <div className="flex flex-col items-center space-y-3 py-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-lg font-medium hover:text-[#01b5e8]"
            >
              Home
            </Link>
            <Link
              to="/jobs"
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-lg font-medium hover:text-[#01b5e8]"
            >
              Jobs
            </Link>
            <Link
              to="/faqs"
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-lg font-medium hover:text-[#01b5e8]"
            >
              FAQs
            </Link>
            <button
              onClick={() => {
                setIsFormOpen(true);
                setIsMenuOpen(false);
              }}
              className="text-white px-6 py-2 border border-[#f3f7f9] rounded-full text-base font-semibold shadow-md bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}

      {/* ======= Application Form Modal ======= */}
      {isFormOpen && (
        <ApplicationFormModal
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
