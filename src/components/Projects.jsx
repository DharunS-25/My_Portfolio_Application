import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiStar, FiTrendingUp } from 'react-icons/fi';

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

      <style jsx>{`
        .filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          
          .filter-btn {
            padding: 10px 24px;
            background: transparent;
            border: 2px solid rgba(108, 99, 255, 0.3);
            color: #B0B0B0;
            border-radius: 30px;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
            
            &:hover {
              border-color: #6C63FF;
              color: #6C63FF;
            }
            
            &.active {
              background: #6C63FF;
              border-color: #6C63FF;
              color: white;
            }
          }
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          
          @media (max-width: 768px) {
            grid-template-columns: 1fr;
          }
        }
        
        .project-card {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          
          &:hover {
            border-color: #6C63FF;
            box-shadow: 0 20px 40px rgba(108, 99, 255, 0.2);
          }
          
          &.featured {
            background: linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(74, 68, 198, 0.1));
            border-color: #6C63FF;
          }
        }
        
        .featured-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: #6C63FF;
          color: white;
          padding: 5px 15px;
          border-radius: 15px;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
          
          h3 {
            font-size: 1.4rem;
            color: #fff;
            margin: 0;
            flex: 1;
            margin-right: 1rem;
          }
          
          .project-links {
            display: flex;
            gap: 10px;
            
            a {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.1);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #B0B0B0;
              text-decoration: none;
              transition: all 0.3s ease;
              
              &:hover {
                background: #6C63FF;
                color: white;
                transform: rotate(10deg);
              }
            }
          }
        }
        
        .project-description {
          color: #B0B0B0;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
        
        .project-details {
          background: rgba(108, 99, 255, 0.05);
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 1.5rem;
          border-left: 3px solid #6C63FF;
          
          .detail-item {
            color: #fff;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
            
            strong {
              color: #6C63FF;
            }
          }
          
          .feature-list {
            strong {
              color: #6C63FF;
              display: block;
              margin-bottom: 0.5rem;
            }
            
            ul {
              margin: 0;
              padding-left: 1.2rem;
              
              li {
                color: #B0B0B0;
                font-size: 0.9rem;
                margin-bottom: 0.3rem;
              }
            }
          }
        }
        
        .project-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
          
          .stat-item {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            padding: 1rem;
            text-align: center;
            
            .stat-icon {
              color: #6C63FF;
              font-size: 1.2rem;
              margin-bottom: 0.5rem;
            }
            
            .stat-value {
              font-size: 1.4rem;
              font-weight: 700;
              color: #fff;
              margin-bottom: 2px;
            }
            
            .stat-label {
              font-size: 0.8rem;
              color: #A0A0A0;
            }
          }
        }
        
        .technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          
          .tech-tag {
            background: rgba(108, 99, 255, 0.1);
            color: #f0f0f1;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 0.8rem;
            font-weight: 500;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;