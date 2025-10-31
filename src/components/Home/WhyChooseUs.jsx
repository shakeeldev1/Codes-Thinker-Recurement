import React from 'react'
import { motion, useScroll, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Target, Zap, Globe, TrendingUp, Shield, Star } from 'lucide-react'

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.8
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const features = [
  {
    icon: Target,
    title: 'AI-Powered Matching',
    description: 'Advanced algorithms that connect you with perfect job opportunities'
  },
  {
    icon: Zap,
    title: 'Rapid Placement',
    description: 'Average placement time of 2 weeks with streamlined process'
  },
  {
    icon: Globe,
    title: 'Global Opportunities',
    description: 'Access to positions across 50+ countries worldwide'
  },
  {
    icon: TrendingUp,
    title: 'Career Acceleration',
    description: 'Personalized growth paths for faster career progression'
  },
  {
    icon: Star,
    title: 'Elite Network',
    description: 'Connect with top companies from startups to enterprises'
  },
  {
    icon: Shield,
    title: 'Career Security',
    description: 'Continuous support throughout your professional journey'
  }
]

const WhyChooseUs = () => {
  const { scrollYProgress } = useScroll();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className='mb-24 px-4 sm:px-6 lg:px-8 mt-20'
    >
      <motion.div variants={itemVariants} className='text-center mb-16'>
        <motion.h3
          className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'
          whileHover={{ scale: 1.02 }}
        >
          Why Developers <span className='text-[#0F00AA]'>Choose Us</span>
        </motion.h3>
        <motion.p
          className='text-xl text-gray-600 max-w-2xl mx-auto'
          whileHover={{ scale: 1.01 }}
        >
          Experience the difference with our comprehensive career acceleration
          platform
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-8 lg:gap-y-9 px-8'
      >
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.01,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="group relative w-full p-8 bg-white rounded-3xl text-center shadow-xl transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,180,255,0.25)] cursor-pointer hover:bg-gradient-to-br hover:from-[#0F00AA] hover:to-[#0F00A6] hover:text-white border border-gray-200 hover:border-transparent overflow-hidden"
              style={{
                rotateX,
                rotateY
              }}
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 -z-10">
                {/* Enhanced Grid Pattern - Always Visible */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(90deg, transparent 94%, #0F00AA 96%, transparent 98%),
                      linear-gradient(180deg, transparent 94%, #0F00AA 96%, transparent 98%)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                  animate={{
                    backgroundPosition: ['0px 0px', '30px 30px'],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Subtle Blue Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-transparent to-purple-50/60 opacity-100 group-hover:opacity-0 transition-opacity duration-500"
                />

                {/* Enhanced Floating Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-[#0F00AA]/30 rounded-full"
                    style={{
                      left: `${5 + i * 18}%`,
                      top: `${8 + i * 12}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.7,
                    }}
                  />
                ))}

                {/* Enhanced Moving Gradient Orbs */}
                <motion.div
                  className="absolute -top-12 -left-12 w-28 h-28 bg-gradient-to-br from-blue-100/80 to-purple-100/60 rounded-full opacity-70 blur-xl"
                  animate={{
                    x: [0, 25, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-10 -right-10 w-24 h-24 bg-gradient-to-br from-purple-100/60 to-blue-100/80 rounded-full opacity-60 blur-lg"
                  animate={{
                    x: [0, -20, 0],
                    y: [0, -25, 0],
                    scale: [1.1, 0.9, 1.1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4,
                  }}
                />

                {/* Enhanced Pulse Effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border border-blue-100/50"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(15, 0, 170, 0.05)',
                      '0 0 0 3px rgba(15, 0, 170, 0.1)',
                      '0 0 0 6px rgba(15, 0, 170, 0)',
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: index * 0.3,
                  }}
                />

                {/* Hover Background Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#0F00AA] to-[#0F00A6] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Animated Border Glow on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(45deg, transparent, #0F00AA, transparent)`,
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
              </div>

              {/* Icon Container */}
              <div className="relative z-10">
                <div className="w-20 h-20 mb-6 mx-auto flex items-center justify-center bg-gradient-to-tr from-[#0F00AA] to-[#00B4FF] rounded-full group-hover:scale-110 group-hover:bg-white group-hover:shadow-lg transition-all duration-700 shadow-md relative overflow-hidden">
                  {/* Icon Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut",
                    }}
                  />
                  <IconComponent className='w-10 h-10 text-white group-hover:text-[#0F00AA] transition-colors duration-500 relative z-10' />
                </div>

                {/* Content */}
                <div className='relative z-10'>
                  <motion.h4
                    className='font-semibold text-lg leading-snug text-gray-800 transition-colors duration-500 group-hover:text-white mb-4'
                    whileHover={{ x: 2 }}
                  >
                    {feature.title}
                  </motion.h4>

                  <motion.p
                    className='text-gray-600 leading-relaxed transition-colors duration-500 group-hover:text-white/90'
                    whileHover={{ scale: 1.01 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </div>

              {/* Animated Ping Dot */}
              <div className="absolute top-3 right-3 w-3 h-3 bg-[#0F00AA] rounded-full opacity-70 group-hover:bg-white group-hover:opacity-100 animate-ping transition-all duration-500"></div>

              {/* Enhanced Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#0F00AA]/30 rounded-tl-3xl group-hover:border-white group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#0F00AA]/30 rounded-br-3xl group-hover:border-white group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#0F00AA]/20 rounded-tr-3xl group-hover:border-white transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#0F00AA]/20 rounded-bl-3xl group-hover:border-white transition-all duration-500"></div>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default WhyChooseUs