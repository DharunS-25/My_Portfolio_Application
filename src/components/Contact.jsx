import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiBriefcase, FiCalendar, } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'dharuns2508@gmail.com',
      href: 'mailto:dharuns2508@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+91 7845948395',
      href: 'tel:+917845948395'
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      value: 'Coimbatore, India',
      href: 'https://maps.google.com/?q=Coimbatore'
    },
    {
      icon: <FiBriefcase />,
      title: 'Role',
      value: 'Data Science & Web Application Intern',
      href: '#'
    },
    {
      icon: <FiCalendar />,
      title: 'Available From',
      value: 'Currently',
      href: '#'
    }
  ];

  const availabilityDetails = [
    "Available for 6-month internships",
    "Open to full-time Data Science and Web Developer roles",
    "Willing to relocate as needed",
    "Ready for immediate start"
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2
          className="section-title center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Work Together
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>Seeking Data Science & Web Developer Opportunities</h3>
            
            <p className="contact-description">
              I am open to work with internship and full-time opportunities in <strong>Data Science, 
              Data Analytics and Web Developer</strong>. With strong skills in Python, ML algorithms, 
              and data visualization, I'm ready to contribute to innovative projects and grow as a 
              data science professional.
            </p>

            <div className="availability">
              <h4>What I'm Looking For:</h4>
              <ul className="availability-list">
                {availabilityDetails.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a href="mailto:dharuns2508@gmail.com" className="btn btn-secondary">
                <FiMail /> Email Me Directly
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-details-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3>Contact Details</h3>
            
            <div className="contact-details-grid">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="contact-card"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <div className="contact-icon-wrapper">
                    <div className="contact-icon">{item.icon}</div>
                  </div>
                  <div className="contact-text">
                    <div className="contact-title">{item.title}</div>
                    <div className="contact-value">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="linkedin-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h4>View My Professional Profile</h4>
              <a 
                href="https://linkedin.com/in/dharunrss10031725" 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin-link"
              >
                <span>LinkedIn Profile</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Dharun S. All rights reserved.</p>

        </div>
      </footer>

      <style jsx>{`
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
          
          @media (max-width: 992px) {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        
        .contact-info {
          h3 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            color: #fff;
            line-height: 1.3;
          }
          
          .contact-description {
            color: #B0B0B0;
            line-height: 1.8;
            margin-bottom: 2.5rem;
            font-size: 1.1rem;
            
            strong {
              color: #6C63FF;
              font-weight: 600;
            }
          }
        }
        
        .availability {
          margin-bottom: 2.5rem;
          
          h4 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
            color: #fff;
          }
          
          .availability-list {
            list-style: none;
            
            li {
              color: #B0B0B0;
              margin-bottom: 0.8rem;
              padding-left: 1.5rem;
              position: relative;
              line-height: 1.6;
              
              &::before {
                content: '✓';
                position: absolute;
                left: 0;
                color: #6C63FF;
                font-weight: bold;
              }
            }
          }
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          
          .btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 14px 28px;
            font-size: 1rem;
            font-weight: 500;
            
            @media (max-width: 480px) {
              padding: 12px 24px;
              font-size: 0.9rem;
            }
          }
        }
        
        .contact-details-container {
          h3 {
            font-size: 2rem;
            margin-bottom: 2rem;
            color: #fff;
          }
        }
        
        .contact-details-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }
        
        .contact-card {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          text-decoration: none;
          padding: 1.5rem;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          
          &:hover {
            border-color: #6C63FF;
            background: rgba(108, 99, 255, 0.1);
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(108, 99, 255, 0.1);
          }
          
          .contact-icon-wrapper {
            .contact-icon {
              width: 55px;
              height: 55px;
              border-radius: 12px;
              background: rgba(108, 99, 255, 0.15);
              display: flex;
              align-items: center;
              justify-content: center;
              color: #6C63FF;
              font-size: 1.5rem;
            }
          }
          
          .contact-text {
            .contact-title {
              font-size: 0.9rem;
              color: #A0A0A0;
              margin-bottom: 5px;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            
            .contact-value {
              font-size: 1.2rem;
              color: #fff;
              font-weight: 500;
            }
          }
        }
        
        .linkedin-section {
          background: linear-gradient(135deg, rgba(0, 119, 181, 0.1), rgba(0, 119, 181, 0.05));
          border-radius: 15px;
          padding: 2rem;
          border: 1px solid rgba(0, 119, 181, 0.2);
          
          h4 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: #fff;
          }
          
          .linkedin-link {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: #e2eaef;
            text-decoration: none;
            font-weight: 500;
            font-size: 1.1rem;
            padding: 12px 24px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 30px;
            transition: all 0.3s ease;
            
            &:hover {
              background: rgba(0, 119, 181, 0.2);
              transform: translateY(-2px);
              
              svg {
                transform: translateX(5px);
              }
            }
            
            svg {
              transition: transform 0.3s ease;
            }
          }
        }
        
        .footer {
          text-align: center;
          padding: 1rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin-top: 4rem;
          
          p {
            color: #A0A0A0;
            margin: 0.5rem 0;
            font-size: 0.9rem;
            
            &:last-child {
              color: #6C63FF;
              font-weight: 500;
              margin-top: 1rem;
            }
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;