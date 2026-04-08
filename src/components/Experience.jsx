import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Data Science Intern Aspirant',
      company: 'Seeking Opportunities',
      period: 'Present',
      location: 'Remote',
      description: 'Actively seeking internship opportunities to apply data science skills in real-world scenarios',
      achievements: [
        'Prepared with expertise in Python, ML, and data analytics',
        'Ready to contribute to predictive modeling and data-driven solutions',
        'Building portfolio projects to demonstrate capabilities'
      ],
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Statistics', 'Pandas', 'NumPy']
    },
    {
      id: 2,
      title: 'Web Developer Intern Aspirant',
      company: 'Seeking Opportunities',
      period: 'Present',
      location: 'Remote',
      description: 'Actively seeking internship opportunities to apply web development skills in real-world scenarios',
      achievements: [
        'Prepared with expertise in React, Node.js, and modern web technologies',
        'Ready to contribute to full-stack development projects',
        'Building responsive and interactive web applications'
      ],
      technologies: ['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'MongoDB', 'Express']
    }
  ];

  const coursework = [
    'Machine Learning',
    'Statistics',
    'Database Management Systems',
    'Data Structures & Algorithms',
    'Operating Systems',
    'Cloud Computing',
    'Computer Networks'
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2
          className="section-title center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience & Coursework
        </motion.h2>

        <div className="experience-content">
          <motion.div
            className="timeline"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>Professional Journey</h3>
            
            <div className="timeline-items">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="timeline-marker">
                    <div className="marker-dot" />
                    {index < experiences.length - 1 && <div className="timeline-line" />}
                  </div>

                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>{exp.title}</h4>
                      <div className="timeline-meta">
                        <span className="meta-item">
                          <FiBriefcase /> {exp.company}
                        </span>
                        <span className="meta-item">
                          <FiCalendar /> {exp.period}
                        </span>
                        <span className="meta-item">
                          <FiMapPin /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="timeline-description">{exp.description}</p>

                    <ul className="achievements">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="technologies">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="coursework-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3>Relevant Coursework</h3>
            <p className="coursework-description">
              Comprehensive computer science curriculum with focus on data science, 
              machine learning, and software engineering fundamentals.
            </p>

            <div className="coursework-grid">
              {coursework.map((course, index) => (
                <motion.div
                  key={course}
                  className="course-card"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="course-icon">
                    {getCourseIcon(course)}
                  </div>
                  <span className="course-name">{course}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .experience-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          
          @media (max-width: 992px) {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        
        .timeline {
          h3 {
            font-size: 1.8rem;
            margin-bottom: 2rem;
            color: #fff;
          }
        }
        
        .timeline-items {
          position: relative;
          padding-left: 30px;
        }
        
        .timeline-item {
          display: flex;
          margin-bottom: 3rem;
          position: relative;
          
          &:last-child {
            margin-bottom: 0;
          }
        }
        
        .timeline-marker {
          position: relative;
          margin-right: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          
          .marker-dot {
            width: 16px;
            height: 16px;
            background: #6C63FF;
            border-radius: 50%;
            border: 3px solid #1E1E1E;
            z-index: 1;
          }
          
          .timeline-line {
            width: 2px;
            flex: 1;
            background: #6C63FF;
            margin-top: 8px;
            opacity: 0.3;
          }
        }
        
        .timeline-content {
          flex: 1;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 15px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          
          &:hover {
            border-color: #6C63FF;
            box-shadow: 0 10px 30px rgba(108, 99, 255, 0.1);
          }
        }
        
        .timeline-header {
          margin-bottom: 1rem;
          
          h4 {
            font-size: 1.3rem;
            color: #fff;
            margin-bottom: 0.5rem;
          }
        }
        
        .timeline-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          
          .meta-item {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #A0A0A0;
            font-size: 0.9rem;
            
            svg {
              color: #6C63FF;
            }
          }
        }
        
        .timeline-description {
          color: #B0B0B0;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .achievements {
          list-style: none;
          margin-bottom: 1rem;
          
          li {
            color: #B0B0B0;
            margin-bottom: 0.5rem;
            position: relative;
            padding-left: 20px;
            
            &::before {
              content: '✓';
              position: absolute;
              left: 0;
              color: #6C63FF;
              font-weight: bold;
            }
          }
        }
        
        .technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          
          .tech-tag {
            background: rgba(108, 99, 255, 0.1);
            color: #6C63FF;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 0.8rem;
            font-weight: 500;
          }
        }
        
        .coursework-section {
          h3 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
            color: #fff;
          }
          
          .coursework-description {
            color: #B0B0B0;
            margin-bottom: 2rem;
            line-height: 1.6;
          }
        }
        
        .coursework-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
          
          .course-card {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 10px;
            padding: 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
            
            &:hover {
              border-color: #6C63FF;
              background: rgba(108, 99, 255, 0.1);
            }
            
            .course-icon {
              width: 40px;
              height: 40px;
              border-radius: 10px;
              background: rgba(108, 99, 255, 0.2);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #6C63FF;
              font-size: 1.2rem;
            }
            
            .course-name {
              color: #E0E0E0;
              font-size: 0.9rem;
              font-weight: 500;
            }
          }
        }
      `}</style>
    </section>
  );
};

const getCourseIcon = (course) => {
  const icons = {
    'Machine Learning': '🤖',
    'Statistics': '📊',
    'Database': '🗄️',
    'Algorithms': '⚡',
    'Cloud': '☁️',
    'AI': '🧠',
    'Networks': '🌐'
  };

  for (const [key, icon] of Object.entries(icons)) {
    if (course.includes(key)) return icon;
  }
  
  return '📚';
};

export default Experience;