// components/Solutions.jsx
import React, { useRef } from 'react';
import { SOLUTIONS } from '../constants/siteData';
import { useIntersectionObserver } from '../hooks';
import Button from './ui/Button';

const Solutions = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0'
          }`}>
            Our Solutions
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${
            isVisible ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'
          }`}>
            Tailored packages designed for businesses of all sizes
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution, index) => (
            <div
              key={solution.id}
              className={`group ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 h-64">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {solution.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {solution.benefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Button variant="outline" size="sm" fullWidth>
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;