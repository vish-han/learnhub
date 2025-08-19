'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Globe, Award } from 'lucide-react';

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
    <section 
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 relative overflow-hidden"
      style={{ fontFamily: 'system-ui, -apple-system, "Inter", sans-serif' }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            <span className="inline-block bg-cyan-400/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-400/30">
              GLOBAL NETWORK
            </span>
            <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
            Global Community of{' '}
            <span className="text-cyan-400 font-medium">25,000+</span>
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-8">
            Doctorates & Researchers
          </h3>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
            A global ecosystem where 25,000+ doctorates and researchers have found support, direction, and recognition across 150+ countries worldwide.
          </p>
        </div>

        {/* Community Members Grid */}
        <div className="relative mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-8">
            {getCurrentMembers().map((member, index) => (
              <div
                key={`${currentPage}-${index}`}
                className="group bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center group-hover:from-cyan-100 group-hover:to-cyan-200 transition-all duration-300">
                  <Users className="w-8 h-8 text-slate-600 group-hover:text-cyan-600 transition-colors duration-300" />
                </div>
                <h4 className="text-xs font-semibold text-slate-900 mb-2 leading-tight group-hover:text-cyan-900 transition-colors duration-300">
                  {member.name}
                </h4>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg">{member.flag}</span>
                  <span className="text-xs text-slate-600 font-medium">
                    {member.country}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={prevPage}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400 text-white transition-all duration-300 group"
              disabled={totalPages <= 1}
            >
              <ChevronLeft className="w-5 h-5 group-hover:text-cyan-400 transition-colors duration-300" />
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentPage
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-cyan-400/20 hover:border-cyan-400 text-white transition-all duration-300 group"
              disabled={totalPages <= 1}
            >
              <ChevronRight className="w-5 h-5 group-hover:text-cyan-400 transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-8 border border-white/20">
            <div className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-cyan-400/20 rounded-full group-hover:bg-cyan-400/30 transition-all duration-300">
                <Globe className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-semibold text-cyan-400 mb-1">150+</div>
              <div className="text-slate-300 text-sm font-medium">Countries</div>
            </div>

            <div className="w-px h-16 bg-white/30 hidden sm:block"></div>

            <div className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-cyan-400/20 rounded-full group-hover:bg-cyan-400/30 transition-all duration-300">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-semibold text-cyan-400 mb-1">25,000+</div>
              <div className="text-slate-300 text-sm font-medium">Success Stories</div>
            </div>

            <div className="w-px h-16 bg-white/30 hidden sm:block"></div>

            <div className="text-center group">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 bg-cyan-400/20 rounded-full group-hover:bg-cyan-400/30 transition-all duration-300">
                <Award className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-semibold text-cyan-400 mb-1">15+</div>
              <div className="text-slate-300 text-sm font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-slate-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default CommunitySection;
