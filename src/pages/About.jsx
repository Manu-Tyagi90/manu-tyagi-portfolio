import React from 'react';
import { motion } from 'framer-motion';
import { FaFootballBall, FaBookReader, FaLaptopCode, FaGraduationCap, FaTrophy } from 'react-icons/fa';
import SkillCard from '../components/SkillCard';

const About = () => {
  const skills = [
    { name: 'Java', level: 'advanced' },
    { name: 'Python', level: 'advanced' },
    { name: 'C/C++', level: 'intermediate' },
    { name: 'ReactJS', level: 'advanced' },
    { name: 'Spring Boot', level: 'intermediate' },
    { name: 'Machine Learning', level: 'intermediate' },
    { name: 'React Native', level: 'intermediate' },
    { name: 'Flask', level: 'intermediate' },
    { name: 'Streamlit', level: 'advanced' }
  ];

  const certifications = [
    'Java Spring Boot Certification - Infosys',
    'Machine Learning - Coursera',
    'UI/UX Design - Coursera',
    'PowerPoint Presentation Course - Udemy',
    'Online C++ Certification - Great Learning',
    'Python - Simplilearn',
    'Core Java Training - Softpro India'
  ];

  const interests = [
    { icon: <FaFootballBall />, name: 'Playing Football' },
    { icon: <FaBookReader />, name: 'Reading Articles' },
    { icon: <FaLaptopCode />, name: 'Working on Projects' }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'I.M.S Engineering College, Ghaziabad',
      year: '2021 - 2025',
      cgpa: '8.06/10.0',
      coursework: 'Advanced studies in Computer Science, Software Engineering, Data Structures, Algorithms'
    },
    {
      degree: 'Senior Secondary Education',
      institution: 'M.S. Heritage Senior Secondary School',
      year: 'Completed 2021',
      cgpa: '87.2%',
      coursework: 'Physics, Chemistry, Mathematics'
    }
  ];

  const languages = [
    { name: 'Hindi', level: 'Fluent' },
    { name: 'English', level: 'Conversational' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            About Me
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm a passionate Software Developer based in Meerut, Uttar Pradesh, India. 
                As a fresh B.Tech graduate in Information Technology from I.M.S Engineering College, 
                I bring enthusiasm, modern technical skills, and a strong desire to create impactful solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                My journey in tech has equipped me with a diverse skill set ranging from 
                full-stack development to machine learning. With a CGPA of 8.06/10.0, I've 
                consistently demonstrated academic excellence alongside practical project development.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you'll find me on the football field, diving into 
                interesting articles, or working on personal projects to expand my knowledge.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
              {skills.map((skill) => (  // Use name as key (unique) to fix S6479
                <SkillCard
                  key={skill.name}
                  skill={skill.name}
                  level={skill.level}
                  index={skills.indexOf(skill)}
                />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              <FaGraduationCap className="inline mr-2 text-primary" />
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu) => (  // Use degree as key (unique) to fix S6479
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: education.indexOf(edu) % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + education.indexOf(edu) * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg card-shadow"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                  <p className="text-lg font-semibold mb-1">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.year}</p>
                  <div className="flex items-center mb-2">
                    <FaTrophy className="text-yellow-500 mr-2" />
                    <span className="font-semibold">{edu.cgpa}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Relevant Coursework:</span> {edu.coursework}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg card-shadow"
            >
              <h2 className="text-2xl font-bold mb-4">Certifications</h2>
              <ul className="space-y-2">
                {certifications.map((cert) => (  // Use cert as key (unique) to fix S6479
                  <li key={cert} className="flex items-start">
                    <span className="text-primary mr-2">▪</span>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg card-shadow"
            >
              <h2 className="text-2xl font-bold mb-4">Interests & Hobbies</h2>
              <div className="space-y-4">
                {interests.map((interest) => (  // Use name as key (unique) to fix S6479
                  <div key={interest.name} className="flex items-center">
                    <span className="text-primary text-2xl mr-4">{interest.icon}</span>
                    <span className="text-gray-600 dark:text-gray-300">{interest.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg card-shadow"
            >
              <h2 className="text-2xl font-bold mb-4">Languages</h2>
              <div className="space-y-3">
                {languages.map((lang) => (  // Use name as key (unique) to fix S6479
                  <div key={lang.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{lang.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{lang.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        style={{ width: lang.level === 'Fluent' ? '100%' : '75%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;