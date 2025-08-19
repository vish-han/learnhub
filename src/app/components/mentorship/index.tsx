'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Users, Cpu, Clock, University, ArrowRight, CheckCircle } from 'lucide-react';

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
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Personalized Unbiased Mentorship",
      description: "We match you with experienced mentors who've walked the path you're on- PhD holders, academic experts, and research professionals who provide tailored guidance at every step.",
      highlight: "Expert Guidance"
    },
    {
      icon: <University className="w-8 h-8 text-cyan-400" />,
      title: "Accredited University Alliances", 
      description: "We work closely with a wide network of national and international accredited universities, ensuring that your doctorate journey is not only authentic but also aligned with global academic standards.",
      highlight: "Global Standards"
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      title: "Tech-Enabled Platform",
      description: "Our robust system ensures timely updates, milestone tracking, and easy communication between scholars and mentors, making your doctorate experience seamless and structured.",
      highlight: "Seamless Experience"
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-400" />,
      title: "15 Years of Credibility & Trust",
      description: "With a proven track record, thousands of successful doctorates, and a team of dedicated academic experts, Aimlay has become World's most trusted platform for doctorate mentorship.",
      highlight: "Proven Results"
    }
  ];

  const benefits = [
    "Expert PhD mentors",
    "Global university network", 
    "Tech-enabled tracking",
    "15+ years experience"
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
        staggerChildren: 0.15,
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
        staggerChildren: 0.08,
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
    <section className="py-24 bg-slate-50" style={{ fontFamily: 'system-ui, -apple-system, "Inter", sans-serif' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left Content - Expanded */}
          <motion.div 
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Header Section */}
            <motion.div className="mb-12" variants={fadeInUp}>
              <motion.div 
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
                <span className="inline-block bg-cyan-400/10 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-200">
                  #1 MENTORSHIP PLATFORM
                </span>
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-6xl font-normal text-slate-900 mb-6 leading-tight"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
                }}
              >
                Most Trusted{' '}
                <span className="text-cyan-400 font-medium">Mentorship Platform</span>{' '}
                for Doctorate Aspirants
              </motion.h2>

              <motion.p 
                className="text-lg text-slate-600 leading-relaxed mb-8 font-light"
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

              {/* Quick Benefits */}
              <motion.div 
                className="flex flex-wrap gap-3 mb-8"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1, 
                    transition: { 
                      staggerChildren: 0.1,
                      delay: 0.6 
                    } 
                  }
                }}
              >
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
                    }}
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-medium text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Features Grid - Improved Layout */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-cyan-200 transition-all duration-500 overflow-hidden relative"
                  variants={staggerItem}
                  whileHover={{ 
                    y: -8, 
                    transition: { duration: 0.4 } 
                  }}
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-start gap-4 mb-4"
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="flex-shrink-0 p-3 bg-cyan-50 rounded-xl group-hover:bg-cyan-100 transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300">
                            {feature.title}
                          </h3>
                        </div>
                        <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-medium rounded-full mb-3">
                          {feature.highlight}
                        </span>
                      </div>
                    </motion.div>
                    <p className="text-slate-600 leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Form - Improved Design */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <motion.div 
              className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <motion.div 
                  className="text-center mb-8"
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                >
                  <div className="inline-flex items-center gap-2 bg-cyan-400/20 px-4 py-2 rounded-full mb-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-cyan-300 text-sm font-medium">Free Consultation</span>
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-3">
                    Start Your Journey
                  </h3>
                  <p className="text-slate-300 font-light">
                    Connect with our experts and take the first step towards your doctorate
                  </p>
                </motion.div>

                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-5"
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
                    className="w-full px-5 py-4 rounded-xl border-0 text-slate-900 bg-white/95 backdrop-blur-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none font-medium placeholder-slate-500"
                    required
                    variants={formItem}
                    whileFocus={{ scale: 1.02 }}
                  />

                  <motion.select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-xl border-0 text-slate-900 bg-white/95 backdrop-blur-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none font-medium"
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
                    <select className="absolute left-4 top-4 bg-transparent border-0 text-slate-600 focus:outline-none z-10">
                      <option>🇮🇳</option>
                      <option>🇺🇸</option>
                    </select>
                    <motion.input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-16 pr-5 py-4 rounded-xl text-slate-900 bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-cyan-400 focus:outline-none font-medium placeholder-slate-500"
                      required
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-xl text-slate-900 bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-cyan-400 focus:outline-none font-medium placeholder-slate-500"
                    required
                    variants={formItem}
                    whileFocus={{ scale: 1.02 }}
                  />

                  <motion.input
                    type="text"
                    name="state"
                    placeholder="State/Region"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-xl border-0 text-slate-900 bg-white/95 backdrop-blur-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none font-medium placeholder-slate-500"
                    required
                    variants={formItem}
                    whileFocus={{ scale: 1.02 }}
                  />

                  <motion.textarea
                    name="message"
                    placeholder="Tell us about your goals..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl border-0 text-slate-900 bg-white/95 backdrop-blur-sm focus:ring-2 focus:ring-cyan-400 focus:outline-none resize-none font-medium placeholder-slate-500"
                    variants={formItem}
                    whileFocus={{ scale: 1.02 }}
                  />

                  <motion.button
                    type="submit"
                    className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-400/30"
                    variants={formItem}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.form>

                <motion.p 
                  className="text-center text-slate-400 text-sm mt-6 font-light"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { delay: 1.2 } }
                  }}
                >
                  Free consultation • No spam • Secure & confidential
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipPlatform;
