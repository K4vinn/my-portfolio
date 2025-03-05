import React, { useState } from "react";
import "../assets/styles/About.css";
import { TypeAnimation } from "react-type-animation";
import { SearchOutlined } from "@ant-design/icons";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import test1 from "../assets/images/test1.jpg";
import test2 from "../assets/images/test2.jpg";
import test3 from "../assets/images/test3.jpg";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const images = [
    { id: 1, src: test1, alt: "My Family" },
    { id: 2, src: test2, alt: "A Good Picture" },
    { id: 3, src: test3, alt: "Loki" },
  ];

  const [index, setIndex] = useState(Math.floor(images.length / 2));

  const cycleImages = (dragInfo) => {
    if (dragInfo.offset.x < -50) {
      setIndex((prev) => (prev + 1) % images.length);
    } else if (dragInfo.offset.x > 50) {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="left">
        <motion.div
          className="intro-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1> Hello, </h1>
          <h2 className="type-animation">
            {inView && (
              <TypeAnimation
                sequence={["I'm Kavinash Devakumar", 2000]}
                speed={30}
                repeat={Infinity}
                cursor={true}
              />
            )}
          </h2>
          <p>
            From Penang, Malaysia - With a knack for artsy, creative and unique
            designs that stand out! I love developing and designing things that
            are beautiful and innovative.
          </p>
          <p> Psst.. I also love music, sports and film! </p>
          <button
            className="btn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/kavinash-devakumar/")
            }
          >
            <SearchOutlined className="icon" />
            linkedin.com/in/kavinash-devakumar/
          </button>
        </motion.div>
      </div>

      {/* Right Side (Image Carousel) */}

      <motion.div
        className="right relative w-64 h-96 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "linear" }}
      >
        {images.map((image, i) => (
          <motion.div
            key={i}
            className="absolute w-56 h-80 rounded-xl overflow-hidden shadow-lg cursor-grab"
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            onDragEnd={(event, info) => cycleImages(info)}
            animate={{
              zIndex: index === i ? 10 : images.length - Math.abs(index - i),
              scale: index === i ? 1 : 0.9,
              x: (i - index) * 50,
              opacity: index === i ? 1 : 0.8,
            }}
            transition={{
              x: { type: "spring", stiffness: 500, damping: 10000 },
              // scale: { duration: 0.15 },
              opacity: { duration: 0.1 },
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              draggable="false"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
