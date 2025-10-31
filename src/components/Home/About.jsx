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
     {/* Full-width background wrapper */}
<section className="w-full bg-gradient-to-b from-[#298ade] to-[#0f0b3b] py-16 sm:py-20 rounded-2xl md:mb-10">
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={containerVariants}
    className="max-w-6xl mx-auto grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4"
  >
    {[
      {
        icon: Rocket,
        title: "Grow Beyond Limits",
        text: "Work on real-world challenges that help you evolve into a top-tier professional.",
        gradient: "from-[#298ade] to-cyan-500",
      },
      {
        icon: Award,
        title: "Recognized Excellence",
        text: "Join a platform trusted by top global companies — get the recognition your work deserves.",
        gradient: "from-cyan-500 to-[#298ade]",
      },
      {
        icon: Laptop,
        title: "Flexible Work Culture",
        text: "Experience remote-friendly environments and diverse, international teams.",
        gradient: "from-[#298ade] to-blue-600",
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
            <div
              className={`p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-md`}
            >
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
</section>


        {/* Stats */}
  <motion.div
  initial="hidden"
  whileInView="visible"
  variants={containerVariants}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16"
>
  {stats.map((stat, index) => {
    const Icon = stat.icon;
    
    return (
      <motion.div
        key={index}
        variants={itemVariants}
        whileHover={{
          y: -8,
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(41, 138, 222, 0.15)",
          transition: { duration: 0.3 }
        }}
        className="relative bg-[#1861a1a8] backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center shadow-xl overflow-hidden group cursor-pointer"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Moving Gradient Orbs - Same for all cards */}
          <motion.div
            className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-[#298ade] to-cyan-500 rounded-full opacity-20 blur-xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 40, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-to-br from-cyan-500 to-[#298ade] rounded-full opacity-15 blur-lg"
            animate={{
              x: [0, -25, 0],
              y: [0, -35, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {/* Animated Grid Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(90deg, transparent 95%, #298ade 100%),
                linear-gradient(180deg, transparent 95%, #298ade 100%)
              `,
              backgroundSize: '30px 30px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '30px 30px'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Floating Particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 25}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 1.5,
              }}
            />
          ))}

          {/* Animated Border Glow - Same blue for all cards */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
            style={{
              background: `linear-gradient(45deg, transparent, #298ade, transparent)`,
            }}
            animate={{
              backgroundPosition: ['0% 0%', '200% 200%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Pulse Ring Effect - Same for all cards */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-transparent"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(41, 138, 222, 0)',
                '0 0 0 2px rgba(41, 138, 222, 0.3)',
                '0 0 0 4px rgba(41, 138, 222, 0)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: index * 0.5,
            }}
          />

          {/* Hover-specific Background Effects - Same for all */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#104c80]/50 to-blue-800/80 rounded-2xl opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              duration: 0.5,
              rotate: { duration: 0.3 }
            }}
            className="flex justify-center mb-4"
          >
            {/* Same gradient for all icons */}
            <div className="w-12 h-12 bg-gradient-to-br from-[#298ade] to-cyan-500 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden group/icon">
              {/* Icon Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
              {/* Icon Hover Glow */}
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover/icon:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <Icon className="w-6 h-6 text-white relative z-10" />
            </div>
          </motion.div>

          <motion.h3
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-300"
          >
            {stat.number}
          </motion.h3>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            className="text-gray-300 text-sm font-medium mb-3 group-hover:text-white transition-colors duration-300"
          >
            {stat.label}
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.7 }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(41, 138, 222, 0.3)"
            }}
            className="text-white text-[14px] font-semibold bg-[#298ade]/20 rounded-full py-1 px-3 inline-block transition-all duration-300"
          >
            {stat.trend}
          </motion.p>
        </div>

        {/* Enhanced Border Effects - Same for all */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#298ade]/40"
          transition={{ duration: 0.3 }}
        />
        
        {/* Hover Connection Lines - Same for all */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          whileHover={{
            boxShadow: "0 0 0 1px rgba(41, 138, 222, 0.5), 0 0 20px rgba(41, 138, 222, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Additional Hover Effects - Same for all */}
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-[#298ade]/20 to-cyan-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 -z-20"
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    );
  })}
</motion.div>

        {/* CTA */}
       <motion.div
  initial="hidden"
  whileInView="visible"
  variants={containerVariants}
  className="text-center px-4 relative"
>
  {/* Animated Background Elements */}
  <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
    {/* Moving Gradient Orbs */}
    <motion.div
      className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-r from-[#298ade] to-cyan-500 rounded-full opacity-20 blur-3xl"
      animate={{
        x: [0, 100, 0],
        y: [0, -50, 0],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    
    <motion.div
      className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-l from-cyan-500 to-[#298ade] rounded-full opacity-15 blur-3xl"
      animate={{
        x: [0, -80, 0],
        y: [0, 60, 0],
        scale: [1.2, 1, 1.2],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
    />

    {/* Floating Particles Storm */}
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1.5 h-1.5 bg-white rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -100, 0],
          x: [0, (Math.random() - 0.5) * 100, 0],
          opacity: [0, 0.8, 0],
          scale: [0, 1.5, 0],
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: Math.random() * 5,
        }}
      />
    ))}

    {/* Pulsing Rings */}
    <motion.div
      className="absolute inset-0 border-2 border-[#298ade]/30 rounded-2xl"
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(41, 138, 222, 0.3)',
          '0 0 0 10px rgba(41, 138, 222, 0.1)',
          '0 0 0 20px rgba(41, 138, 222, 0)',
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
    
    <motion.div
      className="absolute inset-0 border border-cyan-400/20 rounded-2xl"
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(0, 255, 255, 0.2)',
          '0 0 0 15px rgba(0, 255, 255, 0.05)',
          '0 0 0 30px rgba(0, 255, 255, 0)',
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeOut",
        delay: 1.5,
      }}
    />

    {/* Animated Grid */}
    <motion.div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
          linear-gradient(90deg, transparent 98%, #298ade 99%, transparent 100%),
          linear-gradient(180deg, transparent 98%, #298ade 99%, transparent 100%)
        `,
        backgroundSize: '40px 40px',
      }}
      animate={{
        backgroundPosition: ['0px 0px', '40px 40px'],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    {/* Lightning Bolts Effect */}
    <motion.div
      className="absolute inset-0 rounded-2xl"
      animate={{
        background: [
          'linear-gradient(45deg, transparent, transparent)',
          'linear-gradient(45deg, transparent, rgba(41, 138, 222, 0.1), transparent)',
          'linear-gradient(45deg, transparent, transparent)',
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />

    {/* Sparkling Stars */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={`star-${i}`}
        className="absolute w-1 h-1 bg-cyan-300 rounded-full"
        style={{
          left: `${10 + i * 12}%`,
          top: `${20 + (i % 3) * 25}%`,
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.3,
        }}
      />
    ))}

    {/* Wave Effect */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#298ade] to-transparent"
      animate={{
        opacity: [0.3, 0.8, 0.3],
        scaleX: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>

  <motion.div
    variants={itemVariants}
    className="bg-gradient-to-r from-[#298ade]/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden"
  >
    {/* Additional Inner Glow */}
    <motion.div
      className="absolute inset-0 rounded-2xl"
      animate={{
        boxShadow: [
          'inset 0 0 20px rgba(41, 138, 222, 0.1)',
          'inset 0 0 40px rgba(41, 138, 222, 0.2)',
          'inset 0 0 20px rgba(41, 138, 222, 0.1)',
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    <motion.h3
      className="text-2xl sm:text-4xl font-bold mb-4 text-white leading-tight"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      Build Your Legacy in the Tech World
    </motion.h3>
    
    <motion.p
      className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
      whileHover={{ scale: 1.01 }}
    >
      Thousands of professionals have unlocked global opportunities with{" "}
      <motion.span 
        className="text-[#298ade] font-semibold"
        animate={{
          textShadow: [
            '0 0 10px rgba(41, 138, 222, 0.5)',
            '0 0 20px rgba(41, 138, 222, 0.8)',
            '0 0 10px rgba(41, 138, 222, 0.5)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Code's Thinker
      </motion.span>.  
      Talent knows no boundaries — only possibilities. Let your skills
      and passion define the next era of technology.
    </motion.p>

    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { type: "spring", stiffness: 400 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to="/jobs"
        className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#298ade] to-cyan-500 rounded-xl font-semibold text-white text-base sm:text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg shadow-[#298ade]/25 relative overflow-hidden group"
      >
        {/* Button Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />
        
        Explore Opportunities
        <motion.div
          animate={{
            x: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.div>
      </Link>
    </motion.div>
  </motion.div>
</motion.div>
      </div>
    </motion.section>
  );
};

export default About;