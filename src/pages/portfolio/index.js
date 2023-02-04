import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Layout from "../../components/Layout";

import hand_rock from "../../assets/img/victory-hand.png";
import Model3DSection from "../../components/portfolio-page-section/Model3dSection";

import st from "../../assets/img/brands/starlings-lab.png";
import zazzy from "../../assets/img/brands/zazzy.png";
import blg from "../../assets/img/brands/blg.png";
import fishy from "../../assets/img/brands/fishy.png";
import rbe from "../../assets/img/brands/rbe.png";
import fc from "../../assets/img/brands/fc.png";
import ria from "../../assets/img/brands/ria.png";
import biddano from "../../assets/img/brands/biddano.png";
import defi from "../../assets/img/brands/defi.png";
import iitr from "../../assets/img/brands/iitr.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  margin: 12,
  focusOnSelect: true,
  draggable: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PortfolioSection = () => {
  const { scrollYProgress } = useScroll();
  const translate1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translate2 = useTransform(scrollYProgress, [0, 1], [-150, 100]);
  const translate3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const translate_span = useTransform(scrollYProgress, [0, 1], [100, 1700]);
  const translate_text = useTransform(scrollYProgress, [0, 1], [150, 250]);
  const translate_text2 = useTransform(scrollYProgress, [0, 1], [200, 0]);

  return (
    <Layout>
      <section className="portoflio-hero-section">
        <div className="container portoflio-wrapper">
          <div className="content-wrapper">
            <div className="intro-content">
              <motion.div
                style={{ width: "fit-content" }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <p className="intro-para">let's go</p>
              </motion.div>
              <div className="heading-wrap active">
                <h1 className="hover-heading filled">Case Studies</h1>
              </div>
            </div>
          </div>
          <motion.div
            className="rock-hand intro-image"
            initial={{ translateY: "100%", rotate: "0", opacity: 0 }}
            animate={{ translateY: "0", rotate: "8deg", opacity: 1 }}
            transition={{
              type: "spring",
              damping: 22,
              mass: 1,
              bounce: 18,
              stiffness: 250,
            }}
          >
            <img src={hand_rock} alt="hand_3d" />
          </motion.div>
        </div>
      </section>
      <section className="portoflio-second-section">
        <div className="container row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 website-card-row">
            <div className="arrow"></div>
            <motion.div
              className="website-card-column"
              style={{ translateY: translate1 }}
            >
              <div className="website-card" ratio="1/1">
                <img src={st} alt="web-page" />
              </div>
              <div className="website-card">
                <img src={defi} alt="web-page" />
              </div>
              <div className="website-card">
                <img src={blg} alt="web-page" />
              </div>
              <div className="website-card">
                <img src={fishy} alt="web-page" />
              </div>
            </motion.div>
            <motion.div
              className="website-card-column even"
              style={{ translateY: translate2 }}
            >
              <div className="website-card">
                <img src={iitr} alt="web-page" />
              </div>
              <div className="website-card">
                <img src={zazzy} alt="web-page" />
              </div>
              <div className="website-card">
                <img src={fc} alt="web-page" />
              </div>
              <div className="website-card">
                <img src={rbe} alt="web-page" />
              </div>
            </motion.div>
            <motion.div
              className="website-card-column"
              style={{ translateY: translate3 }}
            >
              <div className="website-card">
                <img src={biddano} alt="web-page" />
              </div>
              <div className="website-card">
                <img src={ria} alt="web-page" />
              </div>
            </motion.div>
          </div>
          <motion.div
            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 website-detail-wrap"
            style={{ translateY: translate_text }}
          >
            <p className="punch">Web development</p>
            <h1>
              You need a website!
              <motion.div
                className="strike"
                style={{ width: translate_span }}
              ></motion.div>
            </h1>
            <motion.div>
              <h1>
                You need an amazing, best looking and high performance website!
              </h1>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eget tincidunt odio. Morbi mi sem, feugiat quis elementum vitae,
              varius ultricies turpis. Praesent enim ipsum, consequat id neque
              eu, maximus scelerisque nunc. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
            <p>
              Nullam vitae rutrum est, eu scelerisque diam. Praesent molestie
              nibh libero, eu blandit velit rutrum sit amet. Morbi luctus
              porttitor enim, consequat fermentum justo lobortis quis. Integer
              euismod nisi et convallis euismod. Vestibulum lobortis
              sollicitudin ante, ac lobortis quam ullamcorper sit amet
            </p>
          </motion.div>

          <motion.div
            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 website-detail-wrap second"
            style={{ translateY: translate_text2 }}
          >
            <p className="punch">UI/UX Design</p>
            <motion.div>
              <h1>Your brand identity at the core of my approach</h1>
            </motion.div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eget tincidunt odio. Morbi mi sem, feugiat quis elementum vitae,
              varius ultricies turpis. Praesent enim ipsum, consequat id neque
              eu, maximus scelerisque nunc. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
            <p>
              Nullam vitae rutrum est, eu scelerisque diam. Praesent molestie
              nibh libero, eu blandit velit rutrum sit amet. Morbi luctus
              porttitor enim, consequat fermentum justo lobortis quis. Integer
              euismod nisi et convallis euismod. Vestibulum lobortis
              sollicitudin ante, ac lobortis quam ullamcorper sit amet
            </p>
          </motion.div>
          <Model3DSection />
        </div>
      </section>
      <section className="portfolio-fourth-section">
        <div className="container">
          <h1>Latest Projects</h1>
          <Slider {...settings}>
            <div className="case-study-card">
              <img src={st} alt="web-page" />
              <div className="case-study-details">
                <h3>DefiVerse</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget tincidunt odio. Morbi mi sem.
                </p>
                <a className="btn btn-md btn-light">
                  Visit Case Study
                </a>
              </div>
            </div>
            <div className="case-study-card">
              <img src={st} alt="web-page" />
              <div className="case-study-details">
                <h3>DefiVerse</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget tincidunt odio. Morbi mi sem.
                </p>
                <a className="btn btn-md btn-light">
                  Visit Case Study
                </a>
              </div>
            </div>
            <div className="case-study-card">
              <img src={st} alt="web-page" />
              <div className="case-study-details">
                <h3>DefiVerse</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget tincidunt odio. Morbi mi sem.
                </p>
                <a className="btn btn-md btn-light">
                  Visit Case Study
                </a>
              </div>
            </div>
            <div className="case-study-card">
              <img src={st} alt="web-page" />
              <div className="case-study-details">
                <h3>DefiVerse</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget tincidunt odio. Morbi mi sem.
                </p>
                <a className="btn btn-md btn-light">
                  Visit Case Study
                </a>
              </div>
            </div>
            <div className="case-study-card">
              <img src={st} alt="web-page" />
              <div className="case-study-details">
                <h3>DefiVerse</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget tincidunt odio. Morbi mi sem.
                </p>
                <a className="btn btn-md btn-light">
                  Visit Case Study
                </a>
              </div>
            </div>
            <div className="case-study-card">
              <img src={st} alt="web-page" />
              <div className="case-study-details">
                <h3>DefiVerse</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget tincidunt odio. Morbi mi sem.
                </p>
                <a className="btn btn-md btn-light">
                  Visit Case Study
                </a>
              </div>
            </div>
            <div className="case-study-card">
              <img src={st} alt="web-page" />
              <div className="case-study-details">
                <h3>DefiVerse</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur eget tincidunt odio. Morbi mi sem.
                </p>
                <a className="btn btn-md btn-light">
                  Visit Case Study
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="portoflio-third-section">
        <div className="container row">
          <div className="col-lg-8 col-md-8 col-sm-16 col-xs-12 office-detail-wrapper">
            <h1>
              “I’m an early bird and I’m a night owl so I’m wise and I have
              worms.”
            </h1>
            <p>
              Nullam vitae rutrum est, eu scelerisque diam. Praesent molestie
              nibh libero, eu blandit velit rutrum sit amet. Morbi luctus
              porttitor enim, consequat fermentum justo lobortis quis. Integer
              euismod nisi et convallis euismod. Vestibulum lobortis
              sollicitudin ante, ac lobortis quam ullamcorper sit amet
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 image-wrapper"></div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioSection;
