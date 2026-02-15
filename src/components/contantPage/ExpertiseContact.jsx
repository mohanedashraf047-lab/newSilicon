import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import {
  Package,
  ShieldCheck,
  Layers,
  Clock,
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Globe,
  MessageCircle,
} from "lucide-react";

const ExpertiseContact = () => {
  const { t } = useTranslation(["contact"]);
  const features = t("expertise.features", { returnObjects: true }) || [];

  // Map icons to translated items
  const icons = [
    <Package className="w-10 h-10 text-[#D4AF37]" />,
    <ShieldCheck className="w-10 h-10 text-[#003366]" />,
    <Layers className="w-10 h-10 text-[#D4AF37]" />,
    <Clock className="w-10 h-10 text-[#003366]" />,
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openWhatsApp = (number) => {
    const cleanNumber = number.replace(/\s+/g, "").replace("+", "");
    const message = encodeURIComponent(
      "Hello Silicon Value Team, I would like to inquire about your services.",
    );
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, "_blank");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: t("expertise.swalTitle"),
      text: t("expertise.swalText"),
      icon: "success",
      confirmButtonColor: "#003366",
      confirmButtonText: t("expertise.swalButton"),
      timer: 3000,
      timerProgressBar: true,
    }).then(() => {
      const recipient = "info@siliconvalue.org";
      const cc = "maryceo@siliconvalue.org,ademceo@siliconvalue.org";
      const subject = `Inquiry from ${formData.name} - Silicon Value Partnership`;
      const body = `
Dear Silicon Value Team,

I am reaching out to request a professional quotation and explore potential cooperation.

--- CLIENT DETAILS ---
Name: ${formData.name}
Email: ${formData.email || "Not provided"}
WhatsApp/Tel: ${formData.whatsapp}

--- MESSAGE ---
${formData.message}

---
Sent via SiliconValue.org Inquiry Portal
      `.trim();

      const mailtoLink = `mailto:${recipient}?cc=${cc}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    });
  };

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* HERO SECTION - Enhanced Top Padding for visibility */}
      <div className="relative min-h-[350px] md:min-h-[450px] w-full flex items-center justify-center bg-[#003366] px-4 pt-24 pb-12">
        <div className="absolute inset-0 z-0 opacity-40 bg-gradient-to-br from-[#003366] via-[#004a8f] to-[#001f3d] animate-gradient-slow"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="relative z-10 w-full max-w-5xl text-center">
          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-tight animate-fade-in">
            {t("expertise.heroTitle")}{" "}
            <span className="text-[#D4AF37] block mt-2 animate-shimmer bg-gradient-to-r from-[#D4AF37] via-[#f1d57a] to-[#D4AF37] bg-[length:200%_auto] bg-clip-text text-transparent">
              {t("expertise.heroHighlight")}
            </span>
          </h1>
          <div className="mt-6 w-16 md:w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full shadow-lg animate-width-grow"></div>
        </div>
      </div>

      <section className="py-12 md:py-20 container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Side: Expertise */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#003366] leading-tight">
                {t("expertise.heading")} <br className="hidden sm:block" />
                <span className="text-[#D4AF37] inline-flex items-center gap-3">
                  {t("expertise.headingHighlight")}{" "}
                  <Globe
                    size={32}
                    className="animate-spin-slow text-[#D4AF37]"
                  />
                </span>
              </h2>
              <p className="text-slate-600 text-lg border-s-4 border-[#D4AF37] ps-6 max-w-xl italic">
                {t("expertise.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {icons[index]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Card */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-8">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-50 overflow-hidden">
              <div className="bg-[#003366] py-6 text-center border-b-4 border-[#D4AF37]">
                <div className="text-white font-bold text-2xl tracking-[0.2em] uppercase">
                  SILICON<span className="text-[#D4AF37]">VALUE</span>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      name="name"
                      onChange={handleChange}
                      placeholder={t("expertise.formPlaceholders.name")}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-[#D4AF37] outline-none transition-all"
                      required
                    />
                    <input
                      name="email"
                      onChange={handleChange}
                      type="email"
                      placeholder={t("expertise.formPlaceholders.email")}
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-[#D4AF37] outline-none transition-all"
                    />
                  </div>
                  <input
                    name="whatsapp"
                    onChange={handleChange}
                    placeholder={t("expertise.formPlaceholders.whatsapp")}
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-[#D4AF37] outline-none transition-all"
                    required
                  />
                  <textarea
                    name="message"
                    onChange={handleChange}
                    placeholder={t("expertise.formPlaceholders.message")}
                    rows="4"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-[#D4AF37] outline-none transition-all resize-none"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-[#003366] hover:bg-[#001f3d] text-white font-bold py-5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 group"
                  >
                    <span className="uppercase tracking-widest">
                      {t("expertise.submitButton")}
                    </span>
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-8 px-4 space-y-8">
              {/* Email Section - Centered & Modernized */}
              <div className="flex flex-col items-center justify-center border-b border-slate-100 pb-8">
                <a
                  href="mailto:info@siliconvalue.org"
                  className="group relative flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-2xl border border-slate-200 transition-all duration-300 hover:bg-white hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/10 hover:-translate-y-1"
                >
                  {/* Icon with a subtle pulse */}
                  <div className="relative">
                    <Mail size={20} className="text-[#D4AF37] relative z-10" />
                    <div className="absolute inset-0 bg-[#D4AF37]/20 blur-md rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                  </div>

                  <span className="text-base md:text-lg font-bold text-slate-700 group-hover:text-[#003366] transition-colors">
                    info@siliconvalue.org
                  </span>

                  {/* Subtle "Send Mail" hint that appears on hover */}
                  <span className="ms-2 text-[10px] font-black uppercase tracking-widest text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                    {t("expertise.sendMail")}
                  </span>
                </a>
              </div>

              {/* WhatsApp Hubs (Kept consistent with the new style) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto">
                {[
                  { label: t("expertise.chinaHQ"), phone: "+86 132 7223 4047" },
                  { label: t("expertise.egyptHub"), phone: "+20 11 5859 5725" },
                ].map((hub) => (
                  <div
                    key={hub.label}
                    className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-start space-y-2"
                    onClick={() => openWhatsApp(hub.phone)}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[#D4AF37]" />
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#003366]">
                        {hub.label}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm md:text-base font-bold text-slate-700 group-hover:text-[#25D366] transition-colors">
                      <Phone size={14} />
                      <span>{hub.phone}</span>
                    </div>

                    <p className="text-[9px] text-slate-400 uppercase font-bold tracking-tighter group-hover:text-slate-600">
                      {t("expertise.clickToChat")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        @keyframes gradient-slow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 10s ease-in-out infinite;
        }
        @keyframes shimmer {
          to {
            background-position: 200% center;
          }
        }
        .animate-shimmer {
          animation: shimmer 4s linear infinite;
        }
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
          animation: fade-in 1.2s ease-out forwards;
        }
        @keyframes width-grow {
          from {
            width: 0;
          }
          to {
            width: 4rem;
          }
        }
        .animate-width-grow {
          animation: width-grow 1.8s ease-out forwards;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: rotate 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ExpertiseContact;
