import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion} from "framer-motion";

import hand_victory from "../../assets/img/victory-hand.png";

const AboutConnectSection = ({ letsConnect, social_links }) => {
  return (
    <section className="about-me-section">
      <motion.div
        className="victory-hand"
        initial={{ translateY: "100%", rotate: "0" }}
        whileInView={{ translateY: "0", rotate: "-15deg" }}
        transition={{
          type: "spring",
          damping: 15,
          mass: 0.8,
          stiffness: 200,
        }}
        viewport={{ once: true }}
      >
        <img src={hand_victory} alt="hand_3d" />
      </motion.div>
      <div className="container">
        <div className="about-me-wrapper">
          <p className="punch">let's connect!</p>
          <h1>{letsConnect.heading}</h1>
          <p>{letsConnect.description}</p>

          <div className="about-social-links">
            {social_links.map((link, index) => (
              <div className="social-icon" key={index.toString()}>
                <a href={link.link} key={index.toString()}>
                  <GatsbyImage
                    image={getImage(link.icon)}
                    alt={link.title}
                    formats={["auto", "webp", "avif"]}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConnectSection;
