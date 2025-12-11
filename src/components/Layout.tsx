import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { Dropdown } from "react-day-picker";
import { Label } from "recharts";

// Dropdown Arrow Icon
const ChevronDown: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_LINKS = [
    { label: "Home", href: "/" },
    {
      label: "About Us",
      href: "/about",
      dropdown: [
        { label: "Company Overview", href: "/about#overview" },
        { label: "Team", href: "/team" },
      ],
    },
    {
      label: "Products",
      href: "/products",
      dropdown: [{ label: "M.A.L.E UAV", href: "/products#male-uav" },
        {label: "Jet Engine", href:"/products"},
        {label: "Advanced Drone", href:"/products"}
      ],
    
    },
    { label: "News & Events", href: "/news-events" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  const handleMouseEnter = (label: string) => setActiveDropdown(label);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center text-lg sm:text-xl font-extrabold text-white tracking-widest">
            <img src="\lovable-uploads\logo.png" alt="Vayuvya Logo" className="h-8 mr-2" />
            VAYUVYA <span className="text-blue-400 ml-1">DEFENCE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 sm:space-x-6 lg:space-x-8 text-sm sm:text-base">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.href}
                  className="flex items-center text-gray-200 hover:text-blue-400 transition-colors duration-200 py-2"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="ml-1 w-3 h-3" />}
                </Link>

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-0 w-44 bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden animate-fade-in z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-3 py-2 text-gray-300 hover:bg-blue-600 hover:text-white text-sm transition-colors duration-150"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-200 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-700">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-gray-800">
                <Link
                  to={link.href}
                  className="block px-4 py-3 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-4 py-2 text-gray-400 hover:bg-blue-500 hover:text-white transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16 md:pt-20">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Fade-in Animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Layout;
