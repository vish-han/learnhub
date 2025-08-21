'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, UserCheck, Chrome, Facebook } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      rating: 5,
      text: "I struggled with rejections before GradifyNow stepped in. Their team helped improve my paper, suggested suitable journals, and handled submissions efficiently. I finally got published without any stress. Highly recommended for researchers.",
      author: "Dr. Anjali Verma",
      position: "Senior Scientist",
      image: "/api/placeholder/80/80"
    },
    {
      rating: 5,
      text: "After weeks of delays, GradifyNow came to my rescue. My CDR work closely with me to perfect the synopsis. They were always available for edits and updates until final approval. I couldn't have done it without their help. Thanks GradifyNow",
      author: "Dr. Amit Dubey", 
      position: "Lecturer",
      image: "/api/placeholder/80/80"
    },
    {
      rating: 5,
      text: "Getting nominated for an honorary doctorate was a dream. GradifyNow made it happen seamlessly. Their team guided me throughout the documentation and verification steps. I truly felt recognised for my years of work. Thank you, GradifyNow.",
      author: "Dr. Michelle Gomez",
      position: "Leadership Coach & Impact Strategist", 
      image: "/api/placeholder/80/80"
    },
    {
      rating: 5,
      text: "The PhD application process seemed overwhelming until I found GradifyNow. Their systematic approach and expert guidance made everything clear and manageable. I'm now successfully enrolled in my dream program.",
      author: "Dr. Sarah Johnson",
      position: "Research Fellow",
      image: "/api/placeholder/80/80"
    },
    {
      rating: 5,
      text: "GradifyNow mentorship transformed my research approach. Their insights on methodology and publication strategies were invaluable. I've published three papers in top-tier journals within a year of working with them.",
      author: "Dr. Ahmed Hassan",
      position: "Assistant Professor",
      image: "/api/placeholder/80/80"
    }
  ];

  const platforms = [
    {
      name: "Google",
      icon: Chrome, // Using Chrome as Google alternative
      rating: 4.4,
      color: "bg-slate-700"
    },
    {
      name: "Facebook", 
      icon: Facebook,
      rating: 4.9,
      color: "bg-cyan-600"
    },
    {
      name: "JustDial",
      text: "Jd", // Fallback text for JustDial
      rating: 4.5,
      color: "bg-slate-800"
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
        className={`w-4 h-4 ${
          index < rating ? 'text-cyan-400 fill-current' : 'text-slate-300'
        }`}
      />
    ));
  };

  return (
    <section 
      className="py-20 bg-white"
      style={{ fontFamily: 'system-ui, -apple-system, "Inter", sans-serif' }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            <span className="inline-block bg-cyan-400/10 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-200">
              CLIENT TESTIMONIALS
            </span>
            <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-6 leading-tight">
            Words of Trust from <span className="text-cyan-400 font-medium">Global Trailblazers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Real stories from real professionals across the globe. These testimonials reflect trust, 
            transformation, and the lasting impact of being guided with purpose and precision.
          </p>
        </div>

        {/* Platform Ratings */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-3xl px-12 py-8 flex items-center justify-center gap-16 shadow-lg border border-gray-100">
            {platforms.map((platform, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Icon Container */}
                <div className={`w-14 h-14 ${platform.color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 shadow-sm`}>
                  {platform.icon ? (
                    <platform.icon className="w-7 h-7 text-white" />
                  ) : (
                    <span className="text-white font-bold text-lg">{platform.text}</span>
                  )}
                </div>
                
                {/* Rating Number */}
                <div className="text-2xl font-bold text-slate-900 mb-2">
                  {platform.rating}
                </div>
                
                {/* Stars */}
                <div className="flex items-center justify-center gap-1">
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
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-slate-100 hover:border-cyan-200 transition-all duration-500 ${
                    offset === 1 ? 'transform scale-105 border-cyan-300 shadow-xl bg-gradient-to-br from-cyan-50/30 to-white' : 'hover:scale-102'
                  }`}
                >
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-all duration-300">
                      <Quote className="w-6 h-6 text-cyan-600" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-700 leading-relaxed mb-6 font-light italic">
                    {testimonial.text}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center group-hover:from-cyan-100 group-hover:to-cyan-200 transition-all duration-300">
                      <UserCheck className="w-6 h-6 text-slate-600 group-hover:text-cyan-600 transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300">{testimonial.author}</h4>
                      <p className="text-slate-600 text-sm font-light">{testimonial.position}</p>
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
              className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Page Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-cyan-500 scale-125'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-20 bg-gradient-to-br from-slate-50 to-cyan-50 rounded-2xl p-8 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-semibold text-cyan-600 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-slate-600 font-medium">Success Rate</div>
            </div>
            <div className="group">
              <div className="text-3xl font-semibold text-cyan-600 mb-2 group-hover:scale-110 transition-transform duration-300">15,000+</div>
              <div className="text-slate-600 font-medium">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-3xl font-semibold text-cyan-600 mb-2 group-hover:scale-110 transition-transform duration-300">4.8/5</div>
              <div className="text-slate-600 font-medium">Average Rating</div>
            </div>
            <div className="group">
              <div className="text-3xl font-semibold text-cyan-600 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-slate-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
