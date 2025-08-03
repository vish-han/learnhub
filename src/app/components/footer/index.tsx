'use client';

import { MapPin, Mail, Facebook, Youtube, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const services = [
    "PhD Admission",
    "UGC NET Preparation", 
    "B.Ed. Admission",
    "Law Admission",
    "Medical Courses",
    "Writing Services",
    "Thesis Writing",
    "Dissertation",
    "Paper Writing & Publication",
    "LMS",
    "Biography", 
    "Honorary Doctorate",
    "UG | PG",
    "Documentation Support",
    "Management Courses",
    "Educational Academy",
    "Pharma Courses"
  ];

  const featureLinks = [
    "Home",
    "About Us", 
    "Blog",
    "All Services",
    "Career",
    "Contact Us",
    "Question Bank",
    "Aimlay Writing",
    "Thesis Writing", 
    "Research Partner"
  ];

  const quickLinks = [
    "Web Stories",
    "Life at Aimlay",
    "University Visits",
    "Happy Clients",
    "Aimlay Foundation",
    "Become a Partner",
    "Privacy Policy",
    "Disclaimer",
    "Terms & Conditions",
    "Refund Policy",
    "Client Connect"
  ];

  const footerLinks = [
    "FAQ'S",
    "Sitemap", 
    "Disclaimer",
    "Privacy Policy",
    "Terms & Conditions"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact us</h3>
            
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-yellow-400">AIM</span>
                <span className="text-blue-400">LAY</span>
              </span>
            </div>

            {/* Map */}
            <div className="mb-6">
              <div className="bg-gray-800 rounded-lg p-4 h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-300">AIMLAY</div>
                  <div className="text-xs text-gray-400">Delhi</div>
                </div>
              </div>
              <button className="text-blue-400 text-sm mt-2 hover:underline">
                View larger map
              </button>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* App Download */}
            <div className="space-y-3">
              <a href="#" className="block">
                <img src="/api/placeholder/160/50" alt="Get it on Google Play" className="h-12" />
              </a>
              <a href="#" className="block">
                <img src="/api/placeholder/160/50" alt="Download on App Store" className="h-12" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Feature Links</h3>
            <ul className="space-y-2">
              {featureLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © 2025 Aimlay
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap items-center space-x-6">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* WhatsApp Float Button */}
        <div className="fixed bottom-6 left-6 z-50">
          <div className="bg-green-500 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-500 font-bold text-lg">💬</span>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            We are online
            <div className="text-xs text-red-100">Leave a message</div>
          </div>
        </div>

        {/* Live Chat Button */}
        <div className="fixed bottom-6 right-6 z-50"> 
          <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <Mail className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;