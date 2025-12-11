import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
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
        <div className="hidden md:flex space-x-8 text-white font-poppins">
          <Link to="/products" className="hover:text-blue-400 transition">Products</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About Us</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Mobile menu placeholder */}
        <div className="md:hidden">
          {/* Add menu toggle later */}
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
