'use client';

import { useState } from 'react';
import { Users, Cpu, Clock, University } from 'lucide-react';

const MentorshipPlatform = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    service: '',
    phone: '',
    email: '',
    state: '',
    message: ''
  });

  const features = [
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "Personalized Unbiased Mentorship",
      description: "We match you with experienced mentors who've walked the path you're on- PhD holders, academic experts, and research professionals who provide tailored guidance at every step."
    },
    {
      icon: <University className="w-8 h-8 text-yellow-500" />,
      title: "Accredited University Alliances",
      description: "We work closely with a wide network of national and international accredited universities, ensuring that your doctorate journey is not only authentic but also aligned with global academic standards."
    },
    {
      icon: <Cpu className="w-8 h-8 text-yellow-500" />,
      title: "Tech-Enabled Platform",
      description: "Our robust system ensures timely updates, milestone tracking, and easy communication between scholars and mentors, making your doctorate experience seamless and structured."
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: "15 Years of Credibility & Trust",
      description: "With a proven track record, thousands of successful doctorates, and a team of dedicated academic experts, Aimlay has become World's most trusted platform for doctorate mentorship."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                #1 MENTORSHIP PLATFORM
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Most Trusted Mentorship{' '}
                <span className="text-blue-600">Platform for Doctorate</span>{' '}
                Aspirants
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Aimlay, we understand that pursuing a doctorate is not just about academic excellence, 
                it is a commitment to lifelong learning, research, and impact. Thats why thousands of 
                scholars trust us as their go-to mentorship platform, where expert guidance meets 
                technology to simplify and support their doctoral journey.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-yellow-50 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-600 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Connect with Aimlay
                </h3>
                <p className="text-gray-800">
                  Enter <span className="font-semibold">Your Details</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-0 text-black  bg-white focus:ring-2  focus:ring-blue-500 focus:outline-none"
                  required
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-0 text-black  bg-white =focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="phd">PhD Mentorship</option>
                  <option value="research">Research Guidance</option>
                  <option value="publication">Publication Support</option>
                  <option value="documentation">Documentation</option>
                </select>

                <div className="relative">
                  <select className="absolute left-3 top-3 bg-transparent border-0 text-gray-600 focus:outline-none">
                    <option>🇮🇳</option>
                    <option>🇺🇸</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No."
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-16 pr-4 py-3 rounded-lg text-black  bg-white border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg text-black  bg-white border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-0 text-black  bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-0 text-black  bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipPlatform;