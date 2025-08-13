import React from 'react';
import PropTypes from 'prop-types'; // Add this import
import { motion } from 'framer-motion';

const SkillCard = ({ skill, level, index }) => {
  const getLevel = () => {
    switch(level) {
      case 'expert': return 90;
      case 'advanced': return 75;
      case 'intermediate': return 60;
      case 'beginner': return 40;
      default: return 50;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{getLevel()}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${getLevel()}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
        />
      </div>
    </motion.div>
  );
};

// Add PropTypes definitions to fix the S6774 warnings
SkillCard.propTypes = {
  skill: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default SkillCard;