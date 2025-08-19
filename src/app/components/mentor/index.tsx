'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Phone, Calendar, Users, UserCheck } from 'lucide-react';

const MentorsSection = () => {
  const [currentMentorSet, setCurrentMentorSet] = useState(0);

  const mentors = [
    {
      name: "Rajul Sharma",
      title: "Senior Expert",
      experience: "10 Years Experience",
      rating: 4.5,
      sessions: "3565+ Counselling",
      image: "/api/placeholder/300/300",
      specialties: ["PhD Guidance", "Research Methodology", "Publication Support"]
    },
    {
      name: "Sapna Singh", 
      title: "Sr. Mentor",
      experience: "8 Years Experience",
      rating: 4.6,
      sessions: "1579+ Counselling",
      image: "/api/placeholder/300/300",
      specialties: ["Academic Writing", "Thesis Support", "University Selection"]
    },
    {
      name: "Anil Kumar",
      title: "Senior Mentor", 
      experience: "10 Years Experience",
      rating: 4.8,
      sessions: "2230+ Counselling",
      image: "/api/placeholder/300/300",
      specialties: ["Research Design", "Data Analysis", "Publication Strategy"]
    },
    {
      name: "Megha Chaudhary",
      title: "Subject Matter Expert",
      experience: "6 Years Experience", 
      rating: 4.7,
      sessions: "1524+ Counselling",
      image: "/api/placeholder/300/300",
      specialties: ["Literature Review", "Methodology", "Academic Consulting"]
    },
    {
      name: "Dr. Priya Patel",
      title: "Lead Researcher",
      experience: "12 Years Experience",
      rating: 4.9,
      sessions: "2850+ Counselling", 
      image: "/api/placeholder/300/300",
      specialties: ["Quantitative Research", "Statistical Analysis", "Journal Publications"]
    },
    {
      name: "Dr. Rahul Mehta",
      title: "Academic Director",
      experience: "15 Years Experience",
      rating: 4.8,
      sessions: "3200+ Counselling",
      image: "/api/placeholder/300/300",
      specialties: ["Doctoral Programs", "University Partnerships", "Academic Strategy"]
    }
  ];

  const mentorsPerPage = 4;
  const totalPages = Math.ceil(mentors.length / mentorsPerPage);

  const getCurrentMentors = () => {
    const startIndex = currentMentorSet * mentorsPerPage;
    return mentors.slice(startIndex, startIndex + mentorsPerPage);
  };

  const nextMentorSet = () => {
    setCurrentMentorSet((prev) => (prev + 1) % totalPages);
  };

  const prevMentorSet = () => {
    setCurrentMentorSet((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-cyan-400 fill-current'
            : index < rating
            ? 'text-cyan-400 fill-current opacity-50'
            : 'text-slate-300'
        }`}
      />
    ));
  };

  return (
    <section 
      className="py-20 bg-slate-50"
      style={{ fontFamily: 'system-ui, -apple-system, "Inter", sans-serif' }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            <span className="inline-block bg-cyan-400/10 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-200">
              TRUSTED MENTORS
            </span>
            <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-6 leading-tight">
            Talk to the <span className="text-cyan-400 font-medium">Experts</span> Who have Mentored Thousands
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Connect with trusted mentors, advisors, and subject matter experts who bring years of experience 
            and thousands of successful counselling sessions to guide your journey.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {getCurrentMentors().map((mentor, index) => (
              <div
                key={`${currentMentorSet}-${index}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-slate-100 hover:border-cyan-200 transition-all duration-500 transform hover:scale-105 overflow-hidden"
              >
                {/* Mentor Image */}
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center group-hover:from-cyan-100 group-hover:to-cyan-200 transition-all duration-500">
                    <UserCheck className="w-20 h-20 text-slate-500 group-hover:text-cyan-600 transition-colors duration-500" />
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-lg border border-slate-200">
                    <Star className="w-4 h-4 text-cyan-400 fill-current" />
                    <span className="text-sm font-semibold text-slate-900">{mentor.rating}</span>
                  </div>

                  {/* Sessions Badge */}
                  <div className="absolute top-4 right-4 bg-cyan-500/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <span className="text-white text-xs font-semibold">{mentor.sessions}</span>
                  </div>
                </div>

                {/* Mentor Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1 group-hover:text-cyan-700 transition-colors duration-300">{mentor.name}</h3>
                  <p className="text-cyan-600 font-medium mb-2">{mentor.title}</p>
                  <p className="text-slate-600 text-sm mb-4 font-light">{mentor.experience}</p>

                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(mentor.rating)}
                    <span className="text-sm text-slate-600 ml-2 font-medium">({mentor.rating})</span>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {mentor.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded-full border border-cyan-200 font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/30 group-hover:scale-105">
                    <Phone className="w-4 h-4" />
                    <span>Book a Call Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevMentorSet}
              className="p-3 bg-white shadow-lg rounded-full text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Page Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMentorSet(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentMentorSet
                      ? 'bg-cyan-500 scale-125'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextMentorSet}
              className="p-3 bg-white shadow-lg rounded-full text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* More Mentors CTA */}
          <div className="text-center mt-8">
            <button className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/30">
              +497 MORE
            </button>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-slate-100 hover:border-cyan-200 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-cyan-50 rounded-full flex items-center justify-center group-hover:bg-cyan-100 transition-all duration-300">
              <Calendar className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors duration-300">Flexible Scheduling</h3>
            <p className="text-slate-600 font-light">Book sessions at your convenience with 24/7 availability</p>
          </div>

          <div className="group text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-slate-100 hover:border-cyan-200 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-cyan-50 rounded-full flex items-center justify-center group-hover:bg-cyan-100 transition-all duration-300">
              <Star className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors duration-300">Proven Results</h3>
            <p className="text-slate-600 font-light">95% success rate with our mentored doctorate candidates</p>
          </div>

          <div className="group text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-slate-100 hover:border-cyan-200 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-cyan-50 rounded-full flex items-center justify-center group-hover:bg-cyan-100 transition-all duration-300">
              <Users className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors duration-300">Global Network</h3>
            <p className="text-slate-600 font-light">Connect with mentors and peers from around the world</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
