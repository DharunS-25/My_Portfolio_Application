import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiTarget, FiAward } from 'react-icons/fi';

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

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
          
          @media (max-width: 992px) {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        
        .about-text {
          h3 {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            color: #fff;
          }
          
          p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #B0B0B0;
            margin-bottom: 1.5rem;
          }
        }
        
        .soft-skills {
          margin-top: 2rem;
          
          h4 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: #fff;
          }
          
          .skills-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            
            .skill-tag {
              background: rgba(108, 99, 255, 0.1);
              color: #e2e2e5;
              padding: 8px 16px;
              border-radius: 20px;
              font-size: 0.9rem;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.3s ease;
              
              &:hover {
                background: rgba(108, 99, 255, 0.2);
                transform: translateY(-2px);
              }
            }
          }
        }
        
        .about-stats {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          
          .stat-card {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            
            &:hover {
              border-color: #6C63FF;
              box-shadow: 0 10px 30px rgba(108, 99, 255, 0.2);
            }
            
            .stat-icon {
              font-size: 2rem;
              color: #6C63FF;
              margin-bottom: 1rem;
            }
            
            .stat-value {
              font-size: 2.5rem;
              font-weight: 700;
              color: #fff;
              margin-bottom: 0.5rem;
              
              .stat-suffix {
                font-size: 1rem;
                color: #A0A0A0;
                margin-left: 5px;
              }
            }
            
            .stat-label {
              font-size: 0.9rem;
              color: #A0A0A0;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
          }
        }
        
        .education {
          h3 {
            font-size: 1.8rem;
            margin-bottom: 2rem;
            color: #fff;
          }
          
          .education-card {
            background: linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(74, 68, 198, 0.1));
            border-radius: 15px;
            padding: 2rem;
            border: 1px solid rgba(108, 99, 255, 0.2);
            
            .education-header {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              margin-bottom: 1rem;
              
              h4 {
                font-size: 1.4rem;
                color: #fff;
                margin: 0;
              }
              
              .education-period {
                background: rgba(248, 248, 251, 0.2);
                color: #dfdee4;
                padding: 5px 15px;
                border-radius: 15px;
                font-size: 0.9rem;
              }
            }
            
            .education-institution {
              font-size: 1.1rem;
              color: #B0B0B0;
              margin-bottom: 1rem;
            }
            
            .education-details {
              display: flex;
              gap: 2rem;
              
              span {
                display: flex;
                align-items: center;
                gap: 8px;
                color: #A0A0A0;
                font-size: 0.9rem;
                
                &.cgpa {
                  color: #4ef90a;
                  font-weight: 500;
                }
              }
            }
          }
        }
      `}</style>
    </section>
  );
};

export default About;