import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update document language and direction
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

    // Update body RTL class for Tailwind RTL utilities
    if (i18n.language === 'ar') {
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.classList.remove('rtl');
    }
  }, [i18n.language]);

  return (
    <div dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
