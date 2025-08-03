'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Phone, Calendar ,Users} from 'lucide-react';

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
            ? 'text-yellow-400 fill-current'
            : index < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            TRUSTED MENTORS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Talk to the <span className="text-blue-600">Experts</span> Who have Mentored Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
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
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                {/* Mentor Image */}
                <div className="relative">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-64 object-cover"
                  />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-900">{mentor.rating}</span>
                  </div>

                  {/* Sessions Badge */}
                  <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs font-semibold">{mentor.sessions}</span>
                  </div>
                </div>

                {/* Mentor Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{mentor.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{mentor.experience}</p>

                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(mentor.rating)}
                    <span className="text-sm text-gray-600 ml-2">({mentor.rating})</span>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {mentor.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
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
              className="p-3 bg-white shadow-lg rounded-full text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
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
                      ? 'bg-blue-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextMentorSet}
              className="p-3 bg-white shadow-lg rounded-full text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* More Mentors CTA */}
          <div className="text-center mt-8">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
              +497 MORE
            </button>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">Book sessions at your convenience with 24/7 availability</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
            <p className="text-gray-600">95% success rate with our mentored doctorate candidates</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
              <Users />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Global Network</h3>
            <p className="text-gray-600">Connect with mentors and peers from around the world</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;