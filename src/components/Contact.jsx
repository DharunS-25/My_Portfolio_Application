import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiBriefcase, FiCalendar, } from 'react-icons/fi';
import '../styles/App.scss';

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
    </section>
  );
};

export default Contact;