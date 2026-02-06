import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

const steps = [
  { id: "01", title: "Step 1", desc: "Confirm The Product Categories" },
  { id: "02", title: "Step 2", desc: "Confirm Your Order Quantities Full Container" },
  { id: "03", title: "Step 3", desc: "Small Orders Discussion" },
  { id: "04", title: "Step 4", desc: "Confirm The Quantity And Grade" },
  { id: "05", title: "Step 5", desc: "Discuss Prices And Discounts With Our Sales Team" },
  { id: "06", title: "Step 6", desc: "Confirm PI And Payments" },
];

const ServiceProcess = () => {
  return (
    <section className="py-16 lg:py-24 bg-blue-600 text-white my-12 rounded-3xl shadow-2xl overflow-hidden relative">
      {/* Subtle Tech Pattern Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 animate-fade-in-down">
          <div className="inline-block px-4 py-1.5 mb-4 bg-blue-500/30 border border-blue-400/50 rounded-full text-sm font-bold tracking-widest uppercase text-[#FFD700]">
            Workflow
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Service <span className="text-[#FFD700]">Process</span>
          </h2>
          <p className="text-blue-100 max-w-xl text-lg opacity-90">
            Our streamlined workflow ensures transparency and efficiency from initial inquiry to final delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Card Container */}
              <div className="h-full bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl transition-all duration-300 hover:bg-white/20 hover:border-[#FFD700]/50 hover:shadow-xl group-hover:-translate-y-1">
                
                {/* Top Row: Number and Icon */}
                <div className="flex justify-between items-center mb-8">
                  <div className="text-5xl font-black text-white/20 group-hover:text-[#FFD700]/40 transition-colors">
                    {step.id}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center text-blue-700 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                    <CheckCircle2 size={20} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-[#FFD700] font-bold text-sm tracking-widest uppercase">
                    {step.title}
                  </h3>
                  <p className="text-xl font-bold text-white leading-tight group-hover:text-blue-50 transition-colors">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Decorative Bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-[#FFD700] w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
              </div>

              {/* Connector for Tablet/Desktop */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#FFD700]/30 group-hover:text-[#FFD700] transition-colors">
                  <ChevronRight size={32} strokeWidth={3} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServiceProcess;