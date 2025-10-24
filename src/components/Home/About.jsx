import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import {
  Users,
  Briefcase,
  Target,
  Rocket,
  Award,
  CheckCircle,
  ArrowRight,
  Laptop,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const stats = [
    { number: "1200+", label: "Live Opportunities", trend: "Updated Daily", icon: Briefcase },
    { number: "25K+", label: "Developers Hired", trend: "Across 40+ countries", icon: Users },
    { number: "350+", label: "Partner Companies", trend: "From Startups to Giants", icon: Target },
    { number: "97%", label: "Placement Success", trend: "Top-rated satisfaction", icon: CheckCircle },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, duration: 0.8 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="relative overflow-hidden py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#050320] via-[#0a0435] to-[#050320] text-white min-h-screen"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        opacity,
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
      }}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(41, 138, 222, 0.3) 1px, transparent 1px),
              linear-gradient(180deg, rgba(41, 138, 222, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl font-extrabold mb-4"
            >
              Empower Your{" "}
              <span className="text-[#298ade]">Tech Journey</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 font-light max-w-3xl mx-auto leading-relaxed"
            >
              Code's Thinker connects passionate developers with forward-thinking
              companies. Whether you dream of working remotely, contributing to
              AI innovation, or leading enterprise-scale projects — your next
              chapter starts here.
            </motion.p>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-16"
        >
          {[
            {
              icon: Rocket,
              title: "Grow Beyond Limits",
              text: "Work on real-world challenges that help you evolve into a top-tier professional.",
              gradient: "from-[#298ade] to-cyan-500"
            },
            {
              icon: Award,
              title: "Recognized Excellence",
              text: "Join a platform trusted by top global companies — get the recognition your work deserves.",
              gradient: "from-cyan-500 to-[#298ade]"
            },
            {
              icon: Laptop,
              title: "Flexible Work Culture",
              text: "Experience remote-friendly environments and diverse, international teams.",
              gradient: "from-[#298ade] to-blue-600"
            },
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                  borderColor: "rgba(41, 138, 222, 0.4)",
                }}
                className="bg-[#0f0b3b]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-[#298ade]/10 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-md`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            // Alternate between #298ade and cyan colors for variety
            const gradient = index % 2 === 0 
              ? "from-[#298ade] to-cyan-500" 
              : "from-cyan-500 to-[#298ade]";
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(41, 138, 222, 0.3)",
                }}
                className="bg-[#1861a1a8] backdrop-blur-lg border-2  border-white/10 rounded-2xl p-6 text-center shadow-md transition-all duration-300 "
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white">{stat.number}</h3>
                <p className="text-gray-300 text-sm font-medium mt-1">
                  {stat.label}
                </p>
                <p className="text-white  text-[14px] mt-2">{stat.trend}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="text-center px-4"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-[#298ade]/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12"
          >
            <h3 className="text-2xl sm:text-4xl font-bold mb-4 text-white leading-tight">
              Build Your Legacy in the Tech World
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Thousands of professionals have unlocked global opportunities with{" "}
              <span className="text-[#298ade] font-semibold">Code's Thinker</span>.  
              Talent knows no boundaries — only possibilities. Let your skills
              and passion define the next era of technology.
            </p>

            <Link
              to="/jobs"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#298ade] to-cyan-500 rounded-xl font-semibold text-white text-base sm:text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg shadow-[#298ade]/25"
            >
              Explore Opportunities
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;