import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-black/80 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/lovable-uploads/logo.png"
            alt="Vayuvya Logo"
            className="h-8 object-contain"
          />
          <span className="text-white font-bold text-xl">
            VAYUVYA <span className="text-blue-400">DEFENCE</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-white font-poppins">

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Link
              to="/products"
              className="hover:text-blue-400 transition flex items-center"
            >
              Products
            </Link>

            {open && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                <Link
                  to="/products"
                  className="block px-4 py-2 text-sm hover:bg-blue-600 transition"
                >
                  Jet Engines
                </Link>

                <Link
                  to="/male-uav"
                  className="block px-4 py-2 text-sm hover:bg-blue-600 transition"
                >
                  M.A.L.E UAV
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-blue-400 transition">
            About Us
          </Link>

          <Link
  to="/contact" // route path
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="block hover:text-blue-400 transition"
>
  Contact
</Link>
        </div>

        {/* Mobile placeholder */}
        <div className="md:hidden">
          {/* Mobile menu can be added later */}
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
