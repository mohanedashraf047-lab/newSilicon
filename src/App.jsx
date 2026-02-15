// App.jsx - Main application with routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NewClothes from "./pages/NewClothes";
import UsedClothes from "./pages/UsedClothes";
import Fabric from "./pages/Fabric";
import Contact from "./pages/Contact";
import { useScroll } from "./hooks";
import { scrollToTop } from "./utils/helpers";
import Layout from "./pages/Layout";
import WhatsAppButton from "./components/WhatsAppButton";
import FloatingLanguageButton from "./components/FloatingLanguageButton";
import "./App.css";
import "./i18n/config";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const BackToTop = () => {
  const { scrollY } = useScroll();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  if (scrollY < 300) return null;
  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 z-50 ${isRTL ? "left-4 sm:left-6 md:left-8" : "right-4 sm:right-6 md:right-8"} bg-gray-400 hover:bg-blue-400 hover:cursor-pointer text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-primary-700 active:scale-95 transition-all animate-fadeIn`}
      aria-label="Back to top"
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <Home /> },
        { path: "/newClothes", element: <NewClothes /> },
        { path: "/usedClothes", element: <UsedClothes /> },
        { path: "/fabric", element: <Fabric /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <RouterProvider router={routes} />
      <WhatsAppButton />
      <FloatingLanguageButton />
      <BackToTop />
    </Suspense>
  );
}

export default App;
