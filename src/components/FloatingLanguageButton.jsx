import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';

const FloatingLanguageButton = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = i18n.language === 'ar';
  const closeTimerRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
  };

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed bottom-20 z-50 ${isRTL ? 'right-4 sm:right-6 md:right-8' : 'left-4 sm:left-6 md:left-8'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        {/* Language Options Dropdown */}
        {isOpen && (
          <div
            className={`absolute bottom-full mb-3 ${isRTL ? 'right-0' : 'left-0'} bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden min-w-[180px] animate-fadeIn`}
            style={{ animation: 'fadeIn 0.2s ease-out' }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full px-4 py-3 flex items-center gap-3 transition-all duration-200 ${
                  i18n.language === lang.code
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                } ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-medium text-sm flex-1">{lang.name}</span>
                {i18n.language === lang.code && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Main Globe Button */}
        <button
          className="group relative bg-gradient-to-br from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white w-13 h-13 sm:w-14 sm:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center active:scale-95"
          aria-label="Change Language"
          title={currentLanguage?.name}
        >
          <Globe className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" />
          <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-base shadow-md border-2 border-blue-500">
            {currentLanguage?.flag}
          </span>
        </button>
      </div>
    </div>
  );
};

export default FloatingLanguageButton;
