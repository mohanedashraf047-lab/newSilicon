import { Factory, Globe, TrendingUp, Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-blue-600 text-white flex items-center justify-center">
      {/* 1. Background Layer with Sparkle Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-blue-600 bg-center bg-no-repeat opacity-50"></div>

        <div className="absolute inset-0 pointer-events-none opacity-30 animate-pulse"></div>

        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* 2. Content Layer */}
      <div className="container relative z-10 px-6">
        <div className="max-w-5xl pt-4 mx-auto text-center space-y-8 transition-all duration-1000 transform translate-y-0 opacity-100 motion-safe:animate-[fadeInDown_1s_ease-out]">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-400 text-sm font-bold uppercase tracking-widest">
              Global Leader in Sustainable Fashion
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              Silicon Value {""}
              <span className="text-blue-500">Global Textile</span> & Fabric
              Solutions
            </h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
            Silicon Value is a leading global exporter and manufacturer of
            clothes and fabrics, catering to markets around the world. With a
            strong presence in regions such as Africa, Southeast Asia, the
            Middle East, Europe, and the Americas, we provide high-quality,
            affordable products to meet the growing demand for sustainable
            fashion solutions. Our state-of-the-art factory ensures top-notch
            production standards, and our commitment to customer satisfaction
            has earned us an 80% repeat business rate. Silicon Value is a trusted
            partner for businesses seeking reliable, eco-friendly products for
            diverse markets.
          </p>

          {/* Stats Grid with Lucide Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm md:text-base pt-4">
            {[
              {
                icon: <Factory className="w-8 h-8 text-blue-400" />,
                label: "State-of-the-art",
                sub: "Production Factory",
              },
              {
                icon: <Globe className="w-8 h-8 text-blue-400" />,
                label: "Global Presence",
                sub: "Across 5 Continents",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
                label: "80% Repeat Rate",
                sub: "Trusted Partner",
              },
              {
                icon: <Leaf className="w-8 h-8 text-blue-400" />,
                label: "Sustainable",
                sub: "Eco-Friendly Products",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-3 bg-white/5 backdrop-blur-md py-6 px-4 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-blue-600/20 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-center">
                  <span className="block font-bold text-white uppercase tracking-wide">
                    {stat.label}
                  </span>
                  <span className="text-gray-400 text-xs">{stat.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="pt-8">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-200 bg-blue-600 rounded-xl hover:bg-blue-700 shadow-2xl active:scale-95"
            >
              Get Latest Wholesale Price List
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* 3. Bottom Mask */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-12 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M600,112.77L0,0V120H1200V0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroBanner;
