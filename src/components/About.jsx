import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiTarget, FiAward } from 'react-icons/fi';
import '../styles/App.scss';

const About = () => {
  const stats = [
    { icon: <FiBook />, value: '7.95', label: 'CGPA', suffix: '/10' },
    { icon: <FiTarget />, value: '6', label: 'Projects', suffix: 'Completed' },
    { icon: <FiAward />, value: '7', label: 'Certifications', suffix: '' },
  ];

  const softSkills = [
    'Analytical Thinking',
    'Problem Solving',
    'Team Collaboration',
    'Communication',
    'Strong Work Ethic',
    'Active Listening',
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>Technology Aspirant</h3>
            
            <p>
              Data Science-focused Computer Science undergraduate with strong foundations in Python, SQL, Machine Learning, and Data Analytics, experienced in developing predictive models, recommendation systems, and extracting actionable insights from complex datasets to solve real-world business problems. Proficient in full-stack web development using the MERN stack, Flask, and MongoDB to build scalable, responsive, and user-friendly applications, seeking to contribute both technical and analytical expertise in Data Science or Web Development roles while continuously learning and delivering innovative solutions.
            </p>
            
            <p>
                Currently pursuing a B.E. in Computer Science Engineering at Kumaraguru College of Technology, with a solid academic foundation in Machine Learning, Statistics, and Data Analytics.
            </p>

            <div className="soft-skills">
              <h4>Soft Skills</h4>
              <div className="skills-grid">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">
                  {stat.value}
                  {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="education"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3>Education</h3>
          <div className="education-card">
            <div className="education-header">
              <h4>B.E. Computer Science Engineering</h4>
              <span className="education-period">2023 - 2027</span>
            </div>
            <div className="education-institution">
              Kumaraguru College of Technology, Coimbatore
            </div>
            <div className="education-details">
              <span className="cgpa">CGPA: 7.95/10</span>
              <span className="status">Expected Graduation: 2027</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;