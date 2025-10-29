import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#07023B] via-[#0B0464] to-[#10085E] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#3026b6]/10 via-transparent to-purple-700/10"></div>
      <div className="absolute -top-32 -right-24 w-72 h-72 bg-[#5A51D3]/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0B055A]/60 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-15">
        {/* Grid Layout */}
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
          {/* ===== Brand ===== */}
          <div className="lg:pr-8 "> {/* Added padding-right */}
            <img src="./images/companylogo.webp" alt="CodesThinker Logo" className="w-40 mb-5" />
            <p className="text-gray-300 leading-relaxed text-sm mb-6">
              We craft digital experiences that transform businesses. Our team
              delivers cutting-edge web development and software solutions with
              precision and innovation.
            </p>

            <div className="flex space-x-3">
              {[
                { icon: Facebook, color: "hover:bg-blue-500" },
                { icon: Twitter, color: "hover:bg-blue-500" },
                { icon: Linkedin, color: "hover:bg-blue-500" },
                { icon: Instagram, color: "hover:bg-blue-500" },
              ].map((social, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* ===== Services ===== */}
          <div className="lg:pr-8 "> {/* Added padding-right */}
            <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:w-10 after:h-[2px] after:bg-gradient-to-r from-[#5A51D3] to-[#9b8aff] after:-bottom-2 after:left-0 ml-6">
              Our Services
            </h3>
            <ul className="space-y-3 mt-3">
              {[
                "Business Intelligence",
                "Virtual Workstation",
                "Network Services",
                "Data Science",
                "IT Strategy",
                "Cloud Solutions",
              ].map((service, index) => (
                <li
                  key={index}
                  className="group flex items-center cursor-pointer text-gray-300 hover:text-white text-sm"
                >
                  <ArrowRight className="w-4 h-4 text-indigo-400 mr-2 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Company ===== */}
          <div className="lg:pr-8"> {/* Added padding-right */}
            <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:w-10 after:h-[2px] after:bg-gradient-to-r from-[#9b8aff] to-[#5A51D3] after:-bottom-2 after:left-0 ml-6">
              Company
            </h3>
            <ul className="space-y-3 mt-3">
              {[
                "About Us",
                "Our Projects",
                "Case Studies",
                "Careers",
                "Blog",
                "Contact",
              ].map((item, index) => (
                <li
                  key={index}
                  className="group flex items-center cursor-pointer text-gray-300 hover:text-white text-sm"
                >
                  <ArrowRight className="w-4 h-4 text-purple-400 mr-2 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ===== Contact + Newsletter ===== */}
          <div className="lg:pr-4 "> {/* Added padding-right */}
            <h3 className="text-xl font-semibold mb-6 relative after:content-[''] after:absolute after:w-10 after:h-[2px] after:bg-gradient-to-r from-[#3026b6] to-[#5A51D3] after:-bottom-2 after:left-0">
              Get In Touch
            </h3>

            {/* Contact Info */}
            <div className="space-y-4 mb-6">
              {[
                { icon: Phone, text: "+44 7470 103120" },
                { icon: Mail, text: "info@codesthinker.com" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                    {item.text}
                  </span>
                </div>
              ))}

              {[
                "Bartle House, 9 Oxford Court, Manchester M2 3WQ (Regional Office)",
                "Hassan Manzil Basement, Goheer Town, Bahawalpur (Global Delivery Center)",
              ].map((address, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm leading-relaxed">
                    {address}
                  </span>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            {/* <div className=" border-2 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300">
              <p className="text-gray-200 text-sm mb-3 font-medium">
                Stay updated with our newsletter
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-indigo-700 hover:from-blue-600 hover:to-purple-700 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-1"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div> */}
          </div>
        </div>

        {/* ===== Bottom Bar ===== */}
        <div className="border-t border-white/20 p-5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 <span className="text-indigo-400 font-semibold">Code's Thinker</span>. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookies"].map((item, i) => (
                <span
                  key={i}
                  className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-300 hover:underline"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;