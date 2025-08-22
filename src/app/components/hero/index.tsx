'use client';
import { motion, Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const stats = [
    { number: 2319, suffix: "+", label: "Doctorates Mentored" },
    { number: 6863, suffix: "+", label: "Researchers Guided" },
    { number: 10016, suffix: "+", label: "Higher Education Learners" },
    { number: 30045, suffix: "+", label: "Learners Empowered" }
  ];

  // Animation variants with proper TypeScript types
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 }}
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

  // Counter animation component
  const CounterAnimation = ({ endValue, suffix, delay }: { endValue: number, suffix: string, delay: number }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepValue = endValue / steps;
        let step = 0;

        const counter = setInterval(() => {
          step++;
          const progress = step / steps;
          const easeOutProgress = 1 - Math.pow(1 - progress, 3); // Easing function
          const newValue = Math.floor(easeOutProgress * endValue);
          
          setCurrentValue(newValue);

          if (step >= steps) {
            setCurrentValue(endValue);
            clearInterval(counter);
          }
        }, duration / steps);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }, [endValue, delay]);

    const formatNumber = (num: number) => {
      return num.toLocaleString();
    };

    return (
      <span>
        {formatNumber(currentValue)}{suffix}
      </span>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900 font-['Poppins']">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://opengraph.b-cdn.net/production/images/72d8a9c4-6334-4ae1-9d62-db334ff18601.jpg?token=ERgobjhDUk2bxbbmJxeI09ni9VfSjzK8OtYWCNv3r5g&height=1049&width=1200&expires=33291591311')`
          }}
        />
        {/* Dark overlay with blue tint for better text readability */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80"
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
            <span className="text-blue-400 relative">
              Purposeful Leadership
              <motion.div 
                className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-400 rounded-full"
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
            Doing <span className="text-blue-400">GOOD</span> while doing{' '}
            <span className="text-blue-300">WELL</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 mb-8"
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
          <a href='/about' className='cursor-pointer'>
          <motion.button 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg border border-blue-400/20"
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
          </a>
        </div>
      </div>
            
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
        variants={floatingAnimation}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
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
        className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-800/60 backdrop-blur-sm p-8 border-t border-slate-700/50"
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
              className="text-3xl md:text-4xl font-bold text-blue-400 mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.5 + (index * 0.1),
                type: "spring",
                stiffness: 200
              }}
            >
              <CounterAnimation 
                endValue={stat.number} 
                suffix={stat.suffix}
                delay={1500 + (index * 100)} 
              />
            </motion.div>
            <div className="text-slate-300 text-sm md:text-base">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroSection;
