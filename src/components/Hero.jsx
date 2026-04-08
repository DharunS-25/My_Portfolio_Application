import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload } from 'react-icons/fi';
import { FaPython, FaReact, FaDatabase } from 'react-icons/fa';

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

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          color: white;
        }
        
        /* Background with gradients like the image */
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -2;
          overflow: hidden;
        }
        
        .bg-gradient-1 {
          position: absolute;
          top: -30%;
          left: -10%;
          width: 60%;
          height: 60%;
          background: radial-gradient(circle, rgba(108, 99, 255, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
        }
        
        .bg-gradient-2 {
          position: absolute;
          bottom: -20%;
          right: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(255, 101, 132, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
        }
        
        .bg-gradient-3 {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translateX(-50%);
          width: 40%;
          height: 40%;
          background: radial-gradient(circle, rgba(74, 68, 198, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
        }
        
        .hero-bg {
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: radial-gradient(
            circle at center,
            rgba(108, 99, 255, 0.1) 0%,
            transparent 50%
          );
          z-index: -1;
        }
        
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        
        .hero-text {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .profile-image-container {
          margin-bottom: 2rem;
        }
        
        .profile-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #6C63FF;
          box-shadow: 0 15px 35px rgba(108, 99, 255, 0.25);
          background: linear-gradient(135deg, #6C63FF, #4A44C6);
          padding: 4px;
          transition: all 0.3s ease;
        }
        
        .profile-image:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(108, 99, 255, 0.35);
        }
        
        .badge {
          display: inline-block;
          padding: 10px 24px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 25px;
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 2rem;
          color: white;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #fff 0%, #a0a0a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #6C63FF, #FF6584);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        h2 {
          font-size: 1.8rem;
          font-weight: 400;
          color: #A0A0A0;
          margin-bottom: 2rem;
          line-height: 1.4;
        }
        
        .highlight {
          color: #6C63FF;
          font-weight: 600;
        }
        
        .hero-description {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 3rem;
          color: #B0B0B0;
          max-width: 700px;
        }
        
        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        
        .btn {
          padding: 15px 30px;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: none;
          cursor: pointer;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #6C63FF, #4A44C6);
          color: white;
          box-shadow: 0 10px 20px rgba(108, 99, 255, 0.3);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(108, 99, 255, 0.4);
        }
        
        .btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-3px);
        }
        
        .btn-resume {
          background: linear-gradient(135deg, #FF6584, #FF4B6C);
          color: white;
          box-shadow: 0 10px 20px rgba(255, 101, 132, 0.3);
        }
        
        .btn-resume:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(255, 101, 132, 0.4);
        }
        
        .download-icon {
          font-size: 1.2rem;
        }
        
        .tech-icons {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .tech-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 1.2rem;
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          min-width: 100px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .tech-icon:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .tech-icon span {
          font-size: 0.9rem;
          color: #B0B0B0;
          font-weight: 500;
        }
        
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .social-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: linear-gradient(135deg, #6C63FF, #4A44C6);
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(108, 99, 255, 0.3);
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          h1 {
            font-size: 2.8rem;
          }
          
          h2 {
            font-size: 1.5rem;
          }
          
          .hero-description {
            font-size: 1.1rem;
          }
          
          .profile-image {
            width: 180px;
            height: 180px;
          }
          
          .btn {
            padding: 12px 24px;
            font-size: 0.9rem;
          }
          
          .tech-icons {
            gap: 2rem;
          }
          
          .stats-container {
            max-width: 350px;
            padding: 20px;
          }
          
          .stat-number {
            font-size: 2.2rem;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: 2.2rem;
          }
          
          .profile-image {
            width: 150px;
            height: 150px;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          
          .btn {
            width: 250px;
          }
          
          .tech-icons {
            gap: 1.5rem;
            flex-wrap: wrap;
          }
          
          .tech-icon {
            min-width: 90px;
            padding: 1rem;
          }
          
          .social-links {
            gap: 1rem;
          }
          
          .social-icon {
            width: 45px;
            height: 45px;
            font-size: 1.3rem;
          }
          
          .stats-container {
            max-width: 300px;
          }
          
          .stat-number {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;