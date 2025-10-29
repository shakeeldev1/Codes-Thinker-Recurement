import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Rocket, TrendingUp } from 'lucide-react'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const CTASection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="text-center py-16 px-4"
    >
      <motion.div
        variants={itemVariants}
        className="relative bg-gradient-to-br from-[#0c008c] via-blue-700 to-[#298ade] rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden group"
        whileHover={{ 
          scale: 1.02,
          y: -5,
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
      >
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
            rotate: [180, 0, 180]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            delay: 1,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2"
        />

        {/* Floating Particles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 0 }}
          className="absolute top-6 left-10 w-3 h-3 bg-white/30 rounded-full"
        />
        
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-8 right-12 w-2 h-2 bg-white/40 rounded-full"
        />

        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header Icon */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { type: "spring", stiffness: 400 }
              }}
              className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20"
            >
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              Transform
            </span>{' '}
            Your Career?
          </motion.h3>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed whitespace-nowrap"
            whileHover={{ scale: 1.01 }}
          >
            Join <span className="font-semibold text-yellow-300">10,000+ developers</span> who have accelerated their careers with Code's Thinker
          </motion.p>

        

          {/* CTA Button */}
       

<motion.div variants={itemVariants}>
  <Link to="/jobs">
    <motion.button
      whileHover={{ 
        scale: 1.05,
        y: -2,
        transition: { type: "spring", stiffness: 400 }
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative bg-gradient-to-r from-white to-gray-100 text-[#0F00AA] rounded-2xl px-10 py-5 font-bold text-lg md:text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-4 mx-auto overflow-hidden"
    >
      {/* Button Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      {/* Button Content */}
      <span className="relative z-10 font-semibold">
        Discover Your Next Opportunity
      </span>
      
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative z-10 group-hover:translate-x-1 transition-transform"
      >
        <ArrowRight className="w-5 h-5" />
      </motion.div>

      {/* Sparkle Effects */}
      <motion.div
        animate={{ 
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        className="absolute top-2 left-4 w-1 h-1 bg-[#0F00AA] rounded-full"
      />
      <motion.div
        animate={{ 
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
          rotate: [180, 0, 180]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute bottom-2 right-6 w-1 h-1 bg-[#0F00AA] rounded-full"
      />
    </motion.button>
  </Link>
</motion.div>


         
        </div>

        {/* Corner Accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-2xl" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-2xl" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-2xl" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-2xl" />
      </motion.div>
    </motion.div>
  )
}

export default CTASection