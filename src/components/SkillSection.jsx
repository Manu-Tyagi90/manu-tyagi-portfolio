// src/components/SkillSection.jsx (New component for enhanced skills display)
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaUsers } from 'react-icons/fa';

const SkillSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode />,
      skills: [
        { name: 'Java', level: 85, color: 'from-orange-400 to-red-500' },
        { name: 'Python', level: 80, color: 'from-blue-400 to-blue-600' },
        { name: 'C/C++', level: 70, color: 'from-gray-400 to-gray-600' },
        { name: 'JavaScript', level: 75, color: 'from-yellow-400 to-yellow-600' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FaDatabase />,
      skills: [
        { name: 'React.js', level: 85, color: 'from-cyan-400 to-blue-500' },
        { name: 'Spring Boot', level: 70, color: 'from-green-400 to-green-600' },
        { name: 'Flask', level: 65, color: 'from-gray-400 to-gray-600' },
        { name: 'React Native', level: 60, color: 'from-purple-400 to-purple-600' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <FaTools />,
      skills: [
        { name: 'Git/GitHub', level: 80, color: 'from-gray-600 to-gray-800' },
        { name: 'Machine Learning', level: 65, color: 'from-indigo-400 to-indigo-600' },
        { name: 'Streamlit', level: 75, color: 'from-red-400 to-red-600' },
        { name: 'Socket.io', level: 70, color: 'from-gray-500 to-gray-700' }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <FaUsers />,
      skills: [
        { name: 'Problem Solving', level: 90, color: 'from-green-400 to-green-600' },
        { name: 'Team Collaboration', level: 85, color: 'from-blue-400 to-blue-600' },
        { name: 'Communication', level: 80, color: 'from-purple-400 to-purple-600' },
        { name: 'Adaptability', level: 88, color: 'from-pink-400 to-pink-600' }
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 card-shadow"
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl text-primary mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + index * 0.1,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillSection;