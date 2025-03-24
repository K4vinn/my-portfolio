import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/styles/Work.css";

import picture from "../assets/images/test.jpg";
import test1 from "../assets/images/test1.jpg";

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
    image: test1,
    description:
      "My very own personal portfolio! Made with the very essence of inspiration, color and design of what portrays my personality as a whole. Psst.. It's nearly done, just be prepared! (With more updates to come too!)",
    keywords: ["JavaScript", "ReactJS", "CSS", "HTML"],
  },
];

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);

  const changeProject = (project) => {
    setActiveProject(project);
  };

  return (
    <motion.section
      id="work"
      className="work-section-main"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Project List */}
      <motion.div
        className="project-list"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2>Projects</h2>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`project-item ${
              activeProject.id === project.id ? "active" : ""
            }`}
            onClick={() => changeProject(project)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: project.id * 0.1, duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span>{`0${project.id}`} |</span>
            {project.title}
          </motion.div>
        ))}
      </motion.div>

      {/* Project Display */}
      <motion.div
        className="project-display"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.img
          key={activeProject.image} // This forces reanimation when project changes
          src={activeProject.image}
          alt={activeProject.title}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.h3
          key={activeProject.title} // Ensures reanimation on project change
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {activeProject.title}
        </motion.h3>
        <motion.p
          key={activeProject.description} // Ensures reanimation on project change
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {activeProject.description}
        </motion.p>

        {/* Keywords Animation Fix */}
        <motion.div
          className="keywords"
          key={activeProject.id} // Forces re-render when project changes
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
              transition={{ duration: 0.3 }} // Removes stagger delay
            >
              {keyword}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Work;
