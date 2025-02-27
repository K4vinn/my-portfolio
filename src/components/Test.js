import { motion } from "framer-motion";
import "../assets/styles/About.css";

const Timeline = () => {
  return (
    <div className="timeline-container">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "80vh" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="timeline-line"
      >
        {[0.1, 0.4, 0.6, 0.9].map((pos, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: pos + 0.5, duration: 0.5 }}
            className="timeline-dot"
            style={{ top: `${pos * 100}%` }}
          />
        ))}
      </motion.div>
      <div className="timeline-boxes">
        {[
          [-150, 0],
          [150, 1],
        ].map(([x, delay], index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 1, duration: 1 }}
            className="timeline-box"
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
