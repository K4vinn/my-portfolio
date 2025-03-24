import React, { useState, useEffect } from "react";
import "../assets/styles/About.css";
import { TypeAnimation } from "react-type-animation";
import { SearchOutlined } from "@ant-design/icons";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import test1 from "../assets/images/test1.jpg";
import test2 from "../assets/images/test2.jpg";
import test3 from "../assets/images/test3.jpg";

const About = () => {
  const text = "To my experiences!";
  const [letters, setLetters] = useState([]);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const images = [
    { id: 1, src: test1, alt: "My Family" },
    { id: 2, src: test1, alt: "A Good Picture" },
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

  useEffect(() => {
    setLetters(
      text.split("").map((letter, index) => (
        <span
          key={index}
          className="wave-letter"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))
    );
  }, [text]);

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
          <Link
            className="my-exp text-2xl font-bold"
            to="education"
            smooth={true}
            duration={600}
          >
            {letters}
          </Link>
        </motion.div>
      </div>
      <div className="right">
        <div className="inner-box-img">
          <img className="img-b1" src={test1} />
          <img className="img-b2" src={test2} />
          <img className="img-b3" src={test3} />
        </div>
      </div>
    </section>
  );
};

export default About;
