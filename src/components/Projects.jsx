import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiStar, FiTrendingUp } from 'react-icons/fi';
import '../styles/App.scss';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-Commerce Dress Recommendation System',
      description: 'ML-based recommendation engine using collaborative filtering for personalized suggestions',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'HTMLL5','CSS3','Javascript', 'Flask', 'MongoDB'],
      category: 'ai-ml',
      stats: [
        { label: 'Accuracy Improved', value: '25%' },
        { label: 'Data Processed', value: '10K+' },
        { label: 'Time Reduced', value: '40%' }
      ],
      github: 'https://github.com/DharunS-25/TrendAnalytics_Application',
      featured: true
    },
    {
      id: 2,
      title: 'Employee Management System',
      description: 'Centralized portal managing 100+ employee records with role-based authentication',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'React'],
      category: 'web',
      stats: [
        { label: 'HR Workload Reduced', value: '40%' },
        { label: 'Performance Boost', value: '30%' }
      ],
      github: 'https://github.com/DharunS-25/Mangement_Application',
    },
    {
      id: 3,
      title: 'NotifyFlow - Smart Routine Notification System',
      description: 'Intelligent notification engine using user behavior analytics',
      technologies: ['MERN Stack', 'Data Analytics', 'Real-time Processing'],
      category: 'web',
      stats: [
        { label: 'Task Completion Rate', value: '30%' },
        { label: 'Activity Logs', value: '5K+' }
      ],
      github: 'https://github.com/DharunS-25/NotifyFlow_Application',
      featured: true
    },
    {
      id: 4,
      title: 'WeatherWise - Real-Time Weather Forecast Application',
      description: 'Python-based weather application that fetches real-time climate data and provides accurate forecasts using API integration and data processing',
      technologies: ['Python', 'PyQT5', 'OpenWeather API'],
      category: 'data',
      stats: [
        { label: 'Cities Supported', value: '90%' },
        { label: 'Forecast Accuracy', value: '95%' }
      ],
      github: 'https://github.com/DharunS-25/Weather_Application',
    },
    {
      id: 5,
      title: 'Job Portal - MERN Stack Comprehensive Platform',
      description: 'A modern, efficient job portal connecting job seekers with employers through a seamless digital platform. Features advanced job discovery, application tracking, and real-time updates.',
      technologies: [
        'React.js', 'Node.js', 'Express.js', 'MongoDB', 
        'JWT', 'Bootstrap', 'RESTful API'
      ],
      category: 'web',
      stats: [
        { label: 'Job Seekers', value: '500+' },
        { label: 'Job Listings', value: '200+' },
        { label: 'Success Rate', value: '85%' }
      ],
      github: 'https://github.com/DharunS-25/Job_Application_System',
      
    },
    {
      id: 6,
      title: 'MilkyStat - Milk Delivery Management System',
      description: 'A comprehensive milk delivery management application with dual-interface system for owners and customers. Features milk tracking, expiry management, payment calculations, quality control, and real-time Firebase integration.',
      technologies: [
        'Kotlin', 
        'Firebase Auth',
        'Java', 
        'Firebase Realtime DB', 
        'Material Design',
        'Android SDK',
        'XML Layouts',
      ],
      category: 'mobile',
      stats: [
        { label: 'Customers Managed', value: '100+' },
        { label: 'Daily Transactions', value: '500+' },
        { label: 'Expiry Accuracy', value: '99%' }
      ],
      github: 'https://github.com/DharunS-25/MilkyStat_Application',
      featured: true,
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-ml', label: 'AI/ML' },
    { id: 'web', label: 'Web Apps' },
    { id: 'data', label: 'Data Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2
          className="section-title center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="filters"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence>
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                layout
              >
                {project.featured && (
                  <div className="featured-badge">
                    <FiStar /> Featured
                  </div>
                )}

                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FiGithub />
                    </a>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                {project.details && (
                  <div className="project-details">
                    {project.details.ownerLogin && (
                      <div className="detail-item">
                        <strong>Demo Login:</strong> {project.details.ownerLogin}
                      </div>
                    )}
                    {project.details.features && (
                      <div className="feature-list">
                        <strong>Key Features:</strong>
                        <ul>
                          {project.details.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                <div className="project-stats">
                  {project.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="stat-item"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <FiTrendingUp className="stat-icon" />
                      <div className="stat-value">{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;