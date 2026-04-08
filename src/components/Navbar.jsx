import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi';
import '../styles/App.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', icon: <FiHome />, href: '#home' },
    { name: 'About', icon: <FiUser />, href: '#about' },
    { name: 'Skills', icon: <FiCode />, href: '#skills' },
    { name: 'Projects', icon: <FiBriefcase />, href: '#projects' },
    { name: 'Experience', icon: <FiBriefcase />, href: '#experience' },
    { name: 'Contact', icon: <FiMail />, href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`navbar ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <motion.div
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="logo-text">Dharun<span className="logo-highlight">S</span></span>
          </motion.div>

          <div className="nav-links">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="mobile-menu-link"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
          background: transparent;
          
          &.scrolled {
            background: rgba(30, 30, 30, 0.95);
            backdrop-filter: blur(10px);
            padding: 15px 0;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          }
          
          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          .logo {
            .logo-text {
              font-size: 1.8rem;
              font-weight: 700;
              color: #fff;
              
              .logo-highlight {
                color: #6C63FF;
              }
            }
          }
          
          .nav-links {
            display: flex;
            gap: 2rem;
            
            @media (max-width: 768px) {
              display: none;
            }
            
            a {
              display: flex;
              align-items: center;
              gap: 8px;
              color: #E0E0E0;
              text-decoration: none;
              font-weight: 500;
              transition: all 0.3s ease;
              padding: 8px 16px;
              border-radius: 20px;
              
              &:hover {
                color: #6C63FF;
                background: rgba(108, 99, 255, 0.1);
              }
              
              svg {
                font-size: 1.2rem;
              }
            }
          }
          
          .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: #fff;
            font-size: 1.5rem;
            cursor: pointer;
            
            @media (max-width: 768px) {
              display: block;
            }
          }
        }
        
        .mobile-menu {
          position: fixed;
          top: 70px;
          right: 0;
          bottom: 0;
          width: 300px;
          background: rgba(30, 30, 30, 0.98);
          backdrop-filter: blur(20px);
          z-index: 999;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          border-left: 2px solid #6C63FF;
          
          .mobile-menu-link {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: #E0E0E0;
            text-decoration: none;
            font-size: 1.2rem;
            padding: 12px 20px;
            border-radius: 10px;
            transition: all 0.3s ease;
            
            &:hover {
              background: rgba(108, 99, 255, 0.2);
              color: #6C63FF;
              transform: translateX(10px);
            }
            
            svg {
              font-size: 1.4rem;
            }
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;