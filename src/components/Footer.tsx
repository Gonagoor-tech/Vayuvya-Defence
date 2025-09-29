
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-gray-800 overflow-hidden">
      {/* Space-like background */}
      <div className="absolute inset-0 bg-black">
        {/* Animated stars */}
        <div className="absolute inset-0">
          {/* Large stars */}
          <div className="absolute top-8 left-12 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-16 left-32 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-24 left-20 w-1 h-1 bg-white rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-32 left-48 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-500"></div>
          <div className="absolute top-40 left-28 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
          <div className="absolute top-48 left-44 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-3000"></div>
          <div className="absolute top-56 left-16 w-1 h-1 bg-white rounded-full animate-pulse delay-2500"></div>
          
          {/* More stars scattered */}
          <div className="absolute top-12 right-20 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-20 right-36 w-1 h-1 bg-white rounded-full animate-pulse delay-1200"></div>
          <div className="absolute top-28 right-16 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-1800"></div>
          <div className="absolute top-36 right-32 w-1 h-1 bg-white rounded-full animate-pulse delay-2200"></div>
          <div className="absolute top-44 right-24 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-800"></div>
          
          {/* Additional stars for depth */}
          <div className="absolute top-18 left-1/4 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse delay-400"></div>
          <div className="absolute top-34 left-3/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1600"></div>
          <div className="absolute top-50 left-1/3 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-2800"></div>
          <div className="absolute top-66 left-2/3 w-1 h-1 bg-white rounded-full animate-pulse delay-600"></div>
          
          {/* Distant stars for more depth */}
          <div className="absolute top-10 left-1/2 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse delay-900"></div>
          <div className="absolute top-26 left-1/5 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-1300"></div>
          <div className="absolute top-42 left-4/5 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-1900"></div>
          <div className="absolute top-58 left-1/6 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-2400"></div>
          <div className="absolute top-74 left-5/6 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-1100"></div>
          
          {/* Very distant tiny stars */}
          <div className="absolute top-14 left-1/3 w-0.5 h-0.5 bg-blue-50 rounded-full animate-pulse delay-600"></div>
          <div className="absolute top-38 left-2/5 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse delay-1400"></div>
          <div className="absolute top-62 left-1/8 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-2100"></div>
        </div>
        
        {/* Subtle nebula effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/5 to-indigo-900/10"></div>
        
        {/* Cosmic dust particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/20 rounded-full blur-sm animate-pulse delay-2000"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/30 rounded-full blur-sm animate-pulse delay-1500"></div>
          <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-indigo-400/25 rounded-full blur-sm animate-pulse delay-3000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-blue-300/20 rounded-full blur-sm animate-pulse delay-2500"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 font-poppins">
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

        <div className="relative border-t border-gray-800 mt-8 pt-8 text-center">
          {/* Additional space elements around copyright */}
          <div className="absolute inset-0">
            {/* Small stars around copyright area */}
            <div className="absolute top-2 left-1/4 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-4 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-1500"></div>
            <div className="absolute top-6 left-2/3 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute top-8 right-1/4 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-10 left-1/2 w-0.5 h-0.5 bg-white rounded-full animate-pulse delay-2500"></div>
          </div>
          
          <p className="relative z-10 text-gray-300">
            © 2024 Vayuvya Defence Pvt. Ltd. All rights reserved. | Supporting Atmanirbhar Bharat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
