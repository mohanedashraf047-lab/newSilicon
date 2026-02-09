import React from "react";
import { Heart, Star, Gift, Plus } from "lucide-react";

const CategoryBrowser = () => {
  const categories = [
    {
      title: "Used Clothes",
      icon: <Heart size={20} className="text-rose-500" />,
      items: [
        "Used Summer Clothes",
        "Used Winter Clothes",
        "Used Ladies Clothes",
        "Used Men Clothes",
        "Used Kids Clothes",
      ],
    },
    {
      title: "Used Shoes",
      icon: <Star size={20} className="text-amber-500" />,
      items: [
        "Used Mix Shoes",
        "Used Branded Clothes",
        "Used Football Shoes",
        "Used Sneakers",
        "Used Fashion Lady Shoes",
      ],
    },
    {
      title: "Used Bags",
      icon: <Gift size={20} className="text-blue-500" />,
      items: [
        "Used Mixed Bags",
        "Used Ladies Bags",
        "Used School Bags",
        "Used Branded Bags",
        "Used Backpack",
      ],
    },
    {
      title: "Other Items",
      icon: <Plus size={20} className="text-emerald-500" />,
      items: [
        "Used Toys",
        "Second Hand Curtain",
        "Used Bed Sheet",
        "Second Hand Blanket",
        "Second Hand Cap",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">
            Browse Our Product Categories
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Hero Banner for Categories */}
        <AnimatedBanner />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-slate-100">
                <div className="p-2 bg-slate-50 rounded-lg">{cat.icon}</div>
                <h4 className="font-black text-slate-900 uppercase tracking-wider text-sm">
                  {cat.title}
                </h4>
              </div>

              {/* Items List */}
              <div className="flex flex-col space-y-2">
                {cat.items.map((item, i) => (
                  <button
                    key={i}
                    className="group flex items-center justify-between p-3 rounded-xl  border border-transparent transition-all duration-200 text-left"
                  >
                    <span className="text-slate-600  font-medium transition-colors pl-6">
                      {item}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryBrowser;

const AnimatedBanner = () => {
  return (
    <div className="relative mb-16 rounded-3xl overflow-hidden bg-slate-900 h-48 md:h-64 flex items-center justify-center">
      {/* 1. THE IMAGE: Slowly zooms and pans automatically every 10 seconds */}
      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
        alt="Warehouse"
        className="absolute inset-0 w-full h-full object-cover opacity-50 animate-ken-burns"
      />

      {/* 2. THE LIGHT SHIMMER: Sweeps across the banner every 4 seconds */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-auto-shimmer pointer-events-none"></div>

      {/* 3. THE TEXT: Pulses slightly to stay dynamic */}
      <div className="relative z-10 text-center px-4 animate-float">
        <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight drop-shadow-lg">
          Used Clothes & Used Shoes & Used Bags
        </h3>
        <p className="text-indigo-300 mt-2 font-medium tracking-wide">
          Premium Grade Quality • Global Shipping
        </p>

        {/* Automatic expanding/shrinking bar */}
        <div className="mt-4 h-1 bg-indigo-500 mx-auto rounded-full animate-grow-shrink"></div>
      </div>

      {/* Add this CSS to your global stylesheet or a <style> tag */}
      <style jsx>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          50% {
            transform: scale(1.15) translate(-1%, -1%);
          }
          100% {
            transform: scale(1) translate(0, 0);
          }
        }

        @keyframes auto-shimmer {
          0% {
            transform: translateX(-100%);
          }
          30% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes grow-shrink {
          0%,
          100% {
            width: 40px;
            opacity: 0.5;
          }
          50% {
            width: 120px;
            opacity: 1;
          }
        }

        .animate-ken-burns {
          animation: ken-burns 12s infinite ease-in-out;
        }

        .animate-auto-shimmer {
          animation: auto-shimmer 5s infinite;
        }

        .animate-float {
          animation: float 4s infinite ease-in-out;
        }

        .animate-grow-shrink {
          animation: grow-shrink 4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};
