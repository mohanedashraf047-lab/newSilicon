import React from 'react';
import { Link } from 'react-router-dom';

const Banner1 = () => {
  return (
    <section 
      className="relative min-h-75 lg:min-h-75 flex items-center justify-center bg-cover bg-center bg-no-repeat   "
      style={{ 
        backgroundImage: `url('https://hissenglobal.com/wp-content/uploads/2025/04/%E5%B0%8Fbanner-6.webp')` 
      }}
    >
      {/* Background Overlay - Using Tailwind 4 opacity and blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-brightness-75"></div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 z-10 text-center">
        
        {/* Main Heading */}
        <h1 className="container text-start text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight uppercase">
          New Clothes
        </h1>

        {/* Breadcrumbs */}
        <nav className="flex container items-start space-x-2 text-sm md:text-base font-medium ">
          <Link 
            to="/" 
            className="text-blue-600 hover:text-[#FFD700] transition-colors duration-300 uppercase"
          >
            Home
          </Link>
          
          <span className="text-white/50">/</span>
          
          <span className="text-white uppercase">
            New Clothes
          </span>
        </nav>
      </div>
    </section>
  );
};

export default Banner1;