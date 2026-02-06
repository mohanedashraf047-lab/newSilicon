import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
