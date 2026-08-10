import React from "react";
import { motion } from "framer-motion";
import { FiBook, FiTarget, FiAward } from "react-icons/fi";
import "../styles/App.scss";

const About = () => {
  // =========================
  // Statistics
  // =========================
  const stats = [
    {
      icon: <FiBook />,
      value: "8.00",
      label: "CGPA",
      suffix: "/10",
    },
    {
      icon: <FiTarget />,
      value: "6",
      label: "Projects",
      suffix: "Completed",
    },
    {
      icon: <FiAward />,
      value: "7",
      label: "Certifications",
      suffix: "",
    },
  ];

  // =========================
  // Soft Skills
  // =========================
  const softSkills = [
    "Analytical Thinking",
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Strong Work Ethic",
    "Active Listening",
  ];

  return (
    <section className="about section" id="about">
      <div className="container">

        {/* =========================
            Section Title
        ========================== */}
        <motion.div
          className="section-title"
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          About Me
        </motion.div>

        {/* =========================
            About Content
        ========================== */}
        <div className="about-content">

          {/* =========================
              About Text
          ========================== */}
          <motion.div
            className="about-text"
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
            }}
          >

            {/* Introduction */}
            <p>
              I’m a Computer Science undergraduate who enjoys turning
              problems into technology-driven solutions. My interests span
              software development, data analytics, machine learning, and
              full-stack development, with hands-on experience in Python,
              Java, SQL, MERN, and MongoDB.
            </p>

            {/* Second Paragraph */}
            <p>
              From building web applications to exploring data and
              intelligent systems, I focus on creating solutions that are
              practical, scalable, and meaningful. I’m constantly learning,
              experimenting, and looking for new ways to build technology
              that makes a real-world difference.
            </p>

            {/* Education Introduction */}
            <p>
              Currently pursuing a B.E. in Computer Science Engineering at
              Kumaraguru College of Technology, Coimbatore, with a strong
              academic foundation in Data Structures, Database Management
              Systems, Machine Learning, Statistics, Data Analytics, and
              Software Development.
            </p>

            {/* =========================
                Soft Skills
            ========================== */}
            <div className="soft-skills">
              <h4>Soft Skills</h4>

              <div className="skills-grid">
                {softSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      scale: 1.1,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* =========================
              Statistics
          ========================== */}
          <motion.div
            className="about-stats"
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                whileHover={{
                  scale: 1.05,
                }}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
              >

                {/* Icon */}
                <div className="stat-icon">
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="stat-value">
                  {stat.value}

                  {stat.suffix && (
                    <span className="stat-suffix">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Label */}
                <div className="stat-label">
                  {stat.label}
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =========================
            Education Section
        ========================== */}
        <motion.div
          className="education"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
        >

          <h3>Education</h3>

          <div className="education-card">

            {/* Education Header */}
            <div className="education-header">
              <h4>
                B.E. Computer Science Engineering
              </h4>

              <span className="education-period">
                2023 - 2027
              </span>
            </div>

            {/* Institution */}
            <div className="education-institution">
              Kumaraguru College of Technology, Coimbatore
            </div>

            {/* Education Details */}
            <div className="education-details">

              <span className="cgpa">
                CGPA: 8.00/10
              </span>

              <span className="status">
                Graduation: 2027
              </span>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;