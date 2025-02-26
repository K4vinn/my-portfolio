import React from "react";
import "../assets/styles/About.css";
import { TypeAnimation } from "react-type-animation";
import { SearchOutlined } from "@ant-design/icons";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger the animation only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="left">
        <div className="intro-text">
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
            I am a Fresh Graduate Software Developer, from Penang, Malaysia,
            with a knack for unique, arsty and creative designs that stand out
            and reflect to my personality. I'm a passionate developer to take on
            a creative challenge all whilst making things beautiful and
            innovative.
          </p>
          <p> Lets connect! </p>
          <button className="btn">
            <SearchOutlined className="icon" />
            linkedin.com/in/kavinash-devakumar/
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right">Hello</div>
    </section>
  );
};

export default About;
