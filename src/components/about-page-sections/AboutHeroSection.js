import React from "react";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";

const AboutHeroSection = ({ quote, title, heroImage }) => (
  <section className="about-section" id="about-layer-js">
    <div className="container">
      <div className="content-wrapper">
        <div className="intro-content">
          <motion.div
            style={{width: 'fit-content'}}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 1000,
            }}
          >
            <p className="intro-para">{quote}</p>
          </motion.div>
          <div className="heading-wrap active">
            <h1 className="hover-heading filled">{title}</h1>
            <h1 className="hover-heading stroked">{title}</h1>
          </div>
        </div>
        <div className="intro-image" id="about-nitin-js">
          <GatsbyImage
            image={heroImage}
            alt="Nitin Bhardwaj"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutHeroSection;
