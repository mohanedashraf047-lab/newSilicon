import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import all translation files from src/locales
import enCommon from '../locales/en/common.json';
import enNavigation from '../locales/en/navigation.json';
import enHome from '../locales/en/home.json';
import enNewClothes from '../locales/en/newClothes.json';
import enUsedClothes from '../locales/en/usedClothes.json';
import enFabric from '../locales/en/fabric.json';
import enContact from '../locales/en/contact.json';
import enFooter from '../locales/en/footer.json';
import enProducts from '../locales/en/products.json';

import frCommon from '../locales/fr/common.json';
import frNavigation from '../locales/fr/navigation.json';
import frHome from '../locales/fr/home.json';
import frNewClothes from '../locales/fr/newClothes.json';
import frUsedClothes from '../locales/fr/usedClothes.json';
import frFabric from '../locales/fr/fabric.json';
import frContact from '../locales/fr/contact.json';
import frFooter from '../locales/fr/footer.json';
import frProducts from '../locales/fr/products.json';

import arCommon from '../locales/ar/common.json';
import arNavigation from '../locales/ar/navigation.json';
import arHome from '../locales/ar/home.json';
import arNewClothes from '../locales/ar/newClothes.json';
import arUsedClothes from '../locales/ar/usedClothes.json';
import arFabric from '../locales/ar/fabric.json';
import arContact from '../locales/ar/contact.json';
import arFooter from '../locales/ar/footer.json';
import arProducts from '../locales/ar/products.json';

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
    products: enProducts,
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
    products: frProducts,
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
    products: arProducts,
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
    ns: ['common', 'navigation', 'home', 'newClothes', 'usedClothes', 'fabric', 'contact', 'footer', 'products'],
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
