'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      rating: 5,
      text: "I struggled with rejections before Aimlay stepped in. Their team helped improve my paper, suggested suitable journals, and handled submissions efficiently. I finally got published without any stress. Highly recommended for researchers.",
      author: "Dr. Anjali Verma",
      position: "Senior Scientist",
      image: "/api/placeholder/80/80"
    },
    {
      rating: 5,
      text: "After weeks of delays, Aimlay came to my rescue. My CDR work closely with me to perfect the synopsis. They were always available for edits and updates until final approval. I couldn't have done it without their help. Thanks Aimlay",
      author: "Dr. Amit Dubey", 
      position: "Lecturer",
      image: "/api/placeholder/80/80"
    },
    {
      rating: 5,
      text: "Getting nominated for an honorary doctorate was a dream. Aimlay made it happen seamlessly. Their team guided me throughout the documentation and verification steps. I truly felt recognised for my years of work. Thank you, Aimlay.",
      author: "Dr. Michelle Gomez",
      position: "Leadership Coach & Impact Strategist", 
      image: "/api/placeholder/80/80"
    },
    {
      rating: 5,
      text: "The PhD application process seemed overwhelming until I found Aimlay. Their systematic approach and expert guidance made everything clear and manageable. I'm now successfully enrolled in my dream program.",
      author: "Dr. Sarah Johnson",
      position: "Research Fellow",
      image: "/api/placeholder/80/80"
    },
    {
      rating: 5,
      text: "Aimlay's mentorship transformed my research approach. Their insights on methodology and publication strategies were invaluable. I've published three papers in top-tier journals within a year of working with them.",
      author: "Dr. Ahmed Hassan",
      position: "Assistant Professor",
      image: "/api/placeholder/80/80"
    }
  ];

  const platforms = [
    {
      name: "Google",
      logo: "G",
      rating: 4.4,
      color: "bg-red-500"
    },
    {
      name: "Facebook", 
      logo: "f",
      rating: 4.9,
      color: "bg-blue-600"
    },
    {
      name: "JustDial",
      logo: "Jd", 
      rating: 4.5,
      color: "bg-orange-500"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            TRUSTED MENTORS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Words of Trust from <span className="text-blue-600">Global Trailblazers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Real stories from real professionals across the globe. These testimonials reflect trust, 
            transformation, and the lasting impact of being guided with purpose and precision.
          </p>
        </div>

        {/* Platform Ratings */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-50 rounded-2xl p-8 flex items-center space-x-8">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${platform.color} rounded-lg flex items-center justify-center mb-3`}>
                  <span className="text-white font-bold text-xl">{platform.logo}</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{platform.rating}</div>
                <div className="flex justify-center space-x-1">
                  {renderStars(Math.floor(platform.rating))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((offset) => {
              const testimonialIndex = (currentTestimonial + offset) % testimonials.length;
              const testimonial = testimonials[testimonialIndex];
              
              return (
                <div
                  key={testimonialIndex}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    offset === 1 ? 'transform scale-105 border-2 border-blue-200' : ''
                  }`}
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-blue-600" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-blue-600">{testimonial.author}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Page Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-blue-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;