'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
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

  // Animation variants with proper TypeScript types
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const formStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const formItem: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

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
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="mb-8" variants={fadeInUp}>
              <motion.span 
                className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              >
                #1 MENTORSHIP PLATFORM
              </motion.span>
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                }}
              >
                Most Trusted Mentorship{' '}
                <span className="text-blue-600">Platform for Doctorate</span>{' '}
                Aspirants
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }
                }}
              >
                At Aimlay, we understand that pursuing a doctorate is not just about academic excellence, 
                it is a commitment to lifelong learning, research, and impact. Thats why thousands of 
                scholars trust us as their go-to mentorship platform, where expert guidance meets 
                technology to simplify and support their doctoral journey.
              </motion.p>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={staggerItem}
                  whileHover={{ 
                    y: -5, 
                    transition: { duration: 0.3 } 
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="flex-shrink-0 p-2 bg-yellow-50 rounded-lg"
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-600 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            className="lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <motion.div 
              className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-xl"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="text-center mb-6"
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Connect with X Company
                </h3>
                <p className="text-gray-800">
                  Enter <span className="font-semibold">Your Details</span>
                </p>
              </motion.div>

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-4"
                variants={formStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.input
                  type="text"
                  name="fullName"
                  placeholder="Enter Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-0 text-black bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                  variants={formItem}
                  whileFocus={{ scale: 1.02 }}
                />

                <motion.select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-0 text-black bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700"
                  required
                  variants={formItem}
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="">Select Service</option>
                  <option value="phd">PhD Mentorship</option>
                  <option value="research">Research Guidance</option>
                  <option value="publication">Publication Support</option>
                  <option value="documentation">Documentation</option>
                </motion.select>

                <motion.div className="relative" variants={formItem}>
                  <select className="absolute left-3 top-3 bg-transparent border-0 text-gray-600 focus:outline-none">
                    <option>🇮🇳</option>
                    <option>🇺🇸</option>
                  </select>
                  <motion.input
                    type="tel"
                    name="phone"
                    placeholder="Phone No."
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-16 pr-4 py-3 rounded-lg text-black bg-white border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.input
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg text-black bg-white border-0 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                  variants={formItem}
                  whileFocus={{ scale: 1.02 }}
                />

                <motion.input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-0 text-black bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                  variants={formItem}
                  whileFocus={{ scale: 1.02 }}
                />

                <motion.textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-0 text-black bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                  variants={formItem}
                  whileFocus={{ scale: 1.02 }}
                />

                <motion.button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                  variants={formItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SUBMIT
                </motion.button>
              </motion.form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipPlatform;