import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav className="w-full bg-black/80 backdrop-blur-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-1.5">
  <img
    src="lovable-uploads/logo.png"
    alt="Vayuvya Logo"
    className="h-6 sm:h-7 md:h-8 object-contain"
  />
  <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">
    VAYUVYA <span className="text-blue-400">DEFENCE</span>
  </span>
</Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 font-poppins text-white">
          <Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          {/* Add your hamburger menu here if needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
