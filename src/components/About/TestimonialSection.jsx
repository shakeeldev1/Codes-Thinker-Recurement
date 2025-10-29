import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const floatingReviewers = [
        { id: 1, image: "https://randomuser.me/api/portraits/women/44.jpg", duration: 25 },
        { id: 2, image: "https://randomuser.me/api/portraits/men/32.jpg", duration: 30 },
        { id: 3, image: "https://randomuser.me/api/portraits/women/68.jpg", duration: 28 },
        { id: 4, image: "https://randomuser.me/api/portraits/men/75.jpg", duration: 32 },
        { id: 5, image: "https://randomuser.me/api/portraits/women/23.jpg", duration: 26 },
        { id: 6, image: "https://randomuser.me/api/portraits/men/55.jpg", duration: 29 },
    ];

    const testimonials = [
        {
            id: 1,
            name: "BMX Adventure",
            role: "Customer",
            rating: 5.0,
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            review: "BMX Adventure came alive online thanks to Codes Thinker stunning design, fast performance, and powerful impact!"
        },
        {
            id: 2,
            name: "Muhammad waseem",
            role: "Customer",
            rating: 5.0,
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            review: "Excellent service! Codes Thinker delivered a stunning, responsive website on time. Highly professional team with great communication. Highly recommend for web solutions."
        },
        {
            id: 3,
            name: "Sarah Johnson",
            role: "Business Owner",
            rating: 5.0,
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            review: "Outstanding work! The team understood our vision perfectly and delivered beyond expectations. Our online presence has never been better."
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    };

    const prevTestimonial = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    };

    return (
        <div className="sm:py-10 px-4 relative ">
            {/* Floating Reviewer Images Background */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {floatingReviewers.map((reviewer) => (
                    <motion.div
                        key={reviewer.id}
                        className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white/20 shadow-lg"
                        initial={{
                            x: Math.random() * 100,
                            y: Math.random() * 100
                        }}
                        animate={{
                            x: [
                                `${Math.random() * 100}vw`,
                                `${Math.random() * 100}vw`,
                                `${Math.random() * 100}vw`
                            ],
                            y: [
                                `${Math.random() * 100}vh`,
                                `${Math.random() * 100}vh`,
                                `${Math.random() * 100}vh`
                            ]
                        }}
                        transition={{
                            duration: reviewer.duration,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <img
                            src={reviewer.image}
                            alt={`Reviewer ${reviewer.id}`}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Main Content */}
            <div className="w-full max-w-5xl mx-auto bg-cyan-200/20 p-8 md:p-10 rounded-xl flex flex-col md:flex-row gap-8 items-center relative z-10">
                {/* Left Section */}
                <div className="w-full md:w-1/3 text-center md:text-left" data-aos="fade-down">
                    <h1 className="text-3xl font-bold bg-gradient-to-br from-[#0F00AA] to-[#060044] bg-clip-text text-transparent leading-snug">
                        Our <span className="text-yellow-400">Clients,</span> In Their Own Words
                    </h1>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-2/3" data-aos="zoom-in">
                    {/* Testimonials Slider */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="text-black bg-white w-full mx-auto rounded-lg shadow-md p-6 space-y-2 "
                            >
                                <div className="flex justify-start gap-6 items-center">

                                    <div className="flex text-md sm:text-xl ml-2 gap-1">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 576 512"
                                                className="text-yellow-400"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-start gap-5 items-center">
                                        <img
                                            className="rounded-full h-20 w-20"
                                            alt={testimonials[currentIndex].name}
                                            src={testimonials[currentIndex].image}
                                        />
                                        <div>
                                            <h1 className="sm:text-lg font-semibold">{testimonials[currentIndex].name}</h1>
                                            <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-sm">{testimonials[currentIndex].review}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-4 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white/50'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;