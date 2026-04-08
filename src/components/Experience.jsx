import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import '../styles/App.scss';

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