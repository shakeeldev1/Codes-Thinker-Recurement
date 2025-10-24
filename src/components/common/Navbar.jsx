import React from "react";
import { Link } from 'react-router-dom';
import ApplicationFormModal from './ApplicationFormModal';
import { useState } from "react";

const Navbar = () => {

 const [isFormOpen, setisFormOpen] = useState(false)

  return (
    <nav className="bg-[#060145] shadow-md py-2 fixed top-0 w-full max-w-[1600px] z-40 ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="relative w-[35%] sm:w-[15%]  group overflow-hidden">
            <div className="absolute  inset-0 w-0 flex items-center justify-center  transition-all ease-in  duration-500 group-hover:w-full group-hover:h-full">
              <Link href="/" data-discover="true">
                <img alt="Codes Thinker Logo" className="h-14 w-full" src="/images/companylogo.webp"/>
              </Link>
            </div>
            <div className="flex flex-col  group-hover:translate-x-[120%]  transition-all ease-in justify-center duration-400">
              {/* Updated C with rounded design */}
              <div className="relative">
                <h1 className="text-white text-4xl md:text-[4rem] leading-none font-lightbold" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
                  C
                </h1>
                {/* Optional: Add a subtle shadow or gradient to make it pop */}
                <div className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">
                  <h1 className="text-4xl md:text-[4rem] leading-none ">C</h1>
                </div>
              </div>
              <div className="relative ml-[0.5rem] md:ml-[0.9rem] font-semibold -mt-2 sm:-mt-9">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="absolute ml-[0.1rem] mt-[2px] md:ml-[0.1rem] md:-top-2 text-[#FFC41D] text-[10px] sm:text-[1.1rem]" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path>
                </svg>
                <h2 className="text-[#F69B23] mt-[7px] sm:mt-0 text-[40px] sm:text-4xl font-bold">T</h2>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-4 text-2xl">
              <Link className="group relative text-white px-3 py-2 text-lg font-medium hover:text-[#01b5e8] transition-colors duration-300" to="/" data-discover="true">Home <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#f5f9fa] transition-all duration-300 group-hover:w-full group-hover:left-0"></span></Link>
              <Link className="group relative text-white px-3 py-2 text-lg font-medium hover:text-[#01b5e8] transition-colors duration-300" to="/jobs" data-discover="true">Jobs <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#f5f9fa] transition-all duration-300 group-hover:w-full group-hover:left-0"></span></Link>
              <Link className="group relative text-white px-3 py-2 text-lg font-medium hover:text-[#01b5e8] transition-colors duration-300" to="/faqs" data-discover="true">FAQs <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#f5f9fa] transition-all duration-300 group-hover:w-full group-hover:left-0"></span></Link>
            
           
            </div>
          </div>
          <div className="hidden lg:flex gap-4">
            <div className="hidden md:block">
              <button className="text-white px-8 py-2 border border-[#f3f7f9] rounded-full text-lg font-semibold 
                  shadow-lg bg-[linear-gradient(to_right,#060044,#0F00AA,#060044)] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700" data-discover="true" onClick={()=>{setisFormOpen(true)}}>Apply Now</button>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#01b5e8] focus:outline-none">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {

        isFormOpen && (
      <ApplicationFormModal open={isFormOpen} onClose={()=>setisFormOpen(false)}/>

        )
      }

    </nav>
  );
};

export default Navbar;