import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="mt-60  text-white z-40">
      <div className='bg-gradient-to-b from-gray-900 text-center py-2 pt-4'>
           <p>Last Updated on 12/04/2024</p> 
      </div>
      <div className="container mx-auto px-4 py-3 lg:py-4 md:py-4">
        <div className="flex flex-wrap justify-center items-center">
          {/* Logo Section */}
          <img src="/logo.png" alt="Ksham Innovation Logo" className="h-12 " />

          {/* Copyright Section */}
          <div className="text-center">
          <p>&copy; {new Date().getFullYear()} <span className='text-yellow-300'>प्रा</span>amanik. All Rights Reserved.</p>
          </div>

         
        </div>
      </div>
    </footer>
  );
}

export default Footer;
