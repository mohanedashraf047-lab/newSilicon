import { Factory, CheckCircle, ShieldCheck } from "lucide-react";

const ICON_MAP = {
  Factory,
  CheckCircle,
  ShieldCheck,
};

const Banner2 = ({
  badge,
  heading,
  headingHighlight,
  paragraphs = [],
  cards = [],
}) => {
  return (
    <section className="py-20 bg-blue-500 overflow-hidden text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side: Content */}
          <div className="w-full lg:w-7/12 space-y-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <ShieldCheck size={16} className="text-white" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">
                {badge}
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              {heading}{" "}
              <span className="text-blue-100 italic">{headingHighlight}</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-blue-50 text-lg leading-relaxed">
              {paragraphs.map((text, idx) => (
                <p
                  key={idx}
                  className={
                    idx === paragraphs.length - 1
                      ? "font-semibold text-white"
                      : ""
                  }
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cards.map((card, idx) => {
                const IconComponent = ICON_MAP[card.icon];
                return (
                  <div
                    key={idx}
                    className="group space-y-4 p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 hover:shadow-xl hover:shadow-[#FFD700]/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#FFD700] rounded-xl text-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {IconComponent && <IconComponent size={24} />}
                      </div>
                      <h4 className="text-xl font-bold text-white tracking-tight">
                        {card.title}
                      </h4>
                    </div>
                    <p
                      className="text-blue-50 text-base leading-relaxed opacity-90"
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Video Placeholder */}
          <div className="w-full lg:w-5/12">
            <div className="relative group">
              {/* Decorative Frame */}
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
