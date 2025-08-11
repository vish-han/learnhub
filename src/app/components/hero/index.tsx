'use client';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image'
import TitleImage from "../../../../public/img/test_image.jpg"

const HeroSection = () => {
  const stats = [
    { number: "20,700+", label: "Doctorates Mentored" },
    { number: "6,863+", label: "Researchers Guided" },
    { number: "10,016+", label: "Higher Education Learners" },
    { number: "30,045+", label: "Learners Empowered" }
  ];

  // Animation variants with proper TypeScript types
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.2
      }
    }
  };

  const staggerItem: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const floatingAnimation: Variants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image 
          src={TitleImage} 
          alt='Background image'
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <motion.div 
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-30">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 1, 
                  delay: 0.3
                } 
              }
            }}
          >
            A Global Vision Rooted in{' '}
            <span className="text-yellow-400 relative">
              Purposeful Leadership
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-yellow-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              />
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.8, 
                  delay: 0.6
                } 
              }
            }}
          >
            Doing <span className="text-yellow-400">GOOD</span> while doing{' '}
            <span className="text-yellow-400">WELL</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.8, 
                  delay: 0.9
                } 
              }
            }}
          >
            A Global Community of DOCTORATES & RESEARCHERS
          </motion.p>
          
          <motion.button 
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                transition: { 
                  duration: 0.6, 
                  delay: 1.2
                } 
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Know more →
          </motion.button>
        </div>
      </div>
            
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl"
        variants={floatingAnimation}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"
        variants={{
          animate: {
            y: [0, 15, 0],
            x: [0, 10, 0],
            transition: {
              duration: 5,
              repeat: Infinity
            }
          }
        }}
        animate="animate"
      />
      
      {/* Stats Section */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-blue-800/50 backdrop-blur-sm p-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="text-center"
            variants={staggerItem}
            whileHover={{ 
              scale: 1.1, 
              transition: { duration: 0.3 } 
            }}
          >
            <motion.div 
              className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.5 + (index * 0.1),
                type: "spring",
                stiffness: 200
              }}
            >
              {stat.number}
            </motion.div>
            <div className="text-white text-sm md:text-base">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroSection;