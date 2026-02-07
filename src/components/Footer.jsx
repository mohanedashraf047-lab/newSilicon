// components/layout/Footer.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { COMPANY_INFO } from "../constants/siteData";

const Footer = () => {
  const footerLinks = [
    { name: "New Clothes", path: "/newClothes" },
    { name: "Used Clothes", path: "/usedClothes" },
    { name: "Fabric", path: "/fabric" },
    { name: "About Silicon Value", path: "/about" },
    { name: "Contact Support", path: "/contact" },
  ];

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

    // Create mailto link with form data
    const subject = `Quick Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message and reset form
    setFormStatus("Opening your email client...");
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFormStatus("");
    }, 2000);
  };

  return (
    <footer className="bg-[#FFD700] text-white py-12 sm:py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <img
              src="/logo.jpeg"
              alt="Silicon Value Logo"
              className="w-40 sm:w-48 md:w-56 lg:w-64 object-contain mb-4 mx-auto md:mx-0"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg text-blue-500 border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-700 text-sm sm:text-base hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg text-blue-500 border-b border-white/10 pb-2">
              Contact Us
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-gray-300 focus:border-white focus:bg-white/20 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border-2 border-white/20 bg-white/5 text-white placeholder-gray-300 focus:border-white focus:bg-white/20 outline-none transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="3"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-gray-300 focus:border-white focus:bg-white/20 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-2.5 px-4 rounded-lg transition-all duration-300 active:scale-95 text-sm sm:text-base"
              >
                Send Message
              </button>
              {formStatus && (
                <p className="text-white text-xs sm:text-sm text-center bg-blue-600/50 py-2 rounded-lg">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-blue-600 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center justify-center sm:justify-start">
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📧</span>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-gray-700 hover:text-white transition-colors text-xs sm:text-sm break-all"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📱</span>
              <span className="text-gray-700 text-xs sm:text-sm">
                {COMPANY_INFO.whatsapp[0]}
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📍</span>
              <span className="text-gray-700 text-xs sm:text-sm">
                {COMPANY_INFO.address}
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🏭</span>
              <span className="text-gray-700 text-xs sm:text-sm">
                Factory: {COMPANY_INFO.factorySize}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-600 pt-6 sm:pt-8 ">
          <p className="text-center text-sm sm:text-xl  text-gray-700">
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
