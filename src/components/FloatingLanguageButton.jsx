import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const FloatingLanguageButton = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isRTL = i18n.language === 'ar';

  // Detect scroll to hide/show floating button
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  if (!scrolled) return null;

  return (
    <div className={`fixed bottom-20 z-40 ${isRTL ? 'right-4 sm:right-6 md:right-8' : 'left-4 sm:left-6 md:left-8'}`}>
      {/* Language Options */}
      {isOpen && (
        <div className={`absolute bottom-16 ${isRTL ? 'right-0' : 'left-0'} bg-white border-2 border-gray-300 rounded-full shadow-2xl p-3 flex flex-col gap-2 animate-fadeIn w-16`}>
          {languages
            .filter((lang) => lang.code !== i18n.language)
            .map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-all duration-300 text-xl font-bold shadow-md hover:shadow-lg active:scale-95"
                title={lang.name}
              >
                {lang.flag}
              </button>
            ))}
        </div>
      )}

      {/* Main Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-2xl active:scale-95 z-50"
        aria-label="Change Language"
        title={currentLanguage?.name}
      >
        <span>{currentLanguage?.flag}</span>
      </button>
    </div>
  );
};

export default FloatingLanguageButton;
