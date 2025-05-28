
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black/95 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              TRISHUL
              <span className="text-blue-400 ml-2">DEFENCE</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Indigenous micro jet engine technology for India's defence ecosystem. 
              Empowering the future of tactical aerospace platforms.
            </p>
            <div className="text-gray-400">
              <p>Bangalore, India</p>
              <p>+91-7019561885</p>
              <p>info@trishuldefence.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/products" className="block text-gray-400 hover:text-white transition-colors">
                Products
              </Link>
              <Link to="/careers" className="block text-gray-400 hover:text-white transition-colors">
                Careers
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Technology */}
          <div>
            <h3 className="text-white font-semibold mb-4">Technology</h3>
            <div className="space-y-2 text-gray-400">
              <p>Micro Jet Engines</p>
              <p>Turbojet Systems</p>
              <p>UAV Propulsion</p>
              <p>Indigenous Design</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Trishul Defence Pvt. Ltd. All rights reserved. | Supporting Atmanirbhar Bharat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
