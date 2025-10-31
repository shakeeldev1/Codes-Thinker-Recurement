import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Star, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Launch Your Dream Career at",
      highlight: "Codes Thinker",
      description:
        "Join 10,000+ developers who landed their dream jobs through our platform. Average salary increase: 45%.",
      bgImage: "/images/bg-slider.avif",
      gradient: "from-blue-600 to-cyan-500",
      features: ["Remote Opportunities", "Competitive Salaries", "Fast Hiring Process"],
    },
    {
      id: 1,
      title: "Your Skills Meet",
      highlight: "Perfect Opportunities",
      description:
        "AI-powered matching connects you with companies that value your unique talent and ambition.",
      bgImage: "/images/bg-slider.avif",
      gradient: "from-indigo-600 to-blue-500",
      features: ["AI Job Matching", "Skill Assessment", "Career Growth"],
    },
    {
      id: 2,
      title: "Join Top Tech Teams at",
      highlight: "Leading Company",
      description:
        "Get hired by innovative company pushing the boundaries of technology and innovation.",
      bgImage: "/images/bg-slider.avif",
      gradient: "from-blue-700 to-cyan-600",
      features: ["FAANG Companies", "Startups", "Enterprise Clients"],
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[100vh] min-h-[650px] overflow-hidden bg-gray-900 text-white">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, #1e40af55, transparent 50%)",
              "radial-gradient(circle at 80% 70%, #0369a155, transparent 50%)",
              "radial-gradient(circle at 50% 50%, #4f46e555, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
          className="absolute inset-0"
        />
      </div>

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url("${slides[currentSlide].bgImage}")`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 lg:px-16">
            <div className="max-w-5xl mx-auto text-center">
              {/* Title */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight lg:mt-[100px]"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slides[currentSlide].title}{" "}
                <span
                  className={`bg-gradient-to-r ${slides[currentSlide].gradient} bg-clip-text text-transparent`}
                >
                  {slides[currentSlide].highlight}
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* Features */}
              <motion.div
                className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {slides[currentSlide].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-2"
                  >
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span className="text-xs sm:text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/jobs"
                    className={`px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-xl bg-gradient-to-r ${slides[currentSlide].gradient} text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2 sm:gap-3`}
                  >
                    Explore Jobs Now
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-2 border-gray-900"
                      />
                    ))}
                  </div>
                  <span>10K+ Hired</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-blue-400 fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  <span>+45% Avg. Salary</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all border border-white/20 hover:scale-110"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 md:p-4 rounded-full transition-all border border-white/20 hover:scale-110"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2 z-20">
        {slides.map((slide, index) => (
          <button key={index} onClick={() => setCurrentSlide(index)} className="group">
            <div
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? `w-5 sm:w-6 h-2 bg-gradient-to-r ${slide.gradient}`
                  : "w-2 h-2 bg-white/40 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        key={currentSlide}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 5 }}
        className="absolute bottom-0 left-0 h-[3px] sm:h-1 bg-gradient-to-r from-cyan-400 to-blue-600"
      />
    </div>
  );
};

export default HeroSlider;