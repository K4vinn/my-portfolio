import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../assets/styles/Work.css";

import picture from "../assets/images/test.jpg";

const projects = [
  {
    id: 1,
    title: "HMDIO?",
    image: picture,
    description:
      "How Much Do I Owe? - Say goodbye to confusing receipts and uneven splits with this smart web app that scans, itemizes, and splits your receipts effortlessly—whether you're managing a group dinner or just keeping track of your spending, it's the easiest way to organize and share the cost!",
    keywords: ["React", "CSS", "UI"],
  },
  {
    id: 2,
    title: "Portfolio",
    image: picture,
    description:
      "My very own personal portfolio! Made with the very essence of inspiration, color and design of what portrays my personality as a whole. Psst.. It's nearly done, just be prepared! (With more updates to come too!)",
    keywords: ["JavaScript", "ReactJS", "CSS", "HTML"],
  },
  {
    id: 3,
    title: "PR3",
    image: picture,
    description:
      "A new creative project that showcases modern UI/UX principles.",
    keywords: ["JavaScript", "ReactJS", "CSS", "HTML"],
  },
  {
    id: 4,
    title: "PR4",
    image: picture,
    description:
      "Another innovative project with unique styling and interactivity.",
    keywords: ["JavaScript", "ReactJS", "CSS", "HTML"],
  },
  {
    id: 5,
    title: "PR5",
    image: picture,
    description:
      "This project explores the deep connection between design and user experience.",
    keywords: ["JavaScript", "ReactJS", "CSS", "HTML"],
  },
];

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [loading, setLoading] = useState(false);

  const changeProject = (project) => {
    setLoading(true); // Start loading animation
    setTimeout(() => {
      setActiveProject(project);
      setLoading(false); // Stop loading animation
    }, 50);
  };

  return (
    <motion.section
      id="work"
      className="work-section-main"
      initial={{ opacity: 0, y: 50 }} // Start off-screen
      animate={{ opacity: 1, y: 0 }} // Animate in when loaded
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
    >
      <div className="project-list">
        <h2>Projects</h2>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`project-item ${
              activeProject.id === project.id ? "active" : ""
            }`}
            onClick={() => changeProject(project)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + project.id * 0.1, duration: 0.5 }}
          >
            <span>{`0${project.id}`} |</span>
            {project.title}
          </motion.div>
        ))}
      </div>

      {/* Animated Section */}
      <motion.div
        className="project-display"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <motion.img
              src={activeProject.image}
              alt={activeProject.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {activeProject.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {activeProject.description}
            </motion.p>
            <motion.div
              className="keywords"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {activeProject.keywords.map((keyword, index) => (
                <motion.span
                  key={index}
                  className="keyword"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                >
                  {keyword}
                </motion.span>
              ))}
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.section>
  );
};

export default Work;
