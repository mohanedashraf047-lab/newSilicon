import React, { useEffect, useRef, useState } from "react";
import { CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const ComparisonSection = () => {
  const { t } = useTranslation(["usedClothes"]);
  const siliconValueFeatures = t("comparison.siliconValueFeatures", { returnObjects: true }) || [];
  const otherSupplierFeatures = t("comparison.otherSupplierFeatures", { returnObjects: true }) || [];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            {t("comparison.title")} <span className="text-blue-600">{t("comparison.titleHighlight")}</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            {t("comparison.subtitle")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-0 bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl">
          {/* Silicon Value Side (The "Winner") */}
          <div className="w-full lg:w-1/2 bg-blue-600 p-8 md:p-12 text-white relative">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <CheckCircle2 size={120} />
            </div>

            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <CheckCircle2 className="text-blue-200" />
              {t("comparison.siliconValueLabel")}
            </h3>

            <div className="space-y-8">
              {siliconValueFeatures.map((f, i) => (
                <ScrollRevealItem key={i}>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-white/20 p-1 rounded-full h-fit">
                      <CheckCircle2 size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{f.title}</h4>
                      <p className="text-blue-100 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </ScrollRevealItem>
              ))}
            </div>
          </div>

          {/* Other Suppliers Side */}
          <div className="w-full lg:w-1/2 bg-slate-50 p-8 md:p-12 text-slate-600">
            <h3 className="text-3xl font-bold mb-10 text-slate-400 flex items-center gap-3">
              <XCircle />
              {t("comparison.otherSuppliersLabel")}
            </h3>

            <div className="space-y-8">
              {otherSupplierFeatures.map((text, i) => (
                <div key={i} className="flex gap-4 opacity-60">
                  <div className="mt-1 bg-slate-200 p-1 rounded-full h-fit">
                    <XCircle size={18} className="text-slate-400" />
                  </div>
                  <p className="text-lg leading-snug">{text}</p>
                </div>
              ))}
            </div>

            {/* Warning Box */}
            <div className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100">
              <p className="text-amber-800 text-sm font-medium italic">
                {t("comparison.warningText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper component to handle mobile scroll highlighting
const ScrollRevealItem = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.8 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${
        isVisible
          ? "translate-x-0 opacity-100 scale-100"
          : "md:opacity-100 -translate-x-4 opacity-30 scale-95"
      }`}
    >
      {children}
    </div>
  );
};

export default ComparisonSection;
