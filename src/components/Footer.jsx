import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-16">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold gradient-text mb-2">Manu Tyagi</h3>
            <p className="text-gray-600 dark:text-gray-400">Software Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/Manu-Tyagi90"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://in.linkedin.com/in/thoughtful-manu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:manutygii90@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="tel:+917818008391"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              <FaPhone size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-300 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> by Manu Tyagi © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;