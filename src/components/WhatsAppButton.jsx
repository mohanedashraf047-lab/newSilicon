import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { COMPANY_INFO } from "../constants/siteData";
import { useTranslation } from "react-i18next";

const WhatsAppButton = () => {
  const { t, i18n } = useTranslation(["common"]);
  const [showTooltip, setShowTooltip] = useState(true);
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    const duration = showTooltip ? 4000 : 6000;
    const timer = setTimeout(() => setShowTooltip((prev) => !prev), duration);
    return () => clearTimeout(timer);
  }, [showTooltip]);

  const whatsappNumber = COMPANY_INFO.whatsapp[0].replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    t("whatsapp.defaultMessage")
  )}`;

  return (
    <div
      className={`fixed bottom-20 z-50 ${
        isRTL
          ? "left-4 sm:left-6 md:left-8"
          : "right-4 sm:right-6 md:right-8"
      }`}
    >
      {/* Tooltip */}
      <div
        className={`absolute bottom-full mb-3 transition-all duration-500 ${
          isRTL ? "left-0" : "right-0"
        } ${
          showTooltip
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="relative bg-white text-blue-800 text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-lg shadow-lg whitespace-nowrap border border-gray-100">
          <strong className="font-semibold text-[#FFD700] me-1 bg-blue-700 p-1 rounded-full cursor-pointer">
            {t("whatsapp.getPrice")}
          </strong>
          , {t("whatsapp.tooltip")}
          {/* Arrow pointing down */}
          <div
            className={`absolute -bottom-1.5 w-3 h-3 bg-white border-r border-b border-gray-100 rotate-45 ${
              isRTL ? "left-5" : "right-5"
            }`}
          />
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
