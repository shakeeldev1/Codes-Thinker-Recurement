import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Jason Smith",
      role: "Frontend Developer",
      image: "/About-images/staff-1.jpg",
    },
    {
      name: "Anne Hayes",
      role: "Backend Engineer",
      image: "/About-images/staff-2.jpg",
    },
    {
      name: "Martha Smith",
      role: "UI/UX Designer",
      image: "/About-images/staff-3.jpg",
    },
    {
      name: "Mike Tyson",
      role: "Project Manager",
      image: "/About-images/staff-4.jpg",
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-cyan-100/20 to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Meet Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Team
          </span>
        </motion.h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          The brilliant minds behind Codes Thinker — dedicated to building future-ready solutions.
        </p>

        {/* Team Members Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-cyan-600 text-sm font-medium mb-3">{member.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="#" className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-110 transition-transform">
                    <FaTwitter />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-110 transition-transform">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-110 transition-transform">
                    <FaInstagram />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-110 transition-transform">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
