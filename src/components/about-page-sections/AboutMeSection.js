import React, { useRef } from "react";
import { motion } from "framer-motion";

import hand_rock from "../../assets/img/rock-hand.png";

const AboutMeSection = ({ punchline, content, extraContent, pageContent }) => {
  const PageContent = pageContent;

  return (
    <section className="about-me-section">
      <motion.div
        className="rock-hand"
        initial={{ translateX: "100%", rotate: "0" }}
        whileInView={{ translateX: "0", rotate: "-30deg" }}
        transition={{
          type: "spring",
          damping: 8,
          mass: 1,
          stiffness: 100,
          duration: 8000,
        }}
        viewport={{ once: true }}
      >
        <img src={hand_rock} alt="hand_3d" />
      </motion.div>
      <div className="container">
        <div className="about-me-wrapper">
          <p className="punch">{punchline}</p>
          <PageContent className="about-me-content" content={content} />
          <p className="extra-content">{extraContent}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
