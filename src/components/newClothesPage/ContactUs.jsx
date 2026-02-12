import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Copy, Check } from "lucide-react"; // Added Copy/Check icons
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY_INFO } from "../../constants/siteData";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    previousSource: "",
    message: "",
  });

  // State to track which number was just copied
  const [copiedNumber, setCopiedNumber] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneClick = (e, phone) => {
    // 1. Create the clean number (removes spaces, dashes, etc.)
    const cleanNumber = phone.replace(/[^0-9+]/g, "");

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // On Mobile: The <a> tag's href="tel:..." will use the clean version automatically
      return;
    } else {
      // On Desktop: Prevent call attempt and copy the CLEAN number
      e.preventDefault();

      // 2. USE the cleanNumber here to resolve the warning
      navigator.clipboard.writeText(cleanNumber);

      setCopiedNumber(phone);
      setTimeout(() => setCopiedNumber(null), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const toEmail = COMPANY_INFO.email[0];
    const subject = encodeURIComponent(`Quote Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nPrevious Source: ${formData.previousSource}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      className="relative py-16 lg:py-24 my-12 rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center"
      style={{
        backgroundImage: `url('https://hissenglobal.com/wp-content/uploads/2025/04/bg2.webp')`,
      }}
    >
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
          Get in Touch Now
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          {/* Left Column: Form */}
          <div className="bg-white p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4">
              Get a Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* ... (Your existing input fields stay exactly the same) ... */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Your Email *"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none"
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  placeholder="Your WhatsApp *"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="previousSource"
                  value={formData.previousSource}
                  placeholder="Previous Source?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none"
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none resize-none"
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 group"
              >
                Get Price Now{" "}
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div
            className="relative p-8 lg:p-12 text-white flex flex-col justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url('https://hissenglobal.com/wp-content/uploads/2025/03/bg.webp')`,
            }}
          >
            <div className="absolute inset-0 bg-blue-600/60"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                Welcome to visit our factory
                <span className="block h-1 w-12 bg-[#FFD700]"></span>
              </h3>

              <div className="space-y-8 mt-10">
                {/* Email Section */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-slate-900 shrink-0 transition-transform group-hover:scale-110">
                    <Mail size={24} />
                  </div>
                  <div className="space-y-1 pt-2">
                    {COMPANY_INFO.email.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block text-lg hover:text-[#FFD700] transition-colors"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Section - Stays as Link */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-slate-900 shrink-0 transition-transform group-hover:scale-110">
                    <FaWhatsapp size={24} />
                  </div>
                  <div className="space-y-1 pt-2">
                    {COMPANY_INFO.whatsapp.map((phone) => (
                      <a
                        key={phone}
                        href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-lg hover:text-[#FFD700] transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Phone Section - SMART ACTION */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-slate-900 shrink-0 transition-transform group-hover:scale-110">
                    <Phone size={24} />
                  </div>
                  <div className="space-y-1 pt-2">
                    {COMPANY_INFO.whatsapp.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                        onClick={(e) => handlePhoneClick(e, phone)}
                        className="flex items-center gap-2 text-lg hover:text-[#FFD700] transition-colors cursor-pointer"
                        title="Click to call (Mobile) or copy (Desktop)"
                      >
                        {phone}
                        {copiedNumber === phone ? (
                          <Check
                            size={16}
                            className="text-green-400 animate-bounce"
                          />
                        ) : (
                          <Copy
                            size={14}
                            className="opacity-0 group-hover:opacity-50 transition-opacity hidden md:block"
                          />
                        )}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Address Section */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center text-slate-900 shrink-0 transition-transform group-hover:scale-110">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-1 pt-2">
                    {COMPANY_INFO.address.map((addr) => (
                      <p key={addr} className="text-lg leading-relaxed">
                        {addr}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
