import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import "../styles/App.scss";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const socialLinks = [
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      href: "https://github.com/DharunS-25",
      label: "GitHub",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      href: "https://linkedin.com/in/dharunrss10031725",
      label: "LinkedIn",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
      href: "mailto:dharuns2508@gmail.com",
      label: "Email",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
      href: "tel:+917845948395",
      label: "Phone",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      href: "https://leetcode.com/u/Dharun_25/",
      label: "LeetCode",
    },
  ];

  return (
    <section id="home" className="hero-section">
      {/* Background */}
      <div className="hero-background">
        <div className="bg-gradient-1" />
        <div className="bg-gradient-2" />
        <div className="bg-gradient-3" />
      </div>

      {/* Mouse Animation */}
      <motion.div
        className="hero-bg"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 100 }}
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
              {/* Profile */}
              <motion.div
                className="profile-image-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src="/dharun.jpeg"
                  alt="Dharun S"
                  className="profile-image"
                />
              </motion.div>

              {/* Badge */}
              <motion.div
                className="badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                Data Science & Web Developer Aspirant
              </motion.div>

              {/* Title */}
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Passionate Data Science undergraduate skilled in Python,
                Machine Learning, and Full-Stack development. Building intelligent
                solutions that drive measurable business impact.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
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
                  <FiDownload />
                  Download Resume
                </a>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                className="social-links"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src={link.icon}
                      alt={link.label}
                      width="24"
                      height="24"
                    />
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