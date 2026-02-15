import {
  ShieldCheck,
  Box,
  Globe,
  MessageSquare,
  Gem,
  Ship,
  Palette,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const ICON_MAP = {
  ShieldCheck,
  Box,
  Globe,
  MessageSquare,
  Gem,
  Ship,
  Palette,
};

const WhyChooseUs = ({ title, highlightWord, subtitle, features = [] }) => {
  const { t } = useTranslation(["common"]);
  const titleParts = highlightWord ? title.split(highlightWord) : [title, ""];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            {titleParts[0]}
            {highlightWord && (
              <span className="text-indigo-600">{highlightWord}</span>
            )}
            {titleParts[1]}
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-600 font-medium italic">
              {subtitle}
            </p>
          )}
          <div className="mt-6 w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {features.map((feature) => {
            const IconComponent = ICON_MAP[feature.icon];
            return (
              <div
                key={feature.id}
                className="group bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out"
              >
                <div className="flex flex-col items-start gap-6">
                  <div className="p-5 bg-slate-50 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 transition-all duration-300">
                    {IconComponent && (
                      <IconComponent className="w-10 h-10 transition-colors duration-300" />
                    )}
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
            );
          })}
        </div>

        {/* Trust Footer */}
        <div className="mt-20 flex flex-col items-center justify-center space-y-4">
          <div className="h-px w-full max-w-lg bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-xs">
            {t("trustFooter")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
