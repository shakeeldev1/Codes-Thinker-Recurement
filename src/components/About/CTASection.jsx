import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
    return (
        <section
            className="relative w-full py-20 bg-gradient-to-br from-[#060145] via-[#0a1555] to-[#092272] text-white text-center overflow-hidden"
        >
            {/* Floating Stars Background */}
          
<div className="absolute inset-0 overflow-hidden">
   
    {[...Array(15)].map((_, i) => (
        <motion.div
            key={i}
            className={`absolute rounded-full bg-white blur-[0.3px] ${
                i % 3 === 0 ? 'w-0.5 h-0.5' : 
                i % 3 === 1 ? 'w-1 h-1' : 'w-0.5 h-0.5'
            } ${
                i % 4 === 0 ? 'bg-white/90' :
                i % 4 === 1 ? 'bg-white/70' :
                i % 4 === 2 ? 'bg-white/80' : 'bg-white/60'
            }`}
            initial={{ 
                x: Math.random() * 100 + 'vw', 
                y: Math.random() * 100 + 'vh' 
            }}
            animate={{ 
                x: [
                    Math.random() * 100 + 'vw', 
                    Math.random() * 100 + 'vw', 
                    Math.random() * 100 + 'vw'
                ],
                y: [
                    Math.random() * 100 + 'vh',
                    Math.random() * 100 + 'vh',
                    Math.random() * 100 + 'vh'
                ]
            }}
            transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    ))}
</div>

            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] z-0"></div>

            {/* Content */}
            <motion.div
                className="relative z-10 flex flex-col items-center justify-center px-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
                    Interested in joining our{" "}
                    <span className="text-cyan-400">developer community?</span>
                </h3>

                <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
                    Collaborate with like-minded innovators and grow your career through
                    knowledge, teamwork, and real-world projects.
                </p>

                {/* Button with glass effect shadow */}
                <div className="relative group">
                    {/* Mirror reflection shine - Sharp rectangular */}
                    <div className="absolute -left-24 top-1/2 transform -translate-y-1/2 w-36 h-10 bg-gradient-to-r from-transparent via-white/25 to-transparent backdrop-blur-[0.5px] rounded-none group-hover:left-full group-hover:-translate-x-16 transition-all duration-700 ease-out pointer-events-none max-w-48"></div>

                    {/* Main Button */}
                    <a
                        href="/join-us"
                        className="relative inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-cyan-600/30 z-10"
                    >
                        Join Now
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default CTASection;