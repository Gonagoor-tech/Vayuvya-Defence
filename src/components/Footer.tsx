
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/95 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              VAYUVYA
              <span className="text-blue-400 ml-2">DEFENCE</span>
            </div>
             <div className="text-2xl font-bold text-white mb-4">
             Powered By
              <span className="text-blue-400 ml-2">Gonagoor Tech</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Advancing aerospace, software, and AI technologies for India's defence ecosystem. 
              Empowering the future of tactical aerospace platforms.
            </p>
            <div className="text-gray-400 space-y-1">
              <p>Bangalore, India</p>
              <p>+91-7019561885</p>
              <p>info@vayuvya.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link 
                to="/about" 
                onClick={scrollToTop}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
              <Link 
                to="/team" 
                onClick={scrollToTop}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Team
              </Link>
              <Link 
                to="/products" 
                onClick={scrollToTop}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Products
              </Link>
              <Link 
                to="/careers" 
                onClick={scrollToTop}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Careers
              </Link>
              <Link 
                to="/contact" 
                onClick={scrollToTop}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-white font-semibold mb-4">Technology</h3>
            <div className="space-y-2 text-gray-400">
              <p>Micro Jet Engines</p>
              <p>Satellite Propulsion</p>
              <p>UAV Systems</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Vayuvya Defence Pvt. Ltd. All rights reserved. | Supporting Atmanirbhar Bharat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
