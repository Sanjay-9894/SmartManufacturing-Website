import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold tracking-tight">Smart Manufacturing</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium text-blue-100 hover:text-white transition-colors duration-200 hover:underline">About</a>
            <a href="#" className="font-medium text-blue-100 hover:text-white transition-colors duration-200 hover:underline">Programs</a>
            <a href="#" className="font-medium text-blue-100 hover:text-white transition-colors duration-200 hover:underline">People</a>
            <a href="#" className="font-medium text-blue-100 hover:text-white transition-colors duration-200 hover:underline">Research</a>
            <a href="#" className="font-medium text-blue-100 hover:text-white transition-colors duration-200 hover:underline">Placement</a>
            <a href="#" className="font-medium text-blue-100 hover:text-white transition-colors duration-200 hover:underline">Facilities</a>
            <a href="#" className="font-medium bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-md transition-colors duration-200">Contact us</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
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
        <div className="md:hidden bg-blue-800 backdrop-blur-sm bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded-md font-medium transition-colors duration-200">About</a>
            <a href="#" className="block px-3 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded-md font-medium transition-colors duration-200">Programs</a>
            <a href="#" className="block px-3 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded-md font-medium transition-colors duration-200">People</a>
            <a href="#" className="block px-3 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded-md font-medium transition-colors duration-200">Research</a>
            <a href="#" className="block px-3 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded-md font-medium transition-colors duration-200">Placement</a>
            <a href="#" className="block px-3 py-2 text-blue-100 hover:text-white hover:bg-blue-700 rounded-md font-medium transition-colors duration-200">Facilities</a>
            <a href="#" className="block px-3 py-2 bg-blue-500 text-white rounded-md font-medium my-2">Contact us</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;