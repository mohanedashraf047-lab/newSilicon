import React from "react";
import {
  Cpu,
  Layers,
  Ship,
  ShieldCheck,
  PackageCheck,
  Headset,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Advantages = () => {
  const { t } = useTranslation(["newClothes"]);
  const advantages = t("advantages.items", { returnObjects: true }) || [];

  // Map icons to translated items
  const icons = [
    <Cpu className="w-12 h-12" />,
    <Layers className="w-12 h-12" />,
    <Ship className="w-12 h-12" />,
    <ShieldCheck className="w-12 h-12" />,
    <PackageCheck className="w-12 h-12" />,
    <Headset className="w-12 h-12" />,
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50  overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t("advantages.sectionTitle")}
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Advantage Grid */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-[#FFD700] transition-all duration-500 hover:-translate-y-2 border border-slate-100 hover:border-blue-200 flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-xl bg-blue-50 text-blue-600 transition-colors duration-500 group-hover:bg-blue-600 group-hover:text-white">
                {icons[index]}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base mb-6">
                {item.description}
              </p>

              {/* Decorative Accent */}
              <div className="mt-auto pt-4">
                <div className="w-0 group-hover:w-full h-1 bg-blue-600 transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
