import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TeamSection = () => {
 const teamMembers = [
  {
    name: "Jason Smith",
    role: "Frontend Developer",
    image: "/About-images/staff-1.webp",
    description:
      "Passionate about creating pixel-perfect, responsive interfaces using React and modern design principles.",
  },
  {
    name: "Anne Hayes",
    role: "Project Manager",
    image: "/About-images/staff-2.webp",
    description:
      "Leading teams efficiently with a focus on collaboration, delivery, and user satisfaction.",
  },
  {
    name: "Martha Smith",
    role: "UI/UX Designer",
    image: "/About-images/staff-3.webp",
    description:
      "Crafting intuitive user experiences and elegant interfaces that bring ideas to life.",
  },
  {
    name: "Mike Tyson",
    role: "HR Executive",
    image: "/About-images/staff-4.webp",
    description:
      "Committed to building strong teams and maintaining a healthy, productive workplace culture.",
  },
];


  return (
    <section className="relative py-20 bg-white overflow-hidden">
     

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
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-25">
          The brilliant minds behind our mission — dedicated to creating
          meaningful impact.
        </p>

        {/* Team Members Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className=" group relative bg-[#060145cc] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 pt-16 pb-6 px-5 overflow-visible hover:bg-white "
            >
              {/* Circular Profile Image */}
              <div
                className=" absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-2 border-[#fdc700] bg-cover bg-center shadow-md group-hover:scale-105 group-hover:border-[#060145e1] transition-transform duration-500"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>

              {/* Text Section */}
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#fdc700] ">
                  {member.name}
                </h3>
                <span className="text-cyan-600 text-sm font-medium mb-3 block ">
                  {member.role}
                </span>

                {/* Social Icons */}
                <ul className="flex justify-center gap-3 mb-4 transition-transform duration-300">

                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#fdc700] text-white hover:scale-110 transition-transform group-hover:bg-gradient-to-r from-blue-600 to-cyan-500"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#fdc700] text-white hover:scale-110 transition-transform group-hover:bg-gradient-to-r from-blue-600 to-cyan-500"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#fdc700] text-white hover:scale-110 transition-transform group-hover:bg-gradient-to-r from-blue-600 to-cyan-500"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-[#fdc700] text-white hover:scale-110 transition-transform group-hover:bg-gradient-to-r from-blue-600 to-cyan-500"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>

                {/* Description */}
                <p className="text-white group-hover:text-[#060145e1] text-sm">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
