'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, BookOpen, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      category: "Admission Guidance",
      link:"/ug-pg",
      title: "UG-PG Courses",
      icon: <GraduationCap className="w-8 h-8 text-cyan-400" />,
      color: "bg-slate-800",
      features: [
        "UGC-Recognized Indian Universities",
        "Flexible Learning Options",
        "Complete Online Coursework"
      ]
    },
    {
      category: "Admission Guidance", 
      title: "Diploma Courses",
      link:"/diploma",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      color: "bg-slate-800",
      features: [
        "Internationally Accredited Universities",
        "Flexible Learning Options",
        "Complete Online Coursework"
      ]
    },
    {
      category: "Biography Mentorship",
      title: "Biograghy",
      link:"/biography",
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      color: "bg-slate-800",
      features: [
        "For Established Professionals & Individuals",
        "Globally Accredited Universities",
        "Trusted by 2500+ Achievers Globally"
      ]
    },
    {
      category: "Doctorate Mentorship",
      title: "PhD (Doctor of Philosophy)",
      link:"/phd",
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
      color: "bg-slate-800",
      features: [
        "Internationally Accredited Universities",
        "Admission to Completion Support",
        "Complete Research Work Support"
      ]
    }
  ];

  const journeySteps = [
    {
      step: "Aspirant",
      icon: "👨‍🎓",
      description: "Start your journey"
    },
    {
      step: "Advisor",
      icon: "👨‍🏫",
      description: "Get expert guidance"
    },
    {
      step: "Documentation",
      icon: "📄",
      description: "Prepare your documents"
    },
    {
      step: "Enrolment",
      icon: "🏛️",
      description: "Join the program"
    },
    {
      step: "Guided Mentorship",
      icon: "🤝",
      description: "Ongoing support"
    },
    {
      step: "Research Support",
      icon: "🔬",
      description: "Research assistance"
    },
    {
      step: "Recognition",
      icon: "🏆",
      description: "Achieve your doctorate"
    }
  ];

  const nextService = () => {
    setCurrentService((prev) => (prev + 1) % Math.ceil(services.length / 4));
  };

  const prevService = () => {
    setCurrentService((prev) => (prev - 1 + Math.ceil(services.length / 4)) % Math.ceil(services.length / 4));
  };

  return (
    <section 
      className="py-20 bg-slate-50"
      style={{ fontFamily: 'system-ui, -apple-system, "Inter", sans-serif' }}
    >
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
              <span className="inline-block bg-cyan-400/10 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-200">
                OUR SERVICES
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-4 leading-tight">
              Comprehensive{' '}
              <span className="text-cyan-400 font-medium">Tech-Enabled Solutions</span>{' '}
              for Scholars & Professionals
            </h2>
          </div>
          {/* <button className="hidden md:flex items-center space-x-2 bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-400/30">
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </button> */}
        </div>

        {/* Services Grid */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white hover:transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl border border-slate-700 hover:border-cyan-400/50 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-400/10 rounded-full -translate-y-10 translate-x-10 group-hover:bg-cyan-400/20 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-4">
                    <span className="inline-block bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-semibold mb-4 border border-cyan-400/30">
                      {service.category}
                    </span>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-cyan-400/20 rounded-lg group-hover:bg-cyan-400/30 transition-all duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-cyan-300 transition-colors duration-300">{service.title}</h3>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`/service/${service.link}`}>
                  <button className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 group-hover:scale-105">
                    Enroll Now
                  </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevService}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-3 bg-white shadow-lg rounded-full text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextService}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-3 bg-white shadow-lg rounded-full text-slate-600 hover:text-cyan-600 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Journey Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            <span className="inline-block bg-cyan-400/10 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-200">
              OUR ECOSYSTEM
            </span>
            <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-8 leading-tight">
            A Seamless Journey Guided by Experts at{' '}
            <span className="text-cyan-400 font-medium">Every Milestone</span>
          </h2>
        </div>

        {/* Journey Steps */}
        <div className="relative">
          <div className="border-2 border-dashed border-cyan-300 rounded-2xl p-8 bg-gradient-to-br from-cyan-50/30 to-slate-50/50 backdrop-blur-sm">
            {/* Logo at top */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-2xl font-semibold">
                  <span className="text-cyan-500">Gradify</span>
                  <span className="text-slate-800">Now</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-xl shadow-md border border-slate-200 flex items-center justify-center text-2xl hover:shadow-lg hover:border-cyan-300 transition-all duration-300 group-hover:scale-110">
                      {step.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-slate-800 mb-1 group-hover:text-cyan-600 transition-colors duration-300">
                      {step.step}
                    </h4>
                    <p className="text-xs text-slate-600 font-light">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connecting Line */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-6 w-12 h-0.5 bg-gradient-to-r from-cyan-300 to-cyan-400"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Logo */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-2xl font-semibold">
                  <span className="text-cyan-500">Gradify</span>
                  <span className="text-slate-800">Now</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Ready to Start Your Academic Journey?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto font-light">
                Join thousands of successful scholars who have achieved their academic goals with our expert guidance and comprehensive support system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a href='/contact'>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                  Schedule a Consultation
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
