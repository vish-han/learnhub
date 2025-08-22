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
    <div 
      className="bg-white text-slate-800"
      style={{ fontFamily: 'system-ui, -apple-system, "Inter", sans-serif' }}
    >
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
              <span className="inline-block bg-cyan-400/10 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-200">
                OUR STORY
              </span>
              <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-6 leading-tight">
              A Global Vision Rooted in <span className="text-cyan-400 font-medium">Purposeful Leadership</span>
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
              <p className="text-lg leading-relaxed text-slate-700 font-light">
                Founded in <strong className="text-cyan-600 font-semibold">2015</strong> by <strong className="text-cyan-600 font-semibold">Mr. Keshav Goswami</strong>,GridifyNow was born from a simple yet powerful idea: to make quality education accessible, flexible, and relevant for all — especially for working professionals and lifelong learners striving to advance their careers and personal growth.
              </p>
              
              <p className="text-lg leading-relaxed text-slate-700 font-light">
                What began as a modest initiative has since evolved into a globally recognized, professionally incorporated ed-tech enterprise, committed to transforming education through technology, innovation, and purpose.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-cyan-50 to-slate-50 p-8 rounded-2xl border border-cyan-100 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Journey</h3>
              <p className="text-slate-700 leading-relaxed font-light">
                Guided by Mr. Goswami visionary leadership, GradifyNow has consistently worked to bridge the gap between ambition and academic achievement, helping learners across the world unlock their full potential.
              </p>
              <motion.div 
                className="mt-6 p-6 bg-white rounded-xl border-l-4 border-cyan-400 shadow-sm"
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
                <p className="text-slate-800 font-medium">
                  Today, GradifyNow stands as a symbol of trust, transformation, and opportunity — empowering individuals through learner-centric solutions, industry-aligned programs, and strategic collaborations with academic institutions worldwide.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
              <span className="inline-block bg-cyan-400/10 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-200">
                OUR MISSION
              </span>
              <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-6 leading-tight">
              Empowering Education Through <span className="text-cyan-400 font-medium">Innovation and Values</span>
            </h2>
          </motion.div>
          
          <div className="space-y-8">
            <motion.p 
              className="text-lg leading-relaxed text-slate-700 text-center max-w-4xl mx-auto font-light"
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
              GradifyNow is a global education ecosystem committed to transforming lives through purpose-driven innovation and inclusive learning. The Group comprises multiple strategic verticals — GradifyNow Private Limited, GradifyNow Inc, GradifyNow Foundation, GradifyNow LLC FZ, and the Association for Awareness of Applied Research — each contributing uniquely to our collective mission.
            </motion.p>
            
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-semibold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-xl text-cyan-600 font-medium">
                  To empower individuals through education that is accessible, relevant, and transformative.
                </p>
              </div>
              
              <motion.div 
                className="bg-gradient-to-r from-slate-800 to-cyan-900 p-6 rounded-xl text-white"
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
                <p className="text-lg leading-relaxed font-light">
                  At the core of GradifyNow is its visionary leader, <strong className="text-cyan-300 font-semibold">Mr. Keshav Goswami, Chairman and CEO</strong>, whose unwavering dedication to <strong className="text-cyan-300 font-semibold">United Nations Sustainable Development Goal 4 (SDG 4): Quality Education for All</strong> inspires every initiative we undertake.
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
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
              <span className="inline-block bg-cyan-400/10 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-200">
                CORE VALUES
              </span>
              <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-normal text-slate-900 mb-6 leading-tight">
              A <span className="text-cyan-400 font-medium">Values-Driven</span> Approach to Learning
            </h2>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto font-light">
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
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 border-cyan-400 group hover:scale-105"
                variants={staggerItem}
                whileHover={{ 
                  y: -8, 
                  transition: { 
                    duration: 0.3
                  } 
                }}
              >
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-cyan-700 transition-colors duration-300">{value.title}</h3>
                <p className="text-slate-700 leading-relaxed font-light">{value.description}</p>
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
            <div className="bg-gradient-to-r from-cyan-50 to-slate-50 p-8 rounded-2xl border border-cyan-100">
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                These values ensure that every learner enjoys a <strong className="text-cyan-600 font-semibold">personalized, flexible, and impactful experience</strong> — one that meets both academic and real-world needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learning Without Limits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/5 rounded-full translate-y-24 -translate-x-24 blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <motion.div
            className="mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
              <span className="inline-block bg-cyan-400/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold border border-cyan-400/30">
                OUR VISION
              </span>
              <div className="h-1 w-12 bg-cyan-400 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-normal mb-8 leading-tight">
              Learning Without <span className="text-cyan-400 font-medium">Limits</span>
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
              <p className="text-lg leading-relaxed font-light">
                With a strong international presence and a portfolio of global partnerships, GradifyNow is redefining how people learn, grow, and succeed. We are not just building academic pathways — we are creating lifelong opportunities that help individuals thrive in an ever-changing world.
              </p>
              
              <p className="text-lg leading-relaxed font-light">
                Whether through digital platforms, corporate learning, higher education collaborations, or social impact initiatives, GradifyNow remains steadfast in its mission.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInRight}
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Our Commitment</h3>
              <p className="text-xl font-medium mb-6">
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
                  className="bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-400/30"
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
