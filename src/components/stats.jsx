// components/Stats.jsx
import React, { useRef } from 'react';
import { STATS } from '../constants/siteData';
import { useIntersectionObserver } from '../hooks';

const Stats = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-blue-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div
              key={stat.id}
              className={`text-center ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-blue-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;