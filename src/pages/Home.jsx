import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  const professionalTagline = "Transforming ideas into elegant code solutions with a passion for innovation and continuous learning";

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="section-padding py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                🚀 Fresh Graduate • Ready to Innovate
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Manu Tyagi</span>
            </h1>
            
            <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'Full-Stack Engineer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Tech Enthusiast',
                  2000,
                  'React Developer',
                  2000,
                  'Java Programmer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-primary dark:text-primary font-bold"
                repeat={Infinity}
              />
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {professionalTagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/projects" className="btn-primary inline-flex items-center justify-center">
                View Projects
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                to="/resume"
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </Link>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">3+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">9+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Technologies</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">8.06</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">CGPA</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              {/* Animated background blob */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Profile image container with background */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl profile-image-container">
                {/* Gradient background for transparent image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 profile-backdrop" />
                
                {/* Profile image */}
                <img
                  src="/profile.jpg"
                  alt="Manu Tyagi"
                  className="relative w-full h-full object-cover object-center z-10 profile-image"
                  style={{
                    objectPosition: 'center center',
                    transform: 'scale(1.1)',
                  }}
                />
                
                {/* Inner shadow for depth */}
                <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none z-20" />
              </div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary text-white p-3 rounded-full shadow-lg z-30"
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaGithub size={20} />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-30"
                animate={{
                  y: [5, -5, 5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <FaLinkedin size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;