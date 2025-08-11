'use client';
import { motion, Variants } from 'framer-motion';

export default function About() {
  const coreValues = [
    {
      title: "Accessibility",
      description: "Making learning opportunities available to all, regardless of geography or background."
    },
    {
      title: "Integrity", 
      description: "Operating with honesty, transparency, and responsibility in all we do."
    },
    {
      title: "Innovation",
      description: "Continuously evolving through technology and creativity to meet the needs of modern learners."
    },
    {
      title: "Empowerment",
      description: "Enabling individuals to take charge of their learning and unlock their potential."
    },
    {
      title: "Commitment",
      description: "Delivering consistent value and outcomes for learners, partners, and communities."
    }
  ];

  // Animation variants with proper TypeScript types
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8
      } 
    }
  };

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8
      } 
    }
  };

  const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8
      } 
    }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8
      } 
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
      transition: { 
        duration: 0.6
      } 
    }
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A Global Vision Rooted in <span className="text-yellow-500">Purposeful Leadership</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <p className="text-lg leading-relaxed text-gray-700">
                Founded in <strong className="text-blue-600">2015</strong> by <strong className="text-blue-600">Mr. Keshav Goswami</strong>, XYZ Group was born from a simple yet powerful idea: to make quality education accessible, flexible, and relevant for all — especially for working professionals and lifelong learners striving to advance their careers and personal growth.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                What began as a modest initiative has since evolved into a globally recognized, professionally incorporated ed-tech enterprise, committed to transforming education through technology, innovation, and purpose.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-yellow-50 p-8 rounded-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Journey</h3>
              <p className="text-gray-700 leading-relaxed">
                Guided by Mr. Goswami's visionary leadership, XYZ Group has consistently worked to bridge the gap between ambition and academic achievement, helping learners across the world unlock their full potential.
              </p>
              <motion.div 
                className="mt-6 p-4 bg-white rounded-lg border-l-4 border-yellow-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      delay: 0.4, 
                      duration: 0.6
                    } 
                  }
                }}
              >
                <p className="text-gray-800 font-medium">
                  Today, XYZ stands as a symbol of trust, transformation, and opportunity — empowering individuals through learner-centric solutions, industry-aligned programs, and strategic collaborations with academic institutions worldwide.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empowering Education Through <span className="text-blue-600">Innovation and Values</span>
            </h2>
          </motion.div>
          
          <div className="space-y-8">
            <motion.p 
              className="text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    delay: 0.2, 
                    duration: 0.8
                  } 
                }
              }}
            >
              XYZ Group is a global education ecosystem committed to transforming lives through purpose-driven innovation and inclusive learning. The Group comprises multiple strategic verticals — XYZ Private Limited, XYZ Inc, XYZ Foundation, XYZ LLC FZ, and the Association for Awareness of Applied Research — each contributing uniquely to our collective mission.
            </motion.p>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-xl text-blue-600 font-semibold">
                  To empower individuals through education that is accessible, relevant, and transformative.
                </p>
              </div>
              
              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-yellow-500 p-6 rounded-xl text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { 
                      delay: 0.4, 
                      duration: 0.8
                    } 
                  }
                }}
              >
                <p className="text-lg leading-relaxed">
                  At the core of XYZ Group is its visionary leader, <strong>Mr. Keshav Goswami, Chairman and CEO</strong>, whose unwavering dedication to <strong>United Nations Sustainable Development Goal 4 (SDG 4): Quality Education for All</strong> inspires every initiative we undertake.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              A <span className="text-yellow-500">Values-Driven</span> Approach to Learning
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our foundation is built on five core values that guide every program, platform, and partnership we develop.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {coreValues.map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500"
                variants={staggerItem}
                whileHover={{ 
                  y: -5, 
                  transition: { 
                    duration: 0.3
                  } 
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  delay: 0.6, 
                  duration: 0.8
                } 
              }
            }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-yellow-50 p-8 rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                These values ensure that every learner enjoys a <strong className="text-blue-600">personalized, flexible, and impactful experience</strong> — one that meets both academic and real-world needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Without Limits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Learning Without <span className="text-yellow-400">Limits</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInLeft}
            >
              <p className="text-lg leading-relaxed">
                With a strong international presence and a portfolio of global partnerships, XYZ Group is redefining how people learn, grow, and succeed. We are not just building academic pathways — we are creating lifelong opportunities that help individuals thrive in an ever-changing world.
              </p>
              
              <p className="text-lg leading-relaxed">
                Whether through digital platforms, corporate learning, higher education collaborations, or social impact initiatives, XYZ Group remains steadfast in its mission.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Commitment</h3>
              <p className="text-xl font-semibold">
                To make learning limitless, inclusive, and empowering for all.
              </p>
              <motion.div 
                className="mt-6 flex justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    transition: { 
                      delay: 0.5, 
                      duration: 0.6
                    } 
                  }
                }}
              >
                <motion.button 
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    transition: {
                      duration: 0.2
                    }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    transition: {
                      duration: 0.1
                    }
                  }}
                >
                  Join Our Journey
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}