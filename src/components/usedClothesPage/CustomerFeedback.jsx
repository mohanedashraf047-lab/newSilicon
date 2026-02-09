import React from "react";
import { Quote, Star } from "lucide-react";

const CustomerFeedback = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Farsi",
      // Professional portrait of an Arabic businessman
      image:
        "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=200&h=200&auto=format&fit=crop",
      text: "Silicon Value’s used shoes are of very good quality. We have been working together for three years across our Dubai outlets and they have never let me down. Their consistency is unmatched.",
      role: "Gulf Retail Group",
    },
    {
      id: 2,
      name: "Fatima Mansour",
      // Professional portrait of an Arabic businesswoman
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop",
      text: "The team at Silicon Value is very creditworthy. Just 3 days after payment, our container for Cairo was loaded and shipped. This efficiency solved our urgent inventory needs perfectly.",
      role: "North Africa Logistics",
    },
    {
      id: 3,
      name: "Yousef El-Sayed",
      // Professional portrait of an Arabic entrepreneur
      image:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=200&h=200&auto=format&fit=crop",
      text: "I bought from other factories before Silicon Value, but I was disappointed every time. Choosing them brought us great benefits in the Saudi market; the stable quality is something others can't achieve.",
      role: "Jeddah Trade House",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Customer <span className="text-indigo-600">Feedback</span>
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-4xl shadow-sm border border-slate-100 relative group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Floating Quote Icon */}
              <div className="absolute -top-4 -right-4 bg-indigo-600 text-white p-3 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Quote size={20} fill="currentColor" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Feedback Text */}
              <p className="text-slate-600 italic leading-relaxed text-lg mb-8">
                "{item.text}"
              </p>

              {/* User Profile */}
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-indigo-50"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-xl">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600 font-medium text-sm tracking-wide uppercase">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Mark */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 font-semibold italic">
            Joined by 500+ satisfied business partners worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
