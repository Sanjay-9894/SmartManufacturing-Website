import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const togglePrograms = () => {
    setIsProgramsOpen(!isProgramsOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between py-3">
          {/* Logo and College Name */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img src={logo} alt="PDPM IIITDM Jabalpur Logo" className="h-14 w-auto" />
              <span className="ml-3 text-xl font-bold tracking-tight">
                Smart Manufacturing
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm"
            >
              ABOUT
            </a>

            {/* Programs Dropdown */}
            <div className="relative">
              <button
                onClick={togglePrograms}
                className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm focus:outline-none flex items-center"
              >
                PROGRAMS ▼
              </button>

              {isProgramsOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-black bg-opacity-90 text-white shadow-lg rounded-md py-5">
                  <a
                    href="#"
                    className="block px-6 py-3 text-base hover:bg-gray-800 transition-colors duration-200"
                  >
                    B.Tech
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-3 text-base hover:bg-gray-800 transition-colors duration-200"
                  >
                    M.Tech
                  </a>
                  <a
                    href="#"
                    className="block px-6 py-3 text-base hover:bg-gray-800 transition-colors duration-200"
                  >
                    Ph.D.
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm"
            >
              PEOPLE
            </a>
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm"
            >
              RESEARCH
            </a>
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm"
            >
              PLACEMENT
            </a>
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm"
            >
              FACILITIES
            </a>
            <a
              href="#"
              className="font-medium text-gray-500 hover:text-blue-500 transition-colors duration-200 uppercase text-sm"
            >
              CONTACT US
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;