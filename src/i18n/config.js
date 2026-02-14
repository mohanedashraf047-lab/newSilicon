import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all translation files from public/locales
import enCommon from '../../public/locales/en/common.json';
import enNavigation from '../../public/locales/en/navigation.json';
import enHome from '../../public/locales/en/home.json';
import enNewClothes from '../../public/locales/en/newClothes.json';
import enUsedClothes from '../../public/locales/en/usedClothes.json';
import enFabric from '../../public/locales/en/fabric.json';
import enContact from '../../public/locales/en/contact.json';
import enFooter from '../../public/locales/en/footer.json';

import frCommon from '../../public/locales/fr/common.json';
import frNavigation from '../../public/locales/fr/navigation.json';
import frHome from '../../public/locales/fr/home.json';
import frNewClothes from '../../public/locales/fr/newClothes.json';
import frUsedClothes from '../../public/locales/fr/usedClothes.json';
import frFabric from '../../public/locales/fr/fabric.json';
import frContact from '../../public/locales/fr/contact.json';
import frFooter from '../../public/locales/fr/footer.json';

import arCommon from '../../public/locales/ar/common.json';
import arNavigation from '../../public/locales/ar/navigation.json';
import arHome from '../../public/locales/ar/home.json';
import arNewClothes from '../../public/locales/ar/newClothes.json';
import arUsedClothes from '../../public/locales/ar/usedClothes.json';
import arFabric from '../../public/locales/ar/fabric.json';
import arContact from '../../public/locales/ar/contact.json';
import arFooter from '../../public/locales/ar/footer.json';

// Define resources
const resources = {
  en: {
    common: enCommon,
    navigation: enNavigation,
    home: enHome,
    newClothes: enNewClothes,
    usedClothes: enUsedClothes,
    fabric: enFabric,
    contact: enContact,
    footer: enFooter,
  },
  fr: {
    common: frCommon,
    navigation: frNavigation,
    home: frHome,
    newClothes: frNewClothes,
    usedClothes: frUsedClothes,
    fabric: frFabric,
    contact: frContact,
    footer: frFooter,
  },
  ar: {
    common: arCommon,
    navigation: arNavigation,
    home: arHome,
    newClothes: arNewClothes,
    usedClothes: arUsedClothes,
    fabric: arFabric,
    contact: arContact,
    footer: arFooter,
  },
};

// Get saved language or detect from browser
const getSavedLanguage = () => {
  const saved = localStorage.getItem('language');
  if (saved && ['en', 'fr', 'ar'].includes(saved)) {
    return saved;
  }

  // Detect browser language
  const browserLang = navigator.language.split('-')[0];
  if (['en', 'fr', 'ar'].includes(browserLang)) {
    return browserLang;
  }

  return 'en'; // Default to English
};

const defaultLanguage = getSavedLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: 'en',
    ns: ['common', 'navigation', 'home', 'newClothes', 'usedClothes', 'fabric', 'contact', 'footer'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // React already safeguards against XSS
    },
    react: {
      useSuspense: true,
    },
  });

// Save language preference when it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
});

// Set initial document attributes
document.documentElement.lang = defaultLanguage;
document.documentElement.dir = defaultLanguage === 'ar' ? 'rtl' : 'ltr';

export default i18n;
