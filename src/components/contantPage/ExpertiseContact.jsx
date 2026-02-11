import React, { useState } from "react";
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
      title: "Request Ready!",
      text: "Opening your email client to notify our executive team...",
      icon: "success",
      confirmButtonColor: "#003366",
      confirmButtonText: "Proceed to Email",
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

  const features = [
    {
      icon: <Package className="w-10 h-10 text-[#D4AF37]" />,
      title: "Steady Supply",
      desc: "Leveraging Silicon Value's global network for uninterrupted inventory flow.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#003366]" />,
      title: "Stable Quality",
      desc: "Our rigorous inspection protocols ensure every shipment meets our premium standard.",
    },
    {
      icon: <Layers className="w-10 h-10 text-[#D4AF37]" />,
      title: "Multi-category",
      desc: "A vast portfolio of high-demand categories tailored for international markets.",
    },
    {
      icon: <Clock className="w-10 h-10 text-[#003366]" />,
      title: "7×24 Service",
      desc: "Dedicated account managers available across all time zones for elite support.",
    },
  ];

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* HERO SECTION - Enhanced Top Padding for visibility */}
      <div className="relative min-h-[350px] md:min-h-[450px] w-full flex items-center justify-center bg-[#003366] px-4 pt-24 pb-12">
        <div className="absolute inset-0 z-0 opacity-40 bg-gradient-to-br from-[#003366] via-[#004a8f] to-[#001f3d] animate-gradient-slow"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="relative z-10 w-full max-w-5xl text-center">
          <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-tight animate-fade-in">
            Trusted Because Of{" "}
            <span className="text-[#D4AF37] block mt-2 animate-shimmer bg-gradient-to-r from-[#D4AF37] via-[#f1d57a] to-[#D4AF37] bg-[length:200%_auto] bg-clip-text text-transparent">
              Professionalism
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
                Our expertise is here <br className="hidden sm:block" />
                <span className="text-[#D4AF37] inline-flex items-center gap-3">
                  to serve you{" "}
                  <Globe
                    size={32}
                    className="animate-spin-slow text-[#D4AF37]"
                  />
                </span>
              </h2>
              <p className="text-slate-600 text-lg border-l-4 border-[#D4AF37] pl-6 max-w-xl italic">
                Silicon Value is committed to professional logistics and quality
                assurance for our global partners.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
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
                      placeholder="Name*"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-[#D4AF37] outline-none transition-all"
                      required
                    />
                    <input
                      name="email"
                      onChange={handleChange}
                      type="email"
                      placeholder="Email"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-[#D4AF37] outline-none transition-all"
                    />
                  </div>
                  <input
                    name="whatsapp"
                    onChange={handleChange}
                    placeholder="WhatsApp/Phone*"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-[#D4AF37] outline-none transition-all"
                    required
                  />
                  <textarea
                    name="message"
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows="4"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-[#D4AF37] outline-none transition-all resize-none"
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full bg-[#003366] hover:bg-[#001f3d] text-white font-bold py-5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 group"
                  >
                    <span className="uppercase tracking-widest">
                      Get Price Now
                    </span>
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                </form>
              </div>
            </div>

            {/* Emails and Numbers Footer */}
            <div className="mt-8 px-4 space-y-6">
              <div className="flex flex-col gap-4 border-b border-slate-100 pb-6">
                <div className="flex flex-wrap items-center gap-4">
                  <Mail size={18} className="text-[#D4AF37]" />
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-bold text-slate-700">
                    <span>info@siliconvalue.org</span>
                    <span className="text-slate-300 hidden md:inline">|</span>
                    <span>maryceo@siliconvalue.org</span>
                    <span className="text-slate-300 hidden md:inline">|</span>
                    <span>ademceo@siliconvalue.org</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div
                  className="space-y-2 cursor-pointer group"
                  onClick={() => openWhatsApp("+86 132 7223 4047")}
                >
                  <div className="flex items-center gap-2 text-[#003366]">
                    <MapPin size={16} className="text-[#D4AF37]" />
                    <p className="text-[10px] font-black uppercase tracking-widest">
                      China HQ
                    </p>
                  </div>
                  <p className="text-sm font-bold text-slate-700 group-hover:text-[#25D366] flex items-center gap-2 transition-colors">
                    <Phone size={14} /> +86 132 7223 4047
                  </p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-tighter">
                    Tap for WhatsApp
                  </p>
                </div>

                <div
                  className="space-y-2 cursor-pointer group"
                  onClick={() => openWhatsApp("+20 11 5859 5725")}
                >
                  <div className="flex items-center gap-2 text-[#003366]">
                    <MapPin size={16} className="text-[#D4AF37]" />
                    <p className="text-[10px] font-black uppercase tracking-widest">
                      Egypt Hub
                    </p>
                  </div>
                  <p className="text-sm font-bold text-slate-700 group-hover:text-[#25D366] flex items-center gap-2 transition-colors">
                    <Phone size={14} /> +20 11 5859 5725
                  </p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-tighter">
                    Tap for WhatsApp
                  </p>
                </div>
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
