import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about', dropdown: [
      { name: 'Company Overview', path: '/about#overview' },
      { name: 'Team', path: '/team' },
    ] },
    { name: 'Products', path: '/products', dropdown: [
      { name: 'M.A.L.E Uav', path: '/products#M.A.L.E Uav' }
    ] },
    { name: 'News & Events', path: '/news-events' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/e5ae8e77-1bb3-4c6a-888e-76ddf869d66d.png" 
              alt="Vayuvya Defence Logo" 
              className="h-8 w-auto"
            />
            <div className="text-2xl font-bold text-white">
              VAYUVYA
              <span className="text-blue-400 ml-2">DEFENCE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger
                    className={`flex items-center transition-colors duration-200 ${
                      isActive(item.path) ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-black/95 backdrop-blur-md border-gray-700 z-50">
                    {item.dropdown.map((sub) => (
                      <DropdownMenuItem key={sub.name} asChild>
                        <Link to={sub.path} onClick={scrollToTop} className="text-gray-300 hover:text-white cursor-pointer">
                          {sub.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={scrollToTop}
                  className={`transition-colors duration-200 ${
                    isActive(item.path) ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                {!item.dropdown ? (
                  <Link
                    to={item.path}
                    onClick={() => { setIsMenuOpen(false); scrollToTop(); }}
                    className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div className="px-3 py-2">
                    <div className="text-gray-400 text-sm font-medium mb-2">{item.name}</div>
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        onClick={() => { setIsMenuOpen(false); scrollToTop(); }}
                        className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors duration-200"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
