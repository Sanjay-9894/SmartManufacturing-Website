import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img src={logo} alt="Logo" className="h-14 w-auto" />
              <span className="ml-3 text-xl font-bold tracking-tight">Smart Manufacturing</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between space-x-8">
            <a href="#" className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm">About</a>
            <a href="#" className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm">Programs</a>
            <a href="#" className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm">People</a>
            <a href="#" className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm">Research</a>
            <a href="#" className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm">Placement</a>
            <a href="#" className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm">Facilities</a>
            <a href="#" className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm">Contact us</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-500 hover:text-blue-500 hover:bg-gray-50 rounded-md font-medium uppercase text-sm">About</a>
            <a href="#" className="block px-3 py-2 text-gray-500 hover:text-blue-500 hover:bg-gray-50 rounded-md font-medium uppercase text-sm">Programs</a>
            <a href="#" className="block px-3 py-2 text-gray-500 hover:text-blue-500 hover:bg-gray-50 rounded-md font-medium uppercase text-sm">People</a>
            <a href="#" className="block px-3 py-2 text-gray-500 hover:text-blue-500 hover:bg-gray-50 rounded-md font-medium uppercase text-sm">Research</a>
            <a href="#" className="block px-3 py-2 text-gray-500 hover:text-blue-500 hover:bg-gray-50 rounded-md font-medium uppercase text-sm">Placement</a>
            <a href="#" className="block px-3 py-2 text-gray-500 hover:text-blue-500 hover:bg-gray-50 rounded-md font-medium uppercase text-sm">Facilities</a>
            <a href="#" className="block px-3 py-2 text-gray-500 hover:text-blue-500 hover:bg-gray-50 rounded-md font-medium uppercase text-sm">Contact us</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;