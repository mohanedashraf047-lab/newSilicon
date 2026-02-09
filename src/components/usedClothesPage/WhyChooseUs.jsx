import React from "react";
import { ShieldCheck, Box, Globe, MessageSquare } from "lucide-react";

const WhyChooseSilicon = () => {
  const features = [
    {
      id: 1,
      title: "Quality Control",
      icon: (
        <ShieldCheck className="w-10 h-10 transition-colors duration-300" />
      ),
      description:
        "At Silicon Value, we maintain strict quality standards to ensure that every piece of used clothing we provide is not only good but also useful for the buyer. Our team inspects each item carefully, ensuring there are no holes, tears, or stains. We also make sure that the clothes are clean, in good condition, and in consistent sizes, offering a variety of brands, including both well-known international labels and quality local brands",
    },
    {
      id: 2,
      title: "Packaging",
      icon: <Box className="w-10 h-10 transition-colors duration-300" />,
      description:
        "We can pack more efficiently than most suppliers. While others may only pack 900 bags of used clothes in a 40-foot container, we can pack up to 1,050 bags. This efficiency helps us reduce shipping costs for you. Given the challenges of international shipping, we ensure our packaging is sturdy and able to withstand the journey to ensure your clothes arrive in excellent condition",
    },
    {
      id: 3,
      title: "Transportation",
      icon: <Globe className="w-10 h-10 transition-colors duration-300" />,
      description:
        "How do our used clothes reach you? We work with all major shipping companies to ensure the best transportation options at the most competitive rates. With our deep partnerships and a strong price advantage, we help you save on shipping costs. Additionally, we offer customs clearance services at several major ports, especially in Africa, saving you both time and effort.",
    },
    {
      id: 4,
      title: "After sales Service",
      icon: (
        <MessageSquare className="w-10 h-10 transition-colors duration-300" />
      ),
      description:
        "Our professional sales team is committed to providing full after sales support for all your used clothing orders. From production and loading to shipping and customs clearance, we make sure the entire process is seamless. For your peace of mind, we send daily quality inspection reports and videos, keeping you informed at every step of the process",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Why Choose <span className="text-indigo-600">Silicon Value</span>{" "}
            Used Clothes
          </h2>
          <p className="text-lg text-slate-600 font-medium italic">
            Quality You Can Trust, Value You Can Measure.
          </p>
          <div className="mt-6 w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out"
            >
              <div className="flex flex-col items-start gap-6">
                {/* Icon Circle with Hover Effect */}
                <div className="p-5 bg-slate-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 transition-all duration-300">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Footer */}
        <div className="mt-20 flex flex-col items-center justify-center space-y-4">
          <div className="h-px w-full max-w-lg bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">
            Efficiency • Quality • Reliability
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSilicon;
