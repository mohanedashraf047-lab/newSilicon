// components/Services.jsx
import React, { useRef } from 'react';
import { SERVICES } from '../constants/siteData';
import { useIntersectionObserver } from '../hooks';
import Card from './ui/Card';

const Services = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-4 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0'
          }`}>
            Our Services
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto ${
            isVisible ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'
          }`}>
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <Card
              key={service.id}
              className={`${
                isVisible
                  ? 'animate-fadeInUp'
                  : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;