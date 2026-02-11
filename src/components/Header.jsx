import { Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to hide/show top bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "New Clothes", href: "/newClothes" },
    { id: 3, label: "Used Clothes", href: "/usedClothes" },
    { id: 4, label: "Fabric", href: "/fabric" }, // fixed trailing space
    { id: 5, label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Bar - Desktop Only - Hides on Scroll */}
      <div
        className={`bg-blue-600 hidden lg:block transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
        }`}
      >
        <div className="container mx-auto px-2">
          <div className="flex justify-between items-center py-2.5 text-sm">
            {/* Left - Tagline */}
            <div className="flex items-center">
              <span className="font-bold uppercase text-white tracking-wide">
                TOP USED Clothes supplier in china
              </span>
            </div>

            {/* Right - Contact Icons */}
            <div className="flex items-center space-x-3">
              <a
                href="mailto:info@siliconvalue.com"
                className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-blue-600 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold hidden xl:inline whitespace-nowrap">
                  info@siliconvalue.com
                </span>
              </a>

              <a
                href="https://wa.me/8613419579731"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-green-600 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold hidden xl:inline whitespace-nowrap">
                  WhatsApp Us
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-100">
        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="Silicon Value Logo"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-1">
              <Link to="/" className="shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="Silicon Value Logo"
                  className="h-20 w-auto object-contain"
                />
              </Link>

              <nav>
                <ul className="flex items-center space-x-1">
                  {navigation.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        to={item.href}
                        end
                        className={({ isActive }) =>
                          `block px-4 xl:px-5 py-3 font-semibold text-sm uppercase transition-all rounded-lg
                          ${
                            isActive
                              ? "text-yellow-500"
                              : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.href}
                      end
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg font-semibold transition-all active:scale-95
                        ${
                          isActive
                            ? "bg-blue-100 text-yellow-500"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
