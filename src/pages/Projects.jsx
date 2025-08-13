// src/pages/Projects.jsx (Updated to link to project detail pages)
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'chat-application',
      name: 'Chat-Application-Socket-io-Vite-latest',
      description: 'ChatConnect is a WhatsApp-inspired real-time chat application that brings people together through instant messaging. Built with modern web technologies, it offers a seamless chatting experience with beautiful UI/UX and powerful real-time features.',
      technologies: ['React', 'TypeScript', 'Vite', 'Material-UI', 'Node.js', 'Express.js', 'Socket.io', 'Vercel', 'Render'],
      github: 'https://github.com/Manu-Tyagi90/Chat-Application-Socket-io-Vite-latest',
      live: 'https://my-chat-app-gamma.vercel.app/',
      duration: '1 Month',
      category: 'fullstack'
    },
    {
      id: 'vehicle-dashboard',
      name: 'Vehicle Dashboard',
      description: 'An interactive data analytics dashboard built with Streamlit to analyze and visualize vehicle registration data from the VAHAN portal. Features YoY/QoQ growth analysis and manufacturer performance tracking.',
      technologies: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'Seaborn', 'streamlit-lottie'],
      github: 'https://github.com/Manu-Tyagi90/vehicle_dashboard',
      live: 'https://manu-tyagi90-vehicle-dashboard.streamlit.app',
      duration: '1 Month',
      category: 'data'
    },
    {
      id: 'cloud-management',
      name: 'Cloud Management System',
      description: 'A comprehensive cloud vendor management system built with Spring Boot. Features RESTful APIs, real-time dashboard, CRUD operations, and responsive UI with theme switching.',
      technologies: ['Spring Boot', 'Java', 'Spring Data JPA', 'Maven', 'Swagger', 'HTML', 'CSS', 'JavaScript', 'AJAX'],
      github: 'https://github.com/Manu-Tyagi90/SpringBoot-RestAPI',
      live: null,
      duration: '1 Month',
      category: 'backend'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            My Projects
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            data analysis, and building scalable applications.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="flex flex-wrap gap-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              {['all', 'fullstack', 'backend', 'data'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-md transition-all duration-300 ${
                    filter === category
                      ? 'bg-primary text-white'
                      : 'bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Link
                to={`/project/${project.id}`}
                key={project.id}
                className="block transform hover:scale-105 transition-transform duration-300"
              >
                <ProjectCard project={project} index={index} />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;