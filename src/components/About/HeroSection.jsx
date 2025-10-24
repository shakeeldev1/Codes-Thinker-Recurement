import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Target, HeartHandshake } from "lucide-react";

const HeroSection = () => {
  const texts = [
    { main: "Empowering Developers with", highlight: "Knowledge & Opportunities" },
    { main: "Connecting Passion with", highlight: "Purpose" },
    { main: "Building Future", highlight: "Tech Leaders" },
  ];

  const [index, setIndex] = useState(0);

  // Auto-change text every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className=" pt-5 relative mt-20 w-full min-h-[100vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, #2563eb55, transparent 50%)",
              "radial-gradient(circle at 80% 70%, #06b6d455, transparent 50%)",
              "radial-gradient(circle at 50% 50%, #4f46e555, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
          className="absolute inset-0"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 sm:px-10 md:px-16 max-w-4xl mx-auto">
        {/* Animated Headline */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
          >
            {texts[index].main}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {texts[index].highlight}
            </span>
          </motion.h1>
        </AnimatePresence>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          At <span className="text-cyan-400 font-semibold">Codes Thinker</span>, we believe in the power of
          community and innovation. Our mission is to connect passionate developers with life-changing
          career opportunities through cutting-edge tools and real-world learning.
        </motion.p>

        {/* Features */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
            <Users className="w-5 h-5 text-cyan-400" />
            <span className="font-medium text-sm sm:text-base">10K+ Developers Connected</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
            <Target className="w-5 h-5 text-blue-400" />
            <span className="font-medium text-sm sm:text-base">Career-Focused Mission</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
