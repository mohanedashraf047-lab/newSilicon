import React from "react";
import { ArrowRight, MessageSquare, Award } from "lucide-react";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "Used Mixed Clothes",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Used Men's Wear",
      image:
        "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Used Brand Clothes",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
      isPremium: true, // This triggers the badge
    },
    {
      id: 4,
      title: "Used Winter Clothes",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Used Ladies Wear",
      image:
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Used Kids Clothes",
      image:
        "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Used Summer Clothes",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200">
                {/* Premium Badge Logic */}
                {product.isPremium && (
                  <div className="absolute top-3 right-3 z-20 bg-[#FFD700] text-slate-900 text-[10px] font-black uppercase px-2 py-1 rounded-lg flex items-center gap-1 shadow-md border border-yellow-400">
                    <Award size={12} className="fill-current" />
                    Premium
                  </div>
                )}

                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5 text-center bg-white">
                  <h4 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}

          {/* "More Products" CTA Box */}
          <div className="group cursor-pointer">
            <div className="bg-slate-900 rounded-2xl aspect-square flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:bg-blue-700 shadow-md">
              <h3 className="text-white text-2xl font-black mb-6 leading-tight">
                Explore More <br /> Categories
              </h3>
              <div className="w-14 h-14 bg-[#FFD700] rounded-full flex items-center justify-center text-slate-900 group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
