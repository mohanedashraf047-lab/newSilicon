// components/layout/Footer.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { COMPANY_INFO } from "../constants/siteData";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation(["footer"]);
  const footerLinks = t("quickLinks.items", { returnObjects: true }) || [];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const toEmail = COMPANY_INFO.email[0];
    const subject = encodeURIComponent(`Quick Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );

    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;

    setFormStatus(t("form.sending"));
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFormStatus("");
    }, 2000);
  };

  return (
    <footer className="bg-[#FFD700] py-12 sm:py-14">
      <div className="container mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-10">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col items-center sm:items-start">
            <img
              src="/logo.jpeg"
              alt="Silicon Value Logo"
              className="w-40 sm:w-48 lg:w-56 object-contain mb-4"
            />
            <p className="text-gray-800 text-xs sm:text-sm text-center sm:text-start leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-bold mb-4 text-base sm:text-lg text-blue-600 pb-2 border-b-2 border-blue-600/30">
              {t("quickLinks.title")}
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-800 text-sm sm:text-base hover:text-blue-700 transition-all duration-200 flex items-center group"
                  >
                    <span className="me-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      ›
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div className="sm:col-span-2 lg:col-span-6">
            <h4 className="font-bold mb-4 text-base sm:text-lg text-blue-600 pb-2 border-b-2 border-blue-600/30">
              {t("form.title")}
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("form.placeholders.name")}
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("form.placeholders.email")}
                  required
                  className="w-full px-4 py-2.5 text-sm rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("form.placeholders.message")}
                required
                rows="3"
                className="w-full px-4 py-2.5 text-sm rounded-lg bg-white/80 text-gray-900 placeholder-gray-500 border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-8 rounded-lg transition-all duration-300 active:scale-95 text-sm"
              >
                {t("form.submitButton")}
              </button>
              {formStatus && (
                <p className="text-blue-700 text-xs sm:text-sm font-medium">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t-2 border-blue-600/30 pt-6 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
            {/* Emails */}
            <div className="flex items-start gap-3">
              <span className="text-lg sm:text-xl shrink-0 mt-0.5">📧</span>
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                  {t("contactBar.emailLabel")}
                </p>
                {COMPANY_INFO.email.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-gray-800 hover:text-blue-700 transition-colors text-sm break-all"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-3">
              <FaWhatsapp className="w-5 h-5 shrink-0 mt-0.5 text-blue-700" />
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                  {t("contactBar.whatsappLabel")}
                </p>
                {COMPANY_INFO.whatsapp.map((phone) => (
                  <a
                    key={phone}
                    href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-800 hover:text-blue-700 transition-colors text-sm"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <span className="text-lg sm:text-xl shrink-0 mt-0.5">📍</span>
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                  {t("contactBar.locationLabel")}
                </p>
                {COMPANY_INFO.address.map((addr) => (
                  <p key={addr} className="text-gray-800 text-sm">
                    {addr}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-blue-600/30 pt-6">
          <p className="text-center text-sm sm:text-base text-gray-800">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
