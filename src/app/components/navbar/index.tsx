'use client';

import { useState } from 'react';
import { Menu, X, Phone, Banknote } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SERVICES', href: '/service' },
    { name: 'CONTACT US', href: '/contact' },
    { name: 'BLOGS', href: '/blogs' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm shadow-lg border-b border-slate-700/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <span className="text-2xl font-bold">
                <span className="text-blue-400">LearnHub</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-blue-400 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex flex-col items-end text-sm">
                        
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 border border-blue-400/20">
              <Banknote className="w-4 h-4" />
              <span>Pay Online</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-300 hover:text-blue-400 hover:bg-slate-800"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-slate-900 shadow-lg border-t border-slate-700/50">
            <nav className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-slate-300 hover:text-blue-400 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-700/50">
                <div className="flex flex-col space-y-2 text-sm">
                              
                </div>
                <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 border border-blue-400/20">
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