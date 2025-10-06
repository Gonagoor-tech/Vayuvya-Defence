import React, { useState } from "react";
import Footer from "./Footer";

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
      dropdown: [{ label: "M.A.L.E Uav", href: "/products#M.A.L.E Uav" }],
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
          <div className="flex items-center text-xl font-bold text-white tracking-widest cursor-pointer">
            <div className="h-5 w-5 bg-blue-500 rounded-sm mr-2 transform rotate-45"></div>
            VAYUVYA <span className="text-blue-400 ml-1">DEFENCE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6 text-sm font-light">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={link.href}
                  className="flex items-center text-gray-200 hover:text-blue-400 transition-colors duration-200 py-2"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="ml-1 w-3 h-3" />}
                </a>

                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-0 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden animate-fade-in">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-150 text-sm"
                        onClick={handleMouseLeave}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              className="text-gray-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-700">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-gray-800">
                <a
                  href={link.href}
                  className="block px-4 py-3 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
                {link.dropdown && (
                  <div className="pl-4">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-blue-500 transition-colors text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
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

      {/* Dropdown fade animation */}
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
