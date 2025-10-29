import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Senior Developer at Google",
    company: "Google",
    image: "👩‍💻",
    content:
      "Code's Thinker completely transformed my career. From mid-level to senior developer with a 60% salary increase in 2 months!",
    rating: 5,
    achievement: "Promoted to Senior Developer",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Engineering Manager at Meta",
    company: "Meta",
    image: "👨‍💼",
    content:
      "The platform’s AI accurately matched my skills and culture preferences. Landed a leadership role that fits perfectly.",
    rating: 5,
    achievement: "Leadership Role Achieved",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Full Stack Developer at Microsoft",
    company: "Microsoft",
    image: "👩‍🎨",
    content:
      "As someone who struggled to find the right opportunity, Code's Thinker was a game-changer. The guidance and interview prep were invaluable.",
    rating: 5,
    achievement: "40% Salary Increase",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction < 0 ? 200 : -200,
    opacity: 0,
  }),
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[currentIndex];

  return (
    <section className="relative bg-gradient-to-b from-[#07004a] via-[#0d008e] to-[#07004a] py-24 px-6 overflow-hidden">
      {/* Glowing overlay effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 mb-6 backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-300 font-semibold tracking-wide">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Hear from Our{" "}
            <span className="text-yellow-400">Top Developers</span>
          </h2>
          <p className="text-blue-100/90 mt-4 max-w-2xl mx-auto">
            Real experiences from professionals who accelerated their careers
            through Code's Thinker.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-10 md:p-14 backdrop-blur-xl"
            >
              <Quote className="w-10 h-10 text-yellow-400 mx-auto mb-6 opacity-70" />
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                “{t.content}”
              </p>

              <div className="flex flex-col items-center gap-3">
                <div className="text-6xl">{t.image}</div>
                <h3 className="text-lg font-semibold text-white">
                  {t.name}
                </h3>
                <p className="text-yellow-200 text-sm">{t.role}</p>
                <div className="flex gap-1 mt-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/30">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-300 text-sm">
                    {t.achievement}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prev}
              className="bg-white/10 hover:bg-white/20 text-yellow-400 p-2 rounded-full border border-white/20 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={next}
              className="bg-white/10 hover:bg-white/20 text-yellow-400 p-2 rounded-full border border-white/20 transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-yellow-400 w-6"
                  : "bg-white/20 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
