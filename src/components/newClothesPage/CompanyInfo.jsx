import companyInfo from "../../assets/companyInfo.jpeg";

const CompanyInfo = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#FFD700] overflow-hidden my-12 rounded-2xl shadow-xl shadow-blue-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content Column */}
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Company Introduction
            </h2>

            <div className="space-y-6 text-slate-800 text-lg lg:text-xl leading-relaxed">
              <p>
                <span className="font-bold text-slate-900 border-b-2 border-blue-600">
                  Silicon Value
                </span>{" "}
                is one of the top providers of high-quality, full-container
                export services in the global tech sector.
              </p>

              <p>
                We have{" "}
                <strong className="text-slate-900">3 large facilities</strong>{" "}
                in China, covering a total area of over{" "}
                <strong className="text-blue-600">20,000 square meters</strong>.
              </p>

              <p>
                Our state of the art manufacturing capabilities allow us to
                produce a significant volume of products daily, from
                semiconductors and integrated circuits to cutting-edge tech
                components.
              </p>
            </div>
          </div>

          {/* Modern Animated Image Column */}
          <div className="order-1 lg:order-2 relative perspective-1000">
            {/* Animated background pulse */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

            <div className="relative group transition-all duration-700 ease-out transform-3d hover:transform-[rotateX(5deg)_rotateY(-10deg)]">
              {/* Outer Glow Frame */}
              <div className="absolute inset-0 border-2 border-white/50 rounded-2xl scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* The Image Container - Controlled Width and Height */}
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl 
                w-full max-w-5xl mx-auto 
                aspect-video sm:h-[400px] lg:h-[500px]"
              >
                <img
                  loading="lazy"
                  src={companyInfo}
                  alt="Silicon Value Advanced Manufacturing Facility"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Shimmer/Shine Effect Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shine"></div>

                {/* Tech Grid Overlay (Subtle) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
              </div>

              {/* Floating Accent element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-blue-600 rounded-br-2xl transition-all duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
