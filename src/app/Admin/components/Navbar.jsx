'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { HomeIcon, FolderIcon, UserIcon, CogIcon, CollectionIcon } from '@heroicons/react/solid'; // Import icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    document.addEventListener('mousedown', handleClickOutside); // Listen for clicks outside navbar

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`text-sm relative flex ${isMenuOpen ? 'open' : ''}`} ref={navbarRef}>
      <div className={`bg-teal-700 text-white shadow-lg h-full flex flex-col text-sm fixed left-0 top-0 bottom-0 z-50 transition-all duration-300 ${isMenuOpen ? 'w-64' : 'w-14 lg:w-64 md:w-64'}`}>
        {/* Navbar Header */}
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="md:hidden cursor-pointer mt-4" onClick={toggleMenu}>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white mt-1"></div>
            <div className="w-6 h-0.5 bg-white mt-1"></div>
          </div>
        </div>
        {/* Logo and Name */}
        {(isMenuOpen || !isSmallScreen) && (
          <div className="flex items-center px-4 pb-4">
            <img src="/logo.png" alt="Logo" width="50" className="mr-2" />
            <div>
              <p className="text-xl font-bold">PRAMANIK</p>
            </div>
          </div>
        )}
        {(isMenuOpen || !isSmallScreen) && (
          <div className={`flex flex-col items-start py-4 border-y `}>
            <p className="font-bold text-xl ml-5">ADMIN</p>
          </div>
        )}

        {/* Navbar Menu - Mobile */}
        <ul className={`navbar-menu flex flex-col items-start md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link href="/">
              <div className="flex items-center py-2 px-4 w-64 mt-5 hover:bg-teal-800 transition ease-in-out duration-200">
                <HomeIcon className="h-5 w-5 mr-2 " />
                <p className="text-sm ">Dashboard</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/Admin/cases">
              <div className="flex items-center py-2 px-4 w-64 mt-5 hover:bg-teal-800 transition ease-in-out duration-200">
              <FolderIcon className="h-5 w-5 mr-2" />
                <p className="text-sm ">Cases</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/Admin/users">
              <div className="flex items-center py-2 px-4 w-64 mt-5 hover:bg-teal-800 transition ease-in-out duration-200">
                <UserIcon className="h-5 w-5 mr-2 " />
                <p className="text-sm ">Users</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/Admin/evidences">
              <div className="flex items-center py-2 px-4 w-64 mt-5 hover:bg-teal-800 transition ease-in-out duration-200">
                <CollectionIcon className="h-5 w-5 mr-2 " />
                <p className="text-sm ">Evidences</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/Admin/settings">
              <div className="flex items-center py-2 px-4 w-64 mt-5 hover:bg-teal-800 transition ease-in-out duration-200">
                <CogIcon className="h-5 w-5 mr-2 " />
                <p className="text-sm ">Settings</p>
              </div>
            </Link>
          </li>
          {/* Other menu items */}
        </ul>
        {/* Navbar Menu - Desktop */}
        <ul className={`navbar-menu hidden md:flex md:flex-col md:items-start md:space-y-2 md:py-3 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link href="/">
              <div className="flex items-center py-2 px-4 w-64 hover:bg-teal-800 transition ease-in-out duration-200">
                <HomeIcon className="h-5 w-5 mr-2" />
                <p className="text-sm ">Dashboard</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/Admin/cases">
              <div className="flex items-center py-2 px-4 w-64 hover:bg-teal-800 transition ease-in-out duration-200">
                <FolderIcon className="h-5 w-5 mr-2" />
                <p className="text-sm ">Cases</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/Admin/users">
              <div className="flex items-center py-2 px-4 w-64 hover:bg-teal-800 transition ease-in-out duration-200">
                <UserIcon className="h-5 w-5 mr-2" />
                <p className="text-sm ">Users</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/Admin/evidences">
              <div className="flex items-center py-2 px-4 w-64 hover:bg-teal-800 transition ease-in-out duration-200">
                <CollectionIcon className="h-5 w-5 mr-2" />
                <p className="text-sm ">Evidences</p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/Admin/settings">
              <div className="flex items-center py-2 px-4 w-64 hover:bg-teal-800 transition ease-in-out duration-200">
                <CogIcon className="h-5 w-5 mr-2" />
                <p className="text-sm ">Settings</p>
              </div>
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
