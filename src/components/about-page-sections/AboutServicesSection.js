import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ParallaxText from "../animations/ParallaxText";

const AboutServicesSection = ({
  thingsILove,
  webDevCard,
  webDevFigureCard,
  uiDesCard,
  uiDesFigureCard,
}) => (
  <React.Fragment>
    <section className="about-me-section">
      <div className="container">
        <div className="about-me-wrapper work">
          <div className="about-services-content">
            <p className="punch">what i can do for you?</p>
            <h1>{thingsILove.heading}</h1>
            <p>{thingsILove.description}</p>
          </div>
          <div className="services-cards row">
            <div className="services-column col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="service-card gd-1">
                <h2 className="title">{webDevCard.heading}</h2>
                <p>{webDevCard.description}</p>
                <div className="art-1">
                  <GatsbyImage
                    image={getImage(webDevCard.image) || webDevCard.image}
                    alt="3d-art"
                  />
                </div>
              </div>
            </div>
            <div className="services-column col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="service-card halved gd-4 metric">
                <h1 className="big-number pur">{webDevFigureCard.figure}</h1>
                <h1 className="metric-title">{webDevFigureCard.heading}</h1>
                <p>{webDevFigureCard.description}</p>
              </div>
              <div className="service-card halved gd-3 metric">
                <h1 className="big-number gre">{uiDesFigureCard.figure}</h1>
                <h1 className="metric-title">{uiDesFigureCard.heading}</h1>
                <p>{uiDesFigureCard.description}</p>
              </div>
            </div>
            <div className="services-column col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="service-card halved gd-2 mt-1 row-type">
                <div className="column-content">
                  <h2 className="title">{uiDesCard.heading}</h2>
                  <p>{uiDesCard.description}</p>
                </div>
                <div className="art-2">
                  <GatsbyImage
                    image={getImage(uiDesCard.image) || uiDesCard.image}
                    alt="3d-art"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-me-section">
      <ParallaxText baseVelocity={-5}>
        <div className="tech-used">
          <div className="tech-icon scss"></div>
          <div className="tech-icon jamstack"></div>
          <div className="tech-icon parcel"></div>
          <div className="tech-icon webpack"></div>
          <div className="tech-icon react"></div>
          <div className="tech-icon gatsby"></div>
          <div className="tech-icon strapi"></div>
          <div className="tech-icon netlify-cms"></div>
        </div>
      </ParallaxText>
      <ParallaxText baseVelocity={5}>
        <div className="tech-used">
          <div className="tech-icon angular"></div>
          <div className="tech-icon borboun"></div>
          <div className="tech-icon html"></div>
          <div className="tech-icon netlify"></div>
          <div className="tech-icon node"></div>
          <div className="tech-icon npm"></div>
          <div className="tech-icon yarn"></div>
          <div className="tech-icon pug"></div>
        </div>
      </ParallaxText>
    </section>
  </React.Fragment>
);

export default AboutServicesSection;
