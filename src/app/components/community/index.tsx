'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight , BabyIcon} from 'lucide-react';

const CommunitySection = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const communityMembers = [
    {
      name: "DR. LAGOS CHARLES",
      country: "SAINT LUCIA",
      flag: "🇱🇨",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. JAN MASUKU",
      country: "UAE",
      flag: "🇦🇪",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. APARNA SEN",
      country: "INDIA",
      flag: "🇮🇳",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. TANVEER JOSEPH",
      country: "CANADA",
      flag: "🇨🇦",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. NAGA VENKATA",
      country: "USA",
      flag: "🇺🇸",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. ALLU RAMSWAM",
      country: "INDIA",
      flag: "🇮🇳",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. MADHUSUDHAN",
      country: "PHILIPPINES",
      flag: "🇵🇭",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. SIKANKER KHAN",
      country: "UAE",
      flag: "🇦🇪",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. MILAN GAUTAM",
      country: "INDIA",
      flag: "🇮🇳",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. M. SHRIRAM",
      country: "MAURITIUS",
      flag: "🇲🇺",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. AMETH KUMAR",
      country: "INDIA",
      flag: "🇮🇳",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. PRAMOD MAHAIAN",
      country: "UAE",
      flag: "🇦🇪",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. KEERTHI DAVID",
      country: "MAURITIUS",
      flag: "🇲🇺",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. SAMUEL PETER",
      country: "USA",
      flag: "🇺🇸",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. SHEETAL KHANNA",
      country: "INDIA",
      flag: "🇮🇳",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. CARMEN WALLACE",
      country: "USA",
      flag: "🇺🇸",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. DETER MODIIKA",
      country: "AUSTRIA",
      flag: "🇦🇹",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. SACHIN GORE",
      country: "INDIA",
      flag: "🇮🇳",
      image: "/api/placeholder/150/150"
    },
    {
      name: "DR. RASMAN JAIN",
      country: "MALAYSIA",
      flag: "🇲🇾",
      image: "/api/placeholder/150/150"
    }
  ];

  const membersPerPage = 10;
  const totalPages = Math.ceil(communityMembers.length / membersPerPage);

  const getCurrentMembers = () => {
    const startIndex = currentPage * membersPerPage;
    return communityMembers.slice(startIndex, startIndex + membersPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Global Community of{' '}
            <span className="text-yellow-400">25,000+</span>
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
            Doctorates & Researchers
          </h3>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            A global ecosystem where 25,000+ doctorates and researchers have found support, direction, and recognition.
          </p>
        </div>

        {/* Community Members Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-8">
            {getCurrentMembers().map((member, index) => (
              <div
                key={`${currentPage}-${index}`}
                className="bg-white rounded-lg p-3 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-gray-200">
                  <BabyIcon/>
                </div>
                <h4 className="text-xs font-bold text-gray-900 mb-1 leading-tight">
                  {member.name}
                </h4>
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-lg">{member.flag}</span>
                  <span className="text-xs text-gray-600 font-medium">
                    {member.country}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevPage}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Page Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? 'bg-yellow-400'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Additional Stats or CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">150+</div>
              <div className="text-white text-sm">Countries</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">25,000+</div>
              <div className="text-white text-sm">Success Stories</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">15+</div>
              <div className="text-white text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default CommunitySection;