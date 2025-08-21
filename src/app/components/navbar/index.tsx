'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, Link } from 'lucide-react';
import Logo from "../../../../public/img/gradify_now.png"
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { 
      name: 'SERVICES', 
      href: '/service',
      hasDropdown: true,
      dropdown: [
        { name: 'Biography Writing', href: '/service/biography' },
        { name: 'PhD Programs', href: '/service/phd' },
        { name: 'Diploma Courses', href: '/service/diploma' },
        { name: 'UG/PG Courses', href: '/service/ug-pg' },
        
      ]
    },
    { name: 'CONTACT US', href: '/contact' },
    { name: 'BLOGS', href: '/blogs' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-sm flex items-center justify-center">
              <Image src={Logo} alt='GradifyNow Logo' width={32} height={32} />
            </div>
            <div>
              <span className="text-2xl font-bold">
                <span className="text-blue-400">GradifyNow</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-black hover:text-blue-400 font-medium transition-colors duration-200 relative group"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                        isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-gray-700 hover:text-blue-400 hover:bg-blue-50 transition-colors duration-200 font-medium"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                      
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-black hover:text-blue-400 font-medium transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href='/contact'>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
              Get Started
            </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-400 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <nav className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-gray-700 hover:text-blue-400 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-all duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mobile Dropdown */}
                      {isServicesOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block text-gray-600 hover:text-blue-400 hover:bg-blue-50 py-2 px-4 rounded-lg transition-all duration-200"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                          <a
                            href="/service"
                            className="block text-blue-600 hover:text-blue-700 hover:bg-blue-50 py-2 px-4 rounded-lg transition-all duration-200 font-semibold"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            View All Services →
                          </a>
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-gray-700 hover:text-blue-400 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <a href='/contact'>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md">
                  Get Started
                </button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
