import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPeopleDropdownOpen, setIsPeopleDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const programsDropdownItems = [
    { label: 'B.Tech', href: '/btech' },
    { label: 'M.Tech', href: '/mtech' },
    { label: 'PhD', href: '/phd' },
  ];

  const peopleDropdownItems = [
    { label: "HOD's Desk", href: '/hoddesk' },
    { label: 'Faculty', href: '/faculty' },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 lg:px-6">
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center group">
              <img src={logo} alt="Logo" className="h-12 w-auto transition-transform duration-200 group-hover:scale-105" />
              <span className="ml-3 text-xl font-bold tracking-tight text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                Smart Manufacturing
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <NavLink href="/about">About</NavLink>

 
            <div
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 font-medium text-gray-500 hover:text-blue-500 transition-all duration-200 uppercase text-sm focus:outline-none">
                <span>Programs</span>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-200 ease-in-out transform origin-top opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100`}
              >
                {programsDropdownItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setIsPeopleDropdownOpen(true)}
              onMouseLeave={() => setIsPeopleDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 font-medium text-gray-500 hover:text-blue-500 transition-all duration-200 uppercase text-sm focus:outline-none">
                <span>People</span>
                <ChevronDown
                  size={16}
                  className={`transform transition-transform duration-200 ${
                    isPeopleDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-200 ease-in-out transform origin-top opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100`}
              >
                {peopleDropdownItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <NavLink href="/research">Research</NavLink>
            <NavLink href="/placement">Placement</NavLink>
            <NavLink href="/facilities">Facilities</NavLink>
            <NavLink href="/contact">Contact us</NavLink>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

    
      <div
        className={`md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg fixed w-full transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <MobileNavLink href="/about">About</MobileNavLink>

   
          <MobileNavLink href="/btech">B.Tech</MobileNavLink>
          <MobileNavLink href="/mtech">M.Tech</MobileNavLink>
          <MobileNavLink href="/phd">PhD</MobileNavLink>

        
          <MobileNavLink href="/hoddesk">HOD's Desk</MobileNavLink>
          <MobileNavLink href="/faculty">Faculty</MobileNavLink>

          <MobileNavLink href="/research">Research</MobileNavLink>
          <MobileNavLink href="/placement">Placement</MobileNavLink>
          <MobileNavLink href="/facilities">Facilities</MobileNavLink>
          <MobileNavLink href="/contact">Contact us</MobileNavLink>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="block px-3 py-2 text-gray-500 hover:text-blue-500 hover:bg-gray-50 rounded-lg font-medium uppercase text-sm transition-colors duration-200"
  >
    {children}
  </a>
);

export default Navbar;
