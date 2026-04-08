import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaJs, FaDatabase, 
  FaReact, FaAws, FaGitAlt, FaChartBar,
  FaNodeJs, FaMicrosoft, FaChartLine
} from 'react-icons/fa';

import { 
  SiPandas, SiNumpy, SiScikitlearn, 
  SiMongodb, SiMysql,
  SiC, SiExpress
} from 'react-icons/si';

import { GiArtificialIntelligence } from 'react-icons/gi';
import { BsBarChartFill } from 'react-icons/bs';

import '../styles/App.scss';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 'Advanced', color: '#3776AB' },
        { name: 'Java', icon: <FaJava />, level: 'Advanced', color: '#007396' },
        { name: 'JavaScript', icon: <FaJs />, level: 'Intermediate', color: '#F7DF1E' },
        { name: 'SQL', icon: <FaDatabase />, level: 'Advanced', color: '#4479A1' },
        { name: 'C', icon: <SiC />, level: 'Intermediate', color: '#A8B9CC' },
      ]
    },
    {
      title: 'Data Science',
      skills: [
        { name: 'Pandas', icon: <SiPandas />, level: 'Advanced', color: '#f8179a' },
        { name: 'NumPy', icon: <SiNumpy />, level: 'Advanced', color: '#4DABCF' },
        { name: 'Scikit-learn', icon: <SiScikitlearn />, level: 'Intermediate', color: '#F7931E' },
        { name: 'Machine Learning', icon: <GiArtificialIntelligence />, level: 'Intermediate', color: '#FF6B6B' },
        { name: 'Data Visualization', icon: <BsBarChartFill />, level: 'Intermediate', color: '#4ECDC4' },
        { name: 'Statistics', icon: <FaChartBar />, level: 'Advanced', color: '#45B7D1' },
      ]
    },
    {
      title: 'Web & Database',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 'Intermediate', color: '#61DAFB' },
        { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediate', color: '#339933' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 'Advanced', color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql />, level: 'Advanced', color: '#4479A1' },
        { name: 'Express.js', icon: <SiExpress />, level: 'Intermediate', color: '#000000' },
      ]
    },
    {
      title: 'Tools & Cloud',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 'Intermediate', color: '#FF9900' },
        { name: 'Azure', icon: <FaMicrosoft />, level: 'Basic', color: '#0089D6' },
        { name: 'Git', icon: <FaGitAlt />, level: 'Advanced', color: '#F05032' },
        { name: 'Tableau', icon: <FaChartLine />, level: 'Intermediate', color: '#E97627' },
        { name: 'Power BI', icon: <FaChartBar />, level: 'Intermediate', color: '#F2C811' },
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'Basic': return '#FF6B6B';
      case 'Intermediate': return '#FFD166';
      case 'Advanced': return '#06D6A0';
      default: return '#6C63FF';
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          className="section-title center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h2>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <div className="skill-icon-container" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span 
                        className="skill-level"
                        style={{ 
                          backgroundColor: getLevelColor(skill.level) + '20',
                          color: getLevelColor(skill.level),
                          border: `1px solid ${getLevelColor(skill.level)}30`
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="tools-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3>Certifications</h3>
          <div className="certifications-grid">
            {[
              'Data Analysis Using Python - Coursera',
              'Software Engineering - Coursera',
              'AWS Cloud Foundations - AWS Academy',
              'Excel - Simplilearn',
              'Data Science - IBM',
              'Python - GeeksforGeeks',
              'Machine Learning Techniques - Coursera'
            ].map((cert, index) => (
              <motion.div
                key={cert}
                className="cert-badge"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;