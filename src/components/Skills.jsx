import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaJs, FaDatabase, 
  FaReact, FaAws, FaGitAlt, FaChartBar,
  FaNodeJs, FaMicrosoft
} from 'react-icons/fa';
import { 
  SiPandas, SiNumpy, SiScikitlearn, 
  SiMongodb, SiMysql, SiTableau,
  SiC, SiExpress
} from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { BsBarChartFill } from 'react-icons/bs';

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
        { name: 'Tableau', icon: <SiTableau />, level: 'Intermediate', color: '#E97627' },
        { name: 'Power BI', icon: <FaChartBar />, level: 'Intermediate', color: '#F2C811' },
      ]
    }
  ];

  // Get level color
  const getLevelColor = (level) => {
    switch(level) {
      case 'Basic': return '#FF6B6B'; // Red
      case 'Intermediate': return '#FFD166'; // Yellow
      case 'Advanced': return '#06D6A0'; // Green
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
              'Python - GreeksforGreeks',
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

      <style jsx>{`
        .section {
          padding: 100px 0;
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          color: white;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
          background: linear-gradient(45deg, #6C63FF, #FF6584);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .center {
          text-align: center;
        }
        
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .skill-category {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 15px;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          
          &:hover {
            border-color: #6C63FF;
            transform: translateY(-5px);
          }
        }
        
        .category-title {
          font-size: 1.4rem;
          margin-bottom: 1.5rem;
          color: #fff;
          position: relative;
          padding-bottom: 10px;
          
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 3px;
            background: #6C63FF;
            border-radius: 2px;
          }
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 1rem;
        }
        
        .skill-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.1);
          
          &:hover {
            background: rgba(255, 255, 255, 0.08);
          }
          
          .skill-icon-container {
            font-size: 2.5rem;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
          }
          
          .skill-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            width: 100%;
            
            .skill-name {
              color: #E0E0E0;
              font-weight: 500;
              font-size: 0.95rem;
              text-align: center;
            }
            
            .skill-level {
              font-size: 0.75rem;
              padding: 4px 10px;
              border-radius: 20px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              text-align: center;
              width: fit-content;
            }
          }
        }
        
        .legend-container {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 15px;
          padding: 2rem;
          margin: 3rem 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          
          .legend-title {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            color: #fff;
            text-align: center;
          }
          
          .legend-items {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            
            .legend-item {
              display: flex;
              align-items: center;
              gap: 1rem;
              
              .legend-color {
                width: 20px;
                height: 20px;
                border-radius: 4px;
                flex-shrink: 0;
              }
              
              .legend-text {
                color: #B0B0B0;
                font-size: 0.9rem;
              }
            }
          }
        }
        
        .tools-section {
          margin-top: 4rem;
          
          h3 {
            font-size: 1.8rem;
            margin-bottom: 2rem;
            color: #fff;
            text-align: center;
            position: relative;
            padding-bottom: 10px;
            
            &::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 60px;
              height: 3px;
              background: #6C63FF;
              border-radius: 2px;
            }
          }
        }
        
        .certifications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          
          .cert-badge {
            background: rgba(108, 99, 255, 0.1);
            border: 1px solid rgba(108, 99, 255, 0.3);
            border-radius: 12px;
            padding: 1.5rem;
            text-align: center;
            color: #B0B0B0;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            cursor: pointer;
            backdrop-filter: blur(10px);
            font-weight: 500;
            
            &:hover {
              background: rgba(108, 99, 255, 0.2);
              color: #fff;
              transform: translateY(-5px);
              box-shadow: 0 15px 30px rgba(108, 99, 255, 0.2);
              border-color: #6C63FF;
            }
          }
        }
        
        @media (max-width: 768px) {
          .section {
            padding: 60px 0;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .skills-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .skill-category {
            padding: 1.5rem;
          }
          
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 0.8rem;
          }
          
          .skill-card {
            padding: 1rem;
            
            .skill-icon-container {
              font-size: 2rem;
              width: 50px;
              height: 50px;
            }
            
            .skill-info {
              .skill-name {
                font-size: 0.85rem;
              }
              
              .skill-level {
                font-size: 0.7rem;
                padding: 3px 8px;
              }
            }
          }
          
          .legend-items {
            .legend-item {
              .legend-text {
                font-size: 0.85rem;
              }
            }
          }
          
          .certifications-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;