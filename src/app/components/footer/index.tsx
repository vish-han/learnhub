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
    "Home", "About Us", "Blog", "All Services", "Career", "Contact Us",
    "Question Bank", "GradifyNow Writing", "Thesis Writing", "Research Partner"
  ];

  const quickLinks = [
    "Web Stories", "Life at GradifyNow", "University Visits", "Happy Clients",
    "GradifyNow Foundation", "Become a Partner", "Privacy Policy", "Disclaimer",
    "Terms & Conditions", "Refund Policy", "Client Connect"
  ];

  const footerLinks = [
    "FAQ'S", "Sitemap", "Disclaimer", "Privacy Policy", "Terms & Conditions"
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 text-white relative pt-16 pb-12" style={{ fontFamily: 'system-ui, -apple-system, "Inter", sans-serif' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-9 h-9 bg-gradient-to-tr from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-extrabold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-cyan-400">Learn</span>
                <span className="text-white">Hub</span>
              </span>
            </div>

            {/* Map */}
            <div className="mb-6">
              <div className="bg-slate-800/80 rounded-xl p-4 h-44 flex items-center justify-center shadow-inner">
                <div className="text-center">
                  <MapPin className="w-7 h-7 text-cyan-400 mx-auto mb-2" />
                  <div className="text-sm text-gray-200 font-semibold">GradifyNow HQ</div>
                  <div className="text-xs text-gray-400">New Delhi, India</div>
                </div>
              </div>
              <button className="text-cyan-400 text-sm mt-2 hover:underline">
                View larger map
              </button>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center hover:scale-110 hover:bg-cyan-500 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:scale-110 hover:bg-pink-500 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:scale-110 hover:bg-blue-600 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:scale-110 hover:bg-blue-500 transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 hover:bg-red-500 transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* App Download */}
            
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-cyan-100/80 hover:text-white transition-colors text-sm">
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
                  <a href="#" className="text-cyan-100/80 hover:text-white transition-colors text-sm">
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
                  <a href="#" className="text-cyan-100/80 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-14 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <div className="text-cyan-100/70 text-xs mb-3 md:mb-0">
              © 2025 GradifyNow. All rights reserved.
            </div>
            {/* Footer Links */}
            <div className="flex flex-wrap items-center gap-5">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-cyan-100/60 hover:text-white transition-colors text-xs font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-7 left-7 z-50">
        {/* <div className="bg-green-500 rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-green-500 font-bold text-lg">💬</span>
          </div>
        </div> */}
      
      </div>

      {/* Live Chat Button */}
      {/* <div className="fixed bottom-7 right-7 z-50">
        <button className="bg-cyan-700 hover:bg-cyan-600 text-white rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110">
          <Mail className="w-6 h-6" />
        </button>
      </div> */}

      {/* Background Decorations */}
      <div className="absolute -top-6 -left-16 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-44 bg-cyan-600/10 rounded-tl-full blur-3xl opacity-70 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
