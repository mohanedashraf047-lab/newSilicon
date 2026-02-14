
import { useIntersectionObserver } from "../../hooks";
import { useTranslation } from "react-i18next";
import {
  Zap,
  CheckCircle,
  Users,
  Truck,
  Globe,
  BarChart3,
} from "lucide-react";

const WhySiliconValue = () => {
  const { t } = useTranslation(["home"]);

  const iconMap = {
    "raw-materials": Zap,
    "quality-control": CheckCircle,
    "trusted-by-customers-worldwide": Users,
    "fast-delivery": Truck,
    "serving-customers-across-continents": Globe,
    "global-reach": BarChart3,
  };

  const whySiliconValueItems = t("whySiliconValue", { returnObjects: true }) || [];
  // Ensure your hook returns an array [ref, isVisible]
  // and handle potential undefined state
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            {t("whyChooseSection.title")}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            {t("whyChooseSection.description")}
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* 1. Added a safety check to ensure data exists before mapping */}
          {whySiliconValueItems &&
            whySiliconValueItems.map((item, index) => {
              // 2. Get the icon component from iconMap using item.id
              const IconComponent = iconMap[item.id];

              return (
                <div
                  key={item.id || index}
                  className={`text-center p-8 bg-slate-50 rounded-2xl border border-slate-100 transition-all duration-500 ${
                    isVisible
                      ? "animate-fade-in-up opacity-100"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* 3. Render the Lucide icon as a component, not a variable */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-blue-100 rounded-xl text-blue-600">
                      {IconComponent ? (
                        <IconComponent size={40} strokeWidth={1.5} />
                      ) : (
                        "✨"
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default WhySiliconValue;
