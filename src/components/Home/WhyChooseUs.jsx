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
        className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
      >
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="group relative w-full p-8 bg-white rounded-3xl text-center shadow-xl transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,180,255,0.25)] cursor-pointer hover:bg-gradient-to-br hover:from-[#0F00AA] hover:to-[#0F00A6] hover:text-white border border-gray-200 hover:border-transparent"
              style={{
                rotateX,
                rotateY
              }}
            >
              {/* Icon Container */}
              <div className="w-20 h-20 mb-6 mx-auto flex items-center justify-center bg-gradient-to-tr from-[#0F00AA] to-[#00B4FF] rounded-full group-hover:scale-110 transition-transform duration-700 shadow-md">
                <IconComponent className='w-10 h-10 text-white' />
              </div>

              {/* Content */}
              <div className='relative z-10'>
                <motion.h4
                  className='font-semibold text-lg leading-snug transition-colors duration-500 group-hover:text-white mb-4'
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

              {/* Animated Ping Dot */}
              <div className="absolute top-3 right-3 w-4 h-4 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default WhyChooseUs