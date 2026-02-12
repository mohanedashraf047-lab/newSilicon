import React, { useState } from "react";
import { ArrowRight, Award, ChevronUp } from "lucide-react";

const ProductGrid = ({ products = [] , productsPage}) => {
  const INITIAL_COUNT = 7;
  const MAX_PRODUCTS = 35;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  // Strictly limit to 35 products
  const limitedProducts = products.slice(0, MAX_PRODUCTS);
  const displayedProducts = limitedProducts.slice(0, visibleCount);

  const hasMore = visibleCount < limitedProducts.length;

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, limitedProducts.length));
  };

  const handleHideAll = () => {
    setVisibleCount(INITIAL_COUNT);
    const element = document.getElementById("product-grid-root");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="product-grid-root" className="py-16 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {displayedProducts.map((product) => {
            // 1. Resolve the URL dynamically for each product
            const imageUrl = new URL(
              `../../assets/${productsPage}/${product.image}`,
              import.meta.url,
            ).href;

            return (
              <div
                key={product.id}
                className="group flex flex-col animate-fade-in"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200">
                  {product.isPremium && (
                    <div className="absolute top-3 right-3 z-20 bg-[#FFD700] text-slate-900 text-[10px] font-black uppercase px-2 py-1 rounded-lg flex items-center gap-1 shadow-md border border-yellow-400">
                      <Award size={12} className="fill-current" />
                      Premium
                    </div>
                  )}

                  <div className="relative aspect-square overflow-hidden">
                    <img
                      // 2. Use the resolved imageUrl here
                      src={imageUrl}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      // 3. Fallback for broken images
                      onError={(e) => {
                        e.target.src =
                          "https://placehold.co/400x400?text=Image+Not+Found";
                      }}
                    />
                    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-5 text-center bg-white">
                    <h4 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}

          {/* CTA Box - Original Design Restored with Counter */}
          {hasMore ? (
            <div onClick={handleShowMore} className="group cursor-pointer">
              <div className="bg-blue-500 rounded-2xl aspect-square flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:bg-blue-700 shadow-md">
                <h3 className="text-white text-2xl font-black mb-2 leading-tight">
                  Explore More <br /> Categories
                </h3>
                {/* Progress Counter */}
                <p className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-6">
                  {visibleCount} / {limitedProducts.length} Products
                </p>
                <div className="w-14 h-14 bg-[#FFD700] rounded-full flex items-center justify-center text-slate-900 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight size={28} />
                </div>
              </div>
            </div>
          ) : (
            <div onClick={handleHideAll} className="group cursor-pointer">
              <div className="bg-slate-900 rounded-2xl aspect-square flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:bg-slate-700 shadow-md">
                <h3 className="text-white text-2xl font-black mb-2 leading-tight">
                  Hide All <br /> Products
                </h3>
                <p className="text-[#FFD700] text-xs font-bold uppercase tracking-widest mb-6">
                  Collection Complete
                </p>
                <div className="w-14 h-14 bg-[#FFD700] rounded-full flex items-center justify-center text-slate-900 group-hover:-translate-y-1 transition-transform duration-300">
                  <ChevronUp size={28} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx="true">{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ProductGrid;
