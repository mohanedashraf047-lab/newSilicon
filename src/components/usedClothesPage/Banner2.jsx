import { Factory, CheckCircle, ShieldCheck } from "lucide-react";
import { useState } from "react";

const ICON_MAP = {
  Factory,
  CheckCircle,
  ShieldCheck,
};

const generateParticles = (count) => {
  return [...Array(count)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 4 + 1}px`,
    duration: `${Math.random() * 3 + 2}s`,
    delay: `${Math.random() * 5}s`,
  }));
};

const Banner2 = ({
  badge,
  heading,
  headingHighlight,
  paragraphs = [],
  cards = [],
}) => {
  const [particles] = useState(() => generateParticles(12));

  return (
    <section className="py-24 bg-blue-600 overflow-hidden text-white relative">
      {/* 1. ANIMATED BACKGROUND BLOB & GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500 via-blue-700 to-blue-900 opacity-50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />

      {/* 2. BACKGROUND PARTICLES (Twinkling Effect) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              "--duration": p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* 3. FLOATING DECO ELEMENTS (Bubbles) */}
      {/* Top-Left Bubble (Smaller/Slower) */}
      <div
        className="absolute top-10 left-10 w-24 h-24 rounded-full 
             bg-linear-to-tr from-blue-300/10 to-transparent 
             backdrop-blur-[1px] border border-white/5 
             animate-float-slow z-0"
      >
        <div className="absolute inset-2 rounded-full bg-blue-400/5 blur-lg" />
      </div>

      {/* Bottom-Right Bubble (Main/Modern) */}
      <div
        className="absolute bottom-10 right-10 w-44 h-44 rounded-full 
             bg-linear-to-br from-amber-200/20 to-transparent 
             backdrop-blur-[2px] border border-white/10 
             shadow-[0_8px_32px_0_rgba(255,215,0,0.1)] 
             animate-float z-0"
      >
        <div className="absolute inset-4 rounded-full bg-amber-400/10 blur-xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Content with Fade-In Animation */}
          <div className="text-center mb-16 space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors cursor-default">
              <ShieldCheck
                size={18}
                className="text-[#FFD700] animate-spin-slow"
              />
              <span className="text-white font-bold text-xs uppercase tracking-[0.2em]">
                {badge}
              </span>
            </div>

            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-none">
              {heading} <br />
              <span className="bg-linear-to-r from-blue-400 to-[#FFD700] bg-clip-text text-transparent italic font-serif">
                {headingHighlight}
              </span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 pt-4 opacity-90">
              {paragraphs.map((text, idx) => (
                <p
                  key={idx}
                  className={`text-lg md:text-xl leading-relaxed transition-all duration-700 delay-300 ${
                    idx === paragraphs.length - 1
                      ? "text-[#FFD700] font-bold scale-105"
                      : "text-blue-50"
                  }`}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Dual Card Layout with Entrance and Hover Effects */}
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
            {cards.map((card, idx) => {
              const IconComponent = ICON_MAP[card.icon];
              return (
                <div
                  key={idx}
                  style={{ animationDelay: `${idx * 0.2}s` }}
                  className="animate-fade-up flex-1 max-w-112.5 group relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/15 hover:border-[#FFD700]/50 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                >
                  {/* Outer Glow on Hover */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-[#FFD700]/0 group-hover:bg-[#FFD700]/5 transition-colors duration-500" />

                  <div className="relative z-10 space-y-6">
                    <div className="w-16 h-16 bg-[#FFD700] rounded-2xl flex items-center justify-center text-blue-900 shadow-[0_10px_30px_rgba(255,215,0,0.3)] group-hover:rotate-15 group-hover:scale-110 transition-transform duration-300">
                      {IconComponent && <IconComponent size={32} />}
                    </div>

                    <h4 className="text-2xl font-bold tracking-tight text-white group-hover:text-[#FFD700] transition-colors">
                      {card.title}
                    </h4>

                    <p
                      className="text-blue-100/80 leading-relaxed text-base md:text-lg transition-opacity group-hover:opacity-100"
                      dangerouslySetInnerHTML={{ __html: card.description }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CUSTOM CSS FOR ANIMATIONS */}
      <style jsx="true">{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(5deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(20px, 20px);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.5);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle var(--duration, 4s) ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Banner2;
