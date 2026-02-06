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
import About from "./pages/About";

const BackToTop = () => {
  const { scrollY } = useScroll();
  if (scrollY < 300) return null;
  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 bg-primary-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-primary-700 active:scale-95 transition-all animate-fadeIn z-50"
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
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
      <BackToTop />
    </>
  );
}

export default App;
