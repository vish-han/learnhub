'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle, 
  Building, 
  Globe,
  Users
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-cyan-400" />,
      title: "Address",
      details: [
        "GradifyNow Education Center",
        "Block A, Sector 18",
        "Noida, Uttar Pradesh 201301",
        "India"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-cyan-400" />,
      title: "Phone",
      details: [
        "+91 98765 43210",
        "+91 11 4567 8900"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      title: "Email",
      details: [
        "info@gradifynow.com",
        "support@gradifynow.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM (Indian Standard Time)",
        "Weekends: Closed" 
      ]
    }
  ];

  const officeFeatures = [
    {
      icon: <Building className="w-8 h-8 text-cyan-400" />,
      title: "Modern Campus",
      description: "State-of-the-art facilities with advanced learning infrastructure"
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Global Reach",
      description: "Connected to universities and institutions worldwide"
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Expert Team",
      description: "Dedicated counselors and academic experts available on-site"
    }
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 } 
    }
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8 } 
    }
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8 } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <div 
      className="bg-slate-50 text-slate-800"
      style={{ fontFamily: 'system-ui, -apple-system, "Inter", sans-serif' }}
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/5 rounded-full translate-y-24 -translate-x-24 blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
              <span className="inline-block bg-cyan-400/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-400/30">
                GET IN TOUCH
              </span>
              <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-normal mb-6 leading-tight">
              Contact <span className="text-cyan-400 font-medium">GradifyNow</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Ready to start your academic journey? Get in touch with our expert team for personalized guidance and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200 hover:border-cyan-200 transition-all duration-500 group"
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-50 rounded-xl mb-4 group-hover:bg-cyan-100 transition-colors duration-300">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors duration-300">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-slate-600 text-sm font-light">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
                <div className="mb-8">
                  <h2 className="text-3xl font-semibold text-slate-900 mb-4">Send us a Message</h2>
                  <p className="text-slate-600 font-light">
                    Fill out the form below and we will get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="phd">PhD Programs</option>
                      <option value="bed">B.Ed. Courses</option>
                      <option value="management">Management Courses</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your goals and how we can help you..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/30"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Google Map and Office Features */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
              className="space-y-8"
            >
              {/* Google Map */}
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Find Us</h3>
                <div className="bg-slate-100 rounded-xl h-64 flex items-center justify-center mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0334629551265!2d77.31577287549607!3d28.585675075696424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1642589867543!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '0.75rem' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl"
                  />
                </div>
                <p className="text-slate-600 text-sm font-light">
                  Our office is conveniently located in the heart of Noida business district, easily accessible by metro and road.
                </p>
              </div>

              {/* Office Features */}
              <div className="space-y-4">
                {officeFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-slate-200 hover:border-cyan-200 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-colors duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-slate-600 font-light">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-slate-800 to-cyan-900 rounded-2xl p-12 text-center text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <MessageCircle className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-3xl font-semibold mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-slate-300 mb-8 font-light max-w-2xl mx-auto">
              Our expert counselors are available for immediate consultation. 
              Book a free session or call us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-400/30">
                Book Free Consultation
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                Call Now: +91 98765 43210
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-green-500 rounded-full p-4 shadow-2xl hover:shadow-green-500/30 hover:scale-110 transition-all duration-300 cursor-pointer">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -top-2 -left-16 bg-slate-900 text-white text-sm px-3 py-1 rounded-lg shadow-lg">
          Chat with us!
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
