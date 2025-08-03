'use client';

import { useState } from 'react';
import { Menu, X, Phone, Banknote } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'CAREER', href: '/career' },
    { name: 'CONTACT US', href: '/contact' },
    { name: 'BLOGS', href: '/blogs' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <span className="text-2xl font-bold">
                <span className="text-yellow-500">LearnHub</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex flex-col items-end text-sm">
              <div className="flex items-center space-x-1 text-blue-600">
                <Phone></Phone>
                <span className="font-semibold">+91 9821664888</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-600">
                 <Phone></Phone>
                <span className="font-semibold">+1 575-205-1311</span>
              </div>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2">
              <Banknote className="w-4 h-4" />
              <span>Pay Online</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <nav className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t">
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-blue-600">
                      <Phone></Phone>
                    <span className="font-semibold">+91 9821664888</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600">
                      <Phone></Phone>
                    <span className="font-semibold">+1 575-205-1311</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Banknote className="w-4 h-4" />
                  <span>Pay Online</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;