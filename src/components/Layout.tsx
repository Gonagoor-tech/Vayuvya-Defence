import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      dropdown: [
        { label: "M.A.L.E UAV", href: "/male-uav" }, // ✅ FIXED
        { label: "Jet Engine", href: "/products" },
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
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center text-xl font-extrabold">
            <img src="/lovable-uploads/logo.png" className="h-8 mr-2" />
            VAYUVYA <span className="text-blue-400 ml-1">DEFENCE</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={link.href}
                  className="flex items-center text-gray-200 hover:text-blue-400 py-2"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="ml-1 w-3 h-3" />}
                </Link>

                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 w-44 bg-gray-900 border border-gray-700 rounded-lg shadow-xl">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-4 py-2 text-sm hover:bg-blue-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
