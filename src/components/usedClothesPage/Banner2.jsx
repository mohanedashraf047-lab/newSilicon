import React from "react";
import { Factory, CheckCircle, ShieldCheck } from "lucide-react";

const Banner2 = () => {
  return (
    <section className="py-20 bg-blue-500 overflow-hidden text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side: Content */}
          <div className="w-full lg:w-7/12 space-y-8">
            {/* Top Badge - Changed to White Glass style */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <ShieldCheck size={16} className="text-white" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">
                Trusted Industry Partner
              </span>
            </div>

            {/* Main Heading - White text */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              The Leading Exporter of{" "}
              <span className="text-blue-100 italic">Second Hand Clothes</span>
            </h2>

            {/* Paragraphs - Light Slate/Blue-White for better contrast */}
            <div className="space-y-6 text-blue-50 text-lg leading-relaxed">
              <p>
                We understand that trusting a supplier, especially for something
                as crucial as second-hand clothing, can be a complex process.
                You may have concerns about quality, reliability, or whether we
                can truly deliver on our promises. At Silicon Value, we’re here
                to show you that we’re a trustworthy partner who can meet your
                business needs, all while fitting within your budget.
              </p>
              <p className="font-semibold text-white">
                Here are some of the advantages you’ll enjoy by choosing Silicon
                Value:
              </p>
            </div>

            {/* Benefit Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 - Unified Style */}
              <div className="group space-y-4 p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:shadow-xl hover:shadow-[#FFD700]/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  {/* Icon Wrapper */}
                  <div className="p-3 bg-[#FFD700] rounded-xl text-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Factory size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    A Reliable Experienced Exporter
                  </h4>
                </div>
                <p className="text-blue-50 text-base leading-relaxed opacity-90">
                  Silicon Value is one of the top exporters of second-hand
                  garments in China. With two large, fully operational factories
                  spanning over <strong>20,000 square meters</strong>, we have
                  the capacity to meet your needs.
                </p>
              </div>

              {/* Card 2 - Unified Style */}
              <div className="group space-y-4 p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:shadow-xl hover:shadow-[#FFD700]/20 transition-all duration-300">
                <div className="flex items-center gap-4">
                  {/* Icon Wrapper */}
                  <div className="p-3 bg-[#FFD700] rounded-xl text-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">
                    Specialized Sorting Expertise
                  </h4>
                </div>
                <p className="text-blue-50 text-base leading-relaxed opacity-90">
                  We have a dedicated team specializing in sorting used
                  clothing. Our expertise allows us to handle garments
                  carefully, ensuring they meet
                  <strong> high standards</strong> and your specific
                  requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Video Placeholder */}
          <div className="w-full lg:w-5/12">
            <div className="relative group">
              {/* Decorative Frame - Darker blue for contrast against blue-500 */}
              <div className="absolute -inset-4 bg-blue-600/50 rounded-[2.5rem] rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>

              {/* Video Box */}
              <div className="relative aspect-video bg-slate-900 rounded-4xl overflow-hidden shadow-2xl border-4 border-blue-400">
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 bg-slate-50 p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="translate-x-0.5 border-y-10px border-y-transparent border-l-16px border-l-white"></div>
                  </div>
                  <p className="font-bold text-slate-900">
                    Company Introduction Video
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Replace this container with your YouTube/Video link
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
