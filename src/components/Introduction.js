import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//css
import "../assets/styles/Introduction.css";

//the extra images for decoration
import flower1 from "../assets/images/flower1.png";
import flower2 from "../assets/images/flower2.png";
import gflower from "../assets/images/green-flower.png";
import gmoth from "../assets/images/green-moth.png";
import gbutterfly from "../assets/images/light-green-butterly.png";
import sparklef from "../assets/images/sparkle-for.png";
import sparklestar from "../assets/images/sparkle-star.png";
import starsparkle from "../assets/images/star-sparkle.png";

const Introduction = () => {
  const [isFlying, setIsFlying] = useState(false);

  const handleMoth = () => {
    console.log("Fly!");
    setIsFlying(true);
    setTimeout(() => {
      setIsFlying(false);
    }, 7000);
  };

  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <>
      <div className="introduction-container" ref={ref}>
        {inView && (
          <>
            <motion.img
              src={flower1}
              alt="Flower 1"
              className="flower flower-top"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />

            {[3].map((i) => (
              <motion.img
                src={flower2}
                alt="Flower 2"
                className="flower flower-bottom"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                key={i}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.2 }}
              />
            ))}

            {/* Rest of the content */}
            <div className="introduction-content">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="introduction-title"
              >
                <h1 className="floating-text"> A Software Developer </h1>
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="introduction-title"
              >
                PORTFOLIO
              </motion.h1>

              {[1, 2, 3].map((i) => (
                <motion.h1
                  key={i}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 + i * 0.2 }}
                  className="introduction-shadow"
                >
                  PORTFOLIO
                </motion.h1>
              ))}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="about-button"
              >
                ABOUT ME
              </motion.button>
            </div>
            <motion.img
              src={gmoth}
              alt="Green Moth"
              className={`gmoth ${isFlying ? "flying" : ""}`}
              onClick={handleMoth}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </>
        )}
      </div>

      {inView && (
        <>
          <motion.img
            src={gflower}
            alt="Green Flower"
            className="gflower"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.img
            src={gflower}
            alt="Green Flower"
            className="gflower2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.img
            src={gbutterfly}
            alt="Green Butterfly"
            className="gbutterfly"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.img
            src={sparklef}
            alt="Sparkle"
            className="sparklef"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.img
            src={sparklef}
            alt="Sparkle"
            className="sparklef2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.img
            src={sparklestar}
            alt="Sparkle Star"
            className="sparklestar"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.img
            src={starsparkle}
            alt="Star Sparkle"
            className="starsparkle"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.img
            src={starsparkle}
            alt="Star Sparkle"
            className="starsparkle2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </>
      )}
    </>
  );
};

export default Introduction;
