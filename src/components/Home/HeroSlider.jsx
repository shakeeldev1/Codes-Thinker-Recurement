import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Welcome to",
      highlight: "Codes Thinker",
      description:
        "We craft smart, user-friendly digital platforms that connect businesses with top talent and future opportunities.",
      bgImage: "/images/Slider-img.webp",
    },
    {
      id: 1,
      title: "Transform Ideas Into",
      highlight: "Digital Reality",
      description:
        "Our team blends creative design and clean code to deliver meaningful digital experiences that help careers grow.",
      bgImage: "/images/Slider-img.webp",
    },
    {
      id: 2,
      title: "Your Vision,",
      highlight: "Our Expertise",
      description:
        "Partner with us to build scalable, modern web solutions — and explore job opportunities that drive your potential.",
      bgImage: "/images/Slider-img.webp",
    },
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full h-[100vh] md:h-[90vh] lg:h-[115vh] relative overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url("${slide.bgImage}")` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center justify-center px-6">
                <div className="text-white text-center max-w-5xl px-4 transform transition-all duration-500 hover:scale-[1.02]">
                  
                  {/* Title in One Line */}
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                    {slide.title}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                      {slide.highlight}
                    </span>
                  </h2>

                  {/* Subtitle */}
                  <h3 className="text-lg md:text-2xl text-blue-300 mb-4 font-medium tracking-wide">
                    {slide.subtitle}
                  </h3>

                  <p className="text-sm md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-gray-200">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    <a href="/jobs">
                      <button className="px-6 py-3 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Explore Jobs
                      </button>
                    </a>
                    <a href="/contact">
                      <button className="px-6 py-3 text-sm md:text-base font-semibold rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white">
                        Contact Us
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide ? 'bg-white w-6 h-3' : 'bg-white/50 w-3 h-3 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-10">
        <div
          className="h-full bg-white transition-all duration-5000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            transition: 'width 5s linear',
          }}
        />
      </div>
    </div>
  );
};

export default HeroSlider;
