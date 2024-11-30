import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col space-y-10 justify-center m-10 mb-0">
        {/* Navigation Links */}
        <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700 p-4">
          <a className="hover:text-cyan-500 text-red-600" href="#">Home</a>
          <a className="hover:text-cyan-500 text-red-600" href="#">About</a>
          <a className="hover:text-cyan-500 text-red-600" href="#">Delivery</a>
          <a className="hover:text-cyan-500 text-red-600" href="#">Contact</a>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
          {/* GitHub Link */}
          <a href="https://github.com/fatimaNadir" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png" // Replace with your GitHub icon URL
              alt="GitHub"
              className="w-8 h-8"
            />
          </a>

          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/fatimanadir80/" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/145/145807.png" // Replace with your LinkedIn icon URL
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
