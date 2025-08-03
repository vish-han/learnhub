'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, BookOpen, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const [currentService, setCurrentService] = useState(0);

  const services = [
    {
      category: "Admission Guidance",
      title: "B.Ed. Courses",
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-600",
      features: [
        "UGC-Recognized Indian Universities",
        "Flexible Learning Options",
        "Complete Online Coursework"
      ]
    },
    {
      category: "Admission Guidance", 
      title: "Management Courses",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-600",
      features: [
        "Internationally Accredited Universities",
        "Flexible Learning Options",
        "Complete Online Coursework"
      ]
    },
    {
      category: "Doctorate Mentorship",
      title: "Honorary Doctorate Nomination",
      icon: <Award className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-600",
      features: [
        "For Established Professionals & Individuals",
        "Globally Accredited Universities",
        "Trusted by 2500+ Achievers Globally"
      ]
    },
    {
      category: "Doctorate Mentorship",
      title: "PhD (Doctor of Philosophy)",
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-600",
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive{' '}
              <span className="text-blue-600">Tech-Enabled Solutions</span>{' '}
              for Scholars & Professionals
            </h2>
          </div>
          <button className="hidden md:flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300">
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Services Grid */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-blue-600 rounded-2xl p-6 text-white hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="mb-4">
                  <span className="inline-block bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {service.category}
                  </span>
                  <div className="flex items-center space-x-3 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-100 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevService}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-3 bg-white shadow-lg rounded-full text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextService}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-3 bg-white shadow-lg rounded-full text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Journey Section */}
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            OUR ECOSYSTEM
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            A Seamless Journey Guided by Experts at{' '}
            <span className="text-blue-600">Every Milestone</span>
          </h2>
        </div>

        {/* Journey Steps */}
        <div className="relative">
          <div className="border-2 border-dashed border-blue-300 rounded-2xl p-8 bg-blue-50/50">
            {/* Aimlay Logo at top */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <span className="text-xl font-bold">
                  <span className="text-yellow-500">Learn</span>
                  <span className="text-blue-600">Hub</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
              {journeySteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-xl shadow-md flex items-center justify-center text-2xl hover:shadow-lg transition-shadow duration-300">
                      {step.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-blue-600 mb-1">
                      {step.step}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connecting Line */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-6 w-12 h-0.5 bg-blue-300"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Aimlay Logo */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-sm flex items-center justify-center">
                  <span className="text-white font-bold text-xs">A</span>
                </div>
                <span className="text-xl font-bold">
                  <span className="text-yellow-500">Learn</span>
                  <span className="text-blue-600">Hub</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Academic Journey?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful scholars who have achieved their academic goals with our expert guidance and comprehensive support system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;