import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import {motion} from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPeopleDropdownOpen, setIsPeopleDropdownOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-300">
     <div className="bg-black h-14 flex items-center justify-start px-6 border-b border-gray-700">
      <span className="text-gray-300 text-base px-40 m-10 tracking-wider">
        SMART MANUFACTURING - IIITDM JABALPUR
      </span>
    </div>

      <div className="container mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <motion.img initial={{opacity:0}}
          animate ={{opacity:1}}
          transition={{ duration:0.3,delay : 0.3}}
           src={logo} alt="Logo" className="h-14 w-auto transition-transform duration-300 hover:scale-105" />
        </a>

        <motion.div 
        initial={{opacity:0}}
        animate ={{opacity:1}}
        transition={{ duration:0.3,delay : 0.3}}
        className="hidden md:flex items-center space-x-8 font-medium text-gray-600">
          <NavLink href="/about">ABOUT</NavLink>
          <Dropdown title="PROGRAMS" isOpen={isDropdownOpen} setIsOpen={setIsDropdownOpen} items={[
            { label: 'B.Tech', href: '/btech' },
            { label: 'M.Tech', href: '/mtech' },
            { label: 'PhD', href: '/phd' },
          ]} />
          <Dropdown title="PEOPLE" isOpen={isPeopleDropdownOpen} setIsOpen={setIsPeopleDropdownOpen} items={[
            { label: "HOD's Desk", href: '/hoddesk' },
            { label: 'Faculty', href: '/faculty' },
          ]} />
          <NavLink href="/research">RESEARCH</NavLink>
          <NavLink href="/placement">PLACEMENT</NavLink>
          <NavLink href="/facilities">FACILITIES</NavLink>
          <NavLink href="/contact">CONTACT US</NavLink>
        </motion.div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-3 rounded-lg hover:bg-gray-200 transition">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      <div className={`md:hidden fixed inset-0 bg-white transition-transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} ease-in-out duration-300 overflow-hidden`}>  
        <div className="flex flex-col items-center space-y-6 py-10 text-gray-700 font-medium">
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/btech">B.Tech</MobileNavLink>
          <MobileNavLink href="/mtech">M.Tech</MobileNavLink>
          <MobileNavLink href="/phd">PhD</MobileNavLink>
          <MobileNavLink href="/hoddesk">HOD's Desk</MobileNavLink>
          <MobileNavLink href="/faculty">Faculty</MobileNavLink>
          <MobileNavLink href="/research">Research</MobileNavLink>
          <MobileNavLink href="/placement">Placement</MobileNavLink>
          <MobileNavLink href="/facilities">Facilities</MobileNavLink>
          <MobileNavLink href="/contact">Contact Us</MobileNavLink>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({ href, children }) => (
  <a href={href} className="text-gray-700 hover:text-blue-600 transition text-lg">{children}</a>
);

const MobileNavLink = ({ href, children }) => (
  <a href={href} className="block text-gray-700 hover:text-blue-600 transition text-lg">{children}</a>
);

const Dropdown = ({ title, isOpen, setIsOpen, items }) => (
  <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
    <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition text-lg focus:outline-none">
      <span>{title}</span>
      <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`absolute left-0 mt-2 w-48 bg-white shadow-md border rounded-md transition-transform ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} origin-top`}>  
      {items.map((item, index) => (
        <a key={index} href={item.href} className="block px-4 py-2 text-gray-700 hover:bg-blue-100 transition rounded-md">{item.label}</a>
      ))}
    </div>
  </div>
);

export default Navbar;
