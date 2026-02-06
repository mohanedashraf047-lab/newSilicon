// components/Testimonials.jsx
import React, { useRef } from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants/siteData';
import { useIntersectionObserver } from '../hooks';
import Card from './ui/Card';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0'
          }`}>
            Client Testimonials
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${
            isVisible ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'
          }`}>
            Hear what our satisfied clients have to say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;