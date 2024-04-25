'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setIsMenuOpen(false); // Close the menu when clicking outside on smaller screens
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null); // Close any open dropdowns when toggling the main menu
  };

  const handleDropdownClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="shadow-2xl fixed top-0 w-full z-50">
      <div className="navbar-container bg-gradient-to-t from-gray-900 mx-auto px-4 py-8 flex justify-between items-center font-semibold relative text-white">
        <div className="logo">
          <Link href="/">
            <div className="flex items-center">
              <img src="/logo.png" alt="Pramanik Logo" className="h-12 md:ml-4" />
              <h1 className='ml-3 text-xl lg:text-3xl lg:ml-5'><span className='text-yellow-300'>प्रा</span>amanik</h1>
            </div>
          </Link>
        </div>

        {/* Toggle menu button for small screens */}
        <div className="menu-toggle md:hidden" onClick={toggleMenu} style={{ zIndex: 60 }}>
          <svg className={`h-6 w-6 fill-current cursor-pointer transform ${isMenuOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ease-in-out`} viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"/>
          </svg>
        </div>

        {/* Menu elements for large screens */}
        <div className="hidden md:flex items-center space-x-4 md:mr-8">
          <Link href="/"><p className="text-lg font-normal text-white hover:text-gray-300 transition-all duration-200">Home</p></Link>
          <div className="relative" onClick={() => handleDropdownClick('manage')}>
            <p className="text-lg text-white font-normal hover:text-gray-300 transition-all duration-200 cursor-pointer">Manage</p>
            {activeDropdown === 'manage' && (
              <div className="absolute top-full left-0 z-50 bg-white shadow-lg py-2 mt-2 w-full">
                <Link href="/cases"><p className="text-gray-800 menu cursor-pointer px-4 py-2 block">Cases</p></Link>
                <Link href="/documents"><p className="text-gray-800 menu cursor-pointer px-4 py-2 block">Documents</p></Link>
              </div>
            )}
          </div>
          <Link href="/#help"><p className="text-lg font-normal text-white hover:text-gray-300 transition-all duration-200">Help</p></Link>
          <Link href="/#profile"><p className="text-lg font-normal text-white hover:text-gray-300 transition-all duration-200">Profile</p></Link>
          <div className="relative" onClick={() => handleDropdownClick('community')}>
            <p className="text-lg text-white font-normal hover:text-gray-300 transition-all duration-200 cursor-pointer">Community</p>
            {activeDropdown === 'community' && (
              <div className="absolute top-full left-0 z-50 bg-white shadow-lg py-2 mt-2 w-full">
                <Link href="/advocates"><p className="text-gray-800 menu cursor-pointer px-4 py-2 block">Advocates</p></Link>
                <Link href="/general"><p className="text-gray-800 menu cursor-pointer px-4 py-2 block">General</p></Link>
              </div>
            )}
          </div>
        </div>

        {/* Overlay for blocking interactions when menu is open */}
        {isMenuOpen && <div className="fixed top-0 left-0 right-0 bottom-0 opacity-50 z-40 bg-black" onClick={toggleMenu}></div>}

        {/* Menu container for small screens */}
        <div className={`menu-container md:hidden fixed top-0 left-0 right-0 text-black z-50 overflow-hidden ${isMenuOpen ? 'block' : 'hidden'} transition duration-300 ease-in-out`}>
          <ul className="text-center p-4 mt-24 bg-white shadow-xl flex flex-col space-y-3">
            <li><Link href="/"><span className="text-gray-800 menu">Home</span></Link></li>
            <div className="relative" onClick={() => handleDropdownClick('manage')}>
              <li><p className="text-gray-800 menu cursor-pointer">Manage</p></li>
              {activeDropdown === 'manage' && (
                <div className="absolute top-full left-0 z-50 bg-white shadow-lg py-2 mt-2 w-full">
                  <Link href="/cases"><p className="text-gray-800 menu cursor-pointer px-4 py-2 block">Cases</p></Link>
                  <Link href="/documents"><p className="text-gray-800 menu cursor-pointer px-4 py-2 block">Documents</p></Link>
                </div>
              )}
            </div>
            <li><Link href="/#help"><span className="text-gray-800 menu">Help</span></Link></li>
            <li><Link href="/#profile"><span className="text-gray-800 menu">Profile</span></Link></li>
            <div className="relative" onClick={() => handleDropdownClick('community')}>
              <li><p className="text-gray-800 menu cursor-pointer">Community</p></li>
              {activeDropdown === 'community' && (
                <div className="absolute top-full left-0 z-50 bg-white shadow-lg py-2 mt-2 w-full">
                  <Link href="/advocates"><p className="text-gray-800 menu cursor-pointer px-4 py-2 block">Advocates</p></Link>
                  <Link href="/general"><p className="text-gray-800 menu cursor-pointer px-4 py-2 block">General</p></Link>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
