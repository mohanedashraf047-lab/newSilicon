import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY_INFO } from "../constants/siteData";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const duration = showTooltip ? 4000 : 6000;
    const timer = setTimeout(() => setShowTooltip((prev) => !prev), duration);
    return () => clearTimeout(timer);
  }, [showTooltip]);

  const whatsappNumber = COMPANY_INFO.whatsapp[0].replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello, I am interested in your products"
  )}`;

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-22 sm:right-6 md:bottom-24 md:right-8 z-50">
      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-3 transition-all duration-500 ${
          showTooltip
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="relative bg-white text-blue-800 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-lg shadow-lg whitespace-nowrap border border-gray-100">
          <strong className="font-semibold text-[#FFD700] mr-1 bg-blue-700 p-1 rounded-full cursor-pointer">Get Price</strong>, Chat with us!
          {/* Arrow pointing down */}
          <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45" />
        </div>
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full shadow-lg hover:shadow-2xl active:scale-95 transition-all"
      >
        <FaWhatsapp className="text-2xl sm:text-3xl" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
