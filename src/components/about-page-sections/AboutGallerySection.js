import React from "react";
import me from "../../assets/img/me.png";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutGallerySection = () => {
  const { scrollYProgress } = useScroll();
  const translate = useTransform(scrollYProgress, [0, 1], [120, 900]);
  const translatel = useTransform(scrollYProgress, [0, 1], [0, 700]);

  return (
    <section className="gallery-section">
      <motion.div className="gallery-wrapper">
        <motion.div
          className="gallery-column odd"
          style={{ marginTop: translatel }}
        >
          <div className="gallery-item">
            <img className="bg-img" src={me} alt={'me'} />
          </div>
          <div className="gallery-item">
            <img className="bg-img" src={me} alt={'me'} />
          </div>
          <div className="gallery-item">
            <img className="bg-img" src={me} alt={'me'} />
          </div>
        </motion.div>
        <motion.div
          className="gallery-column"
          style={{ marginBottom: translate }}
        >
          <div className="gallery-item">
            <img className="bg-img" src={me} alt={'me'} />
          </div>
          <div className="gallery-item">
            <img className="bg-img" src={me} alt={'me'} />
          </div>
          <div className="gallery-item">
            <img className="bg-img" src={me} alt={'me'} />
          </div>
          <div className="gallery-item">
            <img className="bg-img" src={me} alt={'me'} />
          </div>
        </motion.div>
        <motion.div
          className="gallery-column odd"
          style={{ marginTop: translatel }}
        >
          <div className="gallery-item">
            <img className="bg-img" src={me} alt={'me'} />
          </div>
          <div className="gallery-item">
            <img className="bg-img" src={me} alt={'me'} />
          </div>
          <div className="gallery-item">
            <img className="bg-img" src={me} alt={'me'} />
          </div>
        </motion.div>
        <motion.div
          className="gallery-column"
          style={{ marginBottom: translate }}
        >
          <div className="gallery-item">
            <img className="bg-img" src={me} alt={'me'} />
          </div>
          <div className="gallery-item">
            <img className="bg-img" src={me} alt={'me'} />
          </div>
          <div className="gallery-item">
            <img className="bg-img" src={me} alt={'me'} />
          </div>
          <div className="gallery-item">
            <img className="bg-img" src={me} alt={'me'} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutGallerySection;
