import { useInView } from "react-intersection-observer";

const SecondHandShoes = ({
  title,
  highlightWord,
  content,
  // Custom theme colors based on your logo
  bgColor = "bg-slate-50",
  cardBg = "bg-white",
  brandBlue = "text-[#003366]", // Professional Deep Blue
  brandGold = "text-[#D4AF37]", // Classic Metallic Gold
  accentBorder = "border-[#D4AF37]",
}) => {
  const { ref: heroRef, inView: heroVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: contentRef, inView: contentVisible } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const titleParts = highlightWord ? title.split(highlightWord) : [title, ""];

  return (
    <section
      className={`py-16 sm:py-20 lg:py-24 ${bgColor} relative overflow-hidden`}
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={heroRef}
          className={`${cardBg} rounded-[2.5rem] p-8 sm:p-12 lg:p-20 shadow-2xl shadow-blue-900/5 border border-slate-100 relative`}
        >
          {/* Decorative Corner */}
          <div
            className={`absolute top-0 right-0 w-32 h-32 border-t-4 border-r-4 ${accentBorder} rounded-tr-[2.5rem] opacity-20`}
          ></div>

          {/* Title Section */}
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2
              className={`text-3xl md:text-5xl lg:text-6xl font-black ${brandBlue} mb-6 tracking-tight leading-tight`}
            >
              {titleParts[0]}
              {highlightWord && (
                <span className="relative inline-block ml-2 mr-2">
                  <span className={brandGold}>{highlightWord}</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#D4AF37] opacity-30 rounded-full"></span>
                </span>
              )}
              {titleParts[1]}
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-1 bg-[#003366] rounded-full"></div>
              <div className="w-3 h-3 border-2 border-[#D4AF37] rotate-45"></div>
              <div className="w-12 h-1 bg-[#003366] rounded-full"></div>
            </div>
          </div>

          {/* Content Section */}
          <div
            ref={contentRef}
            className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6 sm:space-y-8">
              {content.map((paragraph, index) => (
                <div key={index} className="flex gap-4 sm:gap-6 group">
                  {/* Vertical line indicator that glows on hover */}
                  <div className="w-1 bg-slate-100 group-hover:bg-[#D4AF37] transition-colors duration-500 rounded-full hidden sm:block"></div>

                  <p
                    className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-light"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                </div>
              ))}
            </div>

            {/* Signature Accent */}
            <div className="mt-16 flex justify-center">
              <div className="px-6 py-2 border border-slate-200 rounded-full text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
                Premium Quality Standards
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondHandShoes;
