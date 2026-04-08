import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload } from 'react-icons/fi';
import { FaPython, FaReact, FaDatabase } from 'react-icons/fa';
import '../styles/App.scss';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/DharunS-25', label: 'GitHub' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com/in/dharunrss10031725', label: 'LinkedIn' },
    { icon: <FiMail />, href: 'mailto:dharuns2508@gmail.com', label: 'Email' },
    { icon: <FiPhone />, href: 'tel:+917845948395', label: 'Phone' },
  ];

  return (
    <section id="home" className="hero-section">
      {/* Background with gradient like the image */}
      <div className="hero-background">
        <div className="bg-gradient-1" />
        <div className="bg-gradient-2" />
        <div className="bg-gradient-3" />
      </div>
      
      {/* Animated background effect */}
      <motion.div 
        className="hero-bg"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: 'spring', stiffness: 100 }}
      />
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-main">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Profile Image */}
              <motion.div
                className="profile-image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <img 
                  src="/dharun.jpeg" 
                  alt="Dharun S - Data Science & Web Developer"
                  className="profile-image"
                />
              </motion.div>

              {/* Badge */}
              <motion.div
                className="badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
              >
                Data Science & Web Developer Aspirant
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Hi, I'm <span className="gradient-text">Dharun S</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Passionate Data Science undergraduate skilled in Python, Machine Learning, 
                and Full-Stack development. Building intelligent solutions that drive 
                measurable business impact.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a href="#projects" className="btn btn-primary">
                  View Projects
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Contact Me
                </a>
                <a 
                  href="/resume.pdf" 
                  className="btn btn-resume"
                  download="Dharun_Resume.pdf"
                >
                  <FiDownload className="download-icon" />
                  Download Resume
                </a>
              </motion.div>

              {/* Tech Icons */}
              <motion.div
                className="tech-icons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div 
                  className="tech-icon"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <FaPython style={{ color: '#3776AB', fontSize: '2.5rem' }} />
                  <span>Python</span>
                </motion.div>
                
                <motion.div 
                  className="tech-icon"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <FaReact style={{ color: '#61DAFB', fontSize: '2.5rem' }} />
                  <span>React</span>
                </motion.div>
                
                <motion.div 
                  className="tech-icon"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <FaDatabase style={{ color: '#47A248', fontSize: '2.5rem' }} />
                  <span>Database</span>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="social-links"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + (index * 0.1) }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;