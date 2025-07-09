import React, { useState } from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center space-x-2 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span className="text-2xl font-bold text-gray-800">
            Visual <span className="text-indigo-600">Arabic</span>
        </span>
    </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'About', href: '#about' },
    { name: 'Free Resources', href: '#free-resources' },
    ];

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium">
                {link.name}
              </a>
            ))}
            <a href="#enroll" className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md">
              Enroll Now
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-indigo-600 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-indigo-600 py-2 px-4 rounded-md transition-colors duration-300">
                  {link.name}
                </a>
              ))}
              <a href="#enroll" onClick={() => setIsMenuOpen(false)} className="bg-indigo-600 text-white font-semibold mt-2 px-5 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300">
                Enroll Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
