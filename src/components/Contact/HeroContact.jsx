import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const HeroContact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+44 7470 103120",
      description: "Mon to Fri from 9am to 6pm",
      color: "from-[#298ade] to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@codesthinker.com",
      description: "Send us your queries anytime",
      color: "from-[#298ade] to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Manchester & Bahawalpur",
      description: "Visit our offices worldwide",
      color: "from-[#298ade] to-cyan-500"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "Within 24 Hours",
      description: "We reply super fast",
      color: "from-[#298ade] to-cyan-500"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative  text-white py-25 overflow-hidden"
      >
        {/* Background Images */}
        <div className="absolute inset-0">
          <img 
            src="/About-images/contact-img.jpg" 
            alt="Contact Background"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
              console.error('Image failed to load. Path:', e.target.src);
              e.target.style.backgroundColor = '#0c0934ef';
            }}
          />
          
        </div>
        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 text-center z-10 mt-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-[0_0_10px_rgba(41,138,222,0.3)]">
            <span className=" bg-gradient-to-br from-[#060145]/80 via-[#0a1555]/80 to-[#092272]/80 bg-clip-text text-transparent">Get in Touch</span>
          </h1>
          <h3 className="text-2xl  bg-gradient-to-br from-[#060145]/80 via-[#0a1555]/80 to-[#092272]/80 bg-clip-text text-transparent">
            Contact Us
          </h3>
        </div>

        {/* Decorative glass circles */}
        <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-[28rem] bg-[#298ade]/20 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 sm:w-[30rem] h-96 sm:h-[30rem] bg-cyan-500/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </motion.header>

      {/* Contact Cards Section */}
      <div className="  bg-[#0c0934ef] py-8 px-4 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-cyan-500/10 relative z-10 w-full px-6 py-8 rounded-2xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden rounded-2xl border border-gray-100/10 shadow-md hover:shadow-cyan-200/30 transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff60] to-[#ffffff10] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#060145] via-[#0a1555] to-[#092272] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                  {/* Content */}
                  <div className="relative p-6 flex flex-col items-center text-center space-y-3 z-10">
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                      {method.title}
                    </h3>
                    <p className="text-cyan-300 font-medium text-sm">{method.details}</p>
                    <p className="text-gray-400 text-xs">{method.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;