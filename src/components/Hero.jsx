// components/Hero.jsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '../constants/siteData';
import { useSlider } from '../hooks';
import Button from './ui/Button';

const Hero = () => {
  const { currentSlide, nextSlide, prevSlide, goToSlide } = useSlider(HERO_SLIDES.length, 6000);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-400 mb-3 sm:mb-4 animate-fadeInUp">
                {slide.subtitle}
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fadeInUp animation-delay-200">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fadeInUp animation-delay-300">
                {slide.description}
              </p>
              <div className="animate-fadeInUp animation-delay-400">
                <Button variant="primary" size="lg">
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 active:scale-95 backdrop-blur-sm p-2 sm:p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-6 sm:w-8'
                : 'bg-white/50 w-1.5 sm:w-2 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;