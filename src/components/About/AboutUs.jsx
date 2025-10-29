import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Users, Rocket } from "lucide-react";

const AboutUs = () => {
  const phrases = ["We Build.", "We Learn.", "We Grow."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Code2 className="w-6 h-6 text-cyan-500" />,
      title: "What We Do",
      description:
        "At Codes Thinker, we merge creativity with technology to help developers build impactful solutions and enhance their skills.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Our Community",
      description:
        "We’re more than a platform — a network of passionate developers, mentors, and learners growing together with purpose.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-indigo-500" />,
      title: "Our Vision",
      description:
        "Empowering every coder to innovate confidently, collaborate globally, and shape the digital future through creativity and learning.",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-white text-gray-800 overflow-hidden">
      {/* Background Gradient Decoration */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Rotating Text */}
        <div className="h-12 mb-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h3
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent animate-glow"
            >
              {phrases[index]}
            </motion.h3>
          </AnimatePresence>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6 "
        >
          About{" "}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Codes Thinker
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed "
        >
          Codes Thinker is a platform built for developers, by developers. Our
          goal is to empower innovation through collaboration, mentorship, and
          continuous learning — helping every coder reach their full potential.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className=" bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-md hover:shadow-cyan-200 p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow Animation */}
      <style>{`
        @keyframes glowPulse {
          0%, 100% {
            text-shadow: 0 0 8px rgba(6,182,212,0.6), 0 0 20px rgba(37,99,235,0.3);
          }
          50% {
            text-shadow: 0 0 16px rgba(6,182,212,1), 0 0 40px rgba(37,99,235,0.6);
          }
        }
        .animate-glow {
          animation: glowPulse 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
