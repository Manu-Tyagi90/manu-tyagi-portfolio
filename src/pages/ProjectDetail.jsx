import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaClock, FaCode, FaCheckCircle, FaExpand } from 'react-icons/fa';
import ImageModal from '../components/ImageModal';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectsData = {
    'chat-application': {
      id: 'chat-application',
      name: 'Chat-Application-Socket-io-Vite-latest',
      tagline: 'Real-time messaging with modern UI/UX',
      description: 'ChatConnect is a WhatsApp-inspired real-time chat application that brings people together through instant messaging. Built with modern web technologies, it offers a seamless chatting experience with beautiful UI/UX and powerful real-time features.',
      longDescription: `This project showcases my ability to build complex real-time applications with modern web technologies. 
      The application features a complete chat system with rooms, typing indicators, online status tracking, and message delivery receipts.
      
      I focused on creating a responsive design that works seamlessly across all devices, implementing dark mode support, 
      and ensuring smooth animations for better user experience. The backend handles multiple concurrent connections efficiently 
      using Socket.io, while the frontend provides an intuitive interface built with React and TypeScript.`,
      technologies: ['React', 'TypeScript', 'Vite', 'Material-UI', 'Node.js', 'Express.js', 'Socket.io', 'Vercel', 'Render'],
      features: [
        { title: 'Real-time Messaging', desc: 'Instant message delivery and reception' },
        { title: 'Multiple Chat Rooms', desc: 'Create and join different conversation rooms' },
        { title: 'Online User Tracking', desc: 'See who\'s currently online' },
        { title: 'Typing Indicators', desc: 'Know when someone is typing' },
        { title: 'Read Receipts', desc: 'Message delivery and read status' },
        { title: 'Responsive Design', desc: 'Perfect on desktop, tablet, and mobile' },
        { title: 'Emoji Picker', desc: 'Express yourself with a wide range of emojis' },
        { title: 'Theme Support', desc: 'Light/Dark mode with custom themes' },
        { title: 'Desktop Notifications', desc: 'Never miss important messages' }
      ],
      github: 'https://github.com/Manu-Tyagi90/Chat-Application-Socket-io-Vite-latest',
      live: 'https://my-chat-app-gamma.vercel.app/',
      duration: '1 Month',
      role: 'Full Stack Developer',
      challenges: [
        'Implementing real-time bidirectional communication',
        'Managing WebSocket connections at scale',
        'Ensuring message delivery reliability',
        'Creating smooth UI animations without performance impact'
      ],
      learnings: [
        'Advanced Socket.io implementation patterns',
        'TypeScript best practices in React',
        'State management in real-time applications',
        'Deployment strategies for WebSocket applications'
      ],
      screenshots: [
        { url: '/chat-app-desktop.png', caption: 'Desktop View - Main Chat Interface' },
        { url: '/chat-app-mobile.png', caption: 'Mobile View - Responsive Design' }
      ]
    },
    'vehicle-dashboard': {
      id: 'vehicle-dashboard',
      name: 'Vehicle Dashboard',
      tagline: 'Data Analytics & Visualization Platform',
      description: 'An interactive data analytics dashboard built with Streamlit to analyze and visualize vehicle registration data from the VAHAN portal.',
      longDescription: `This project demonstrates my skills in data analysis, visualization, and creating user-friendly interfaces for complex datasets. 
      The dashboard provides comprehensive insights into vehicle registration trends, manufacturer performance, and market analysis.
      
      I implemented advanced filtering options, interactive charts, and real-time calculations for YoY and QoQ growth metrics. 
      The application is designed to help investors and analysts make data-driven decisions with quick access to key insights.`,
      technologies: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'Seaborn', 'streamlit-lottie', 'Git'],
      features: [
        { title: 'Vehicle Category Analysis', desc: 'Explore 2W, 3W, 4W categories over multiple years' },
        { title: 'Manufacturer Performance', desc: 'Track performance across financial years' },
        { title: 'Growth Metrics', desc: 'Calculate YoY and QoQ growth automatically' },
        { title: 'Interactive Charts', desc: 'Dynamic visualizations with filtering' },
        { title: 'Data Export', desc: 'Download filtered datasets for further analysis' },
        { title: 'Investor Insights', desc: 'Quick insights for decision making' }
      ],
      github: 'https://github.com/Manu-Tyagi90/vehicle_dashboard',
      live: 'https://manu-tyagi90-vehicle-dashboard.streamlit.app',
      duration: '1 Month',
      role: 'Data Analyst & Developer',
      challenges: [
        'Processing large datasets efficiently',
        'Creating intuitive visualizations for complex data',
        'Implementing real-time calculations',
        'Optimizing dashboard performance'
      ],
      learnings: [
        'Advanced Pandas data manipulation',
        'Streamlit framework capabilities',
        'Data visualization best practices',
        'Performance optimization techniques'
      ],
      screenshots: [
        { url: '/vehicle-dashboard-main.png', caption: 'Main Dashboard - Overview Analytics' },
        { url: '/vehicle-dashboard-manufacturer.png', caption: 'Manufacturer Performance Analysis' },
        { url: '/vehicle-dashboard-category.png', caption: 'Vehicle Category Breakdown' },
        { url: '/vehicle-dashboard-profile.png', caption: 'Profile Dashboard Interface' },
        { url: '/vehicle-dashboard-investor.png', caption: 'Investor Insights Panel' }
      ]
    },
    'cloud-management': {
      id: 'cloud-management',
      name: 'Cloud Management System',
      tagline: 'Enterprise Vendor Management Platform',
      description: 'A comprehensive cloud vendor management system built with Spring Boot featuring RESTful APIs and responsive UI.',
      longDescription: `This project showcases my backend development skills using Spring Boot and Java. The system provides a complete 
      solution for managing cloud vendors with CRUD operations, real-time search, and a modern dashboard.
      
      I implemented custom exception handling, JPA repositories, and RESTful API endpoints following best practices. 
      The frontend features a responsive design with theme switching capabilities and real-time data updates.`,
      technologies: ['Spring Boot', 'Java', 'Spring Data JPA', 'Maven', 'Swagger', 'HTML', 'CSS', 'JavaScript', 'AJAX'],
      features: [
        { title: 'RESTful APIs', desc: 'Complete CRUD operations with proper HTTP methods' },
        { title: 'Real-time Dashboard', desc: 'Live statistics and system status' },
        { title: 'Vendor Management', desc: 'Add, edit, delete, and search vendors' },
        { title: 'Pagination', desc: 'Efficient data loading with pagination' },
        { title: 'Theme Switching', desc: 'Light/Dark mode support' },
        { title: 'API Documentation', desc: 'Swagger integration for API testing' }
      ],
      github: 'https://github.com/Manu-Tyagi90/SpringBoot-RestAPI',
      live: null,
      duration: '1 Month',
      role: 'Backend Developer',
      challenges: [
        'Implementing proper REST conventions',
        'Managing database relationships',
        'Creating responsive UI without frontend framework',
        'Handling concurrent requests efficiently'
      ],
      learnings: [
        'Spring Boot best practices',
        'RESTful API design principles',
        'JPA and database optimization',
        'Frontend-backend integration'
      ],
      screenshots: [
        { url: '/cloud-dashboard-desktop.png', caption: 'Desktop Dashboard - System Overview' },
        { url: '/cloud-vendors-desktop.png', caption: 'Vendor Management Interface (Desktop)' },
        { url: '/cloud-settings-desktop.png', caption: 'Settings Panel (Desktop)' },
        { url: '/cloud-dashboard-mobile.png', caption: 'Mobile Dashboard - Responsive Design' },
        { url: '/cloud-vendors-mobile.png', caption: 'Mobile Vendor Management' },
        { url: '/cloud-settings-mobile.png', caption: 'Mobile Settings Panel' }
      ]
    }
  };

  useEffect(() => {
    const currentProject = projectsData[projectId];
    if (currentProject) {
      setProject(currentProject);
    } else {
      navigate('/projects');
    }
  }, [projectId, navigate]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNavigate = (index) => {
    setCurrentImageIndex(index);
  };

  if (!project) return null;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back button */}
          <Link
            to="/projects"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              {project.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {project.tagline}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FaGithub className="mr-2" />
                  View Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              )}
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <FaClock className="mr-2" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <FaCode className="mr-2" />
                <span>{project.role}</span>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 card-shadow"
              >
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                  {project.longDescription}
                </p>
              </motion.section>

              {/* Screenshots */}
              {project.screenshots && project.screenshots.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 card-shadow"
                >
                  <h2 className="text-2xl font-bold mb-4">
                    Screenshots 
                    <span className="text-sm font-normal text-gray-500 ml-2">
                      ({project.screenshots.length} images)
                    </span>
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={screenshot.caption} className="space-y-2">
                        <div 
                          className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                          onClick={() => openModal(index)}
                        >
                          <img
                            src={screenshot.url}
                            alt={screenshot.caption}
                            className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {/* Overlay with zoom icon */}
                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <FaExpand className="text-white text-xl" />
                          </div>
                          {/* Image number indicator */}
                          <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                            {index + 1}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                          {screenshot.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Features */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 card-shadow"
              >
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature) => (
                    <div key={feature.title} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Technologies */}
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 card-shadow"
              >
                <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.section>

              {/* Challenges */}
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 card-shadow"
              >
                <h3 className="text-xl font-bold mb-4">Challenges Overcome</h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {challenge}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.section>

              {/* Learnings */}
              <motion.section
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 card-shadow"
              >
                <h3 className="text-xl font-bold mb-4">Key Learnings</h3>
                <ul className="space-y-2">
                  {project.learnings.map((learning) => (
                    <li key={learning} className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {learning}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Image Modal with Navigation */}
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          screenshots={project?.screenshots || []}
          currentIndex={currentImageIndex}
          onNavigate={handleNavigate}
        />
      </div>
    </div>
  );
};

export default ProjectDetail;