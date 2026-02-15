import React, { useState } from "react";
import { ShieldCheck, Leaf, Truck, Headset, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const { t } = useTranslation(["usedClothes"]);
  const valueProps = t("contactSection.valueProps", { returnObjects: true }) || [];

  // Map icons to translated items
  const icons = [
    <ShieldCheck className="w-8 h-8 text-orange-500" />,
    <Leaf className="w-8 h-8 text-green-500" />,
    <Truck className="w-8 h-8 text-blue-500" />,
    <Headset className="w-8 h-8 text-indigo-500" />,
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column: Value Props */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              <span className="text-orange-500 uppercase tracking-tight">
                {t("contactSection.titleHighlight")}
              </span>{" "}
              <span className="text-slate-900 uppercase">{t("contactSection.titleRest")}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {valueProps.map((prop, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl border border-slate-50 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-orange-100 transition-all duration-300"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {icons[index]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {prop.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full z-0 opacity-50"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {t("contactSection.formTitle")}
                </h3>
                <p className="text-slate-500 mb-8 text-sm">
                  {t("contactSection.formSubtitle")}
                </p>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder={t("contactSection.placeholders.name")}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      required
                    />
                    <input
                      type="email"
                      placeholder={t("contactSection.placeholders.email")}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder={t("contactSection.placeholders.whatsapp")}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    required
                  />

                  <textarea
                    placeholder={t("contactSection.placeholders.message")}
                    rows="4"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                  ></textarea>

                  <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-orange-200 transition-all flex items-center justify-center gap-2 group">
                    {t("contactSection.submitButton")}
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
