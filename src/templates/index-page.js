import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/IndexLayout";
import anime from "animejs";

const CurrentHeading = {
  HEADING_ONE: 1,
  HEADING_TWO: 2,
}

// eslint-disable-next-line
export const IndexPageTemplate = ({ image, city, title }) => {
  const heroImage = getImage(image) || image;

  const animationRef = React.useRef(null);
  React.useEffect(() => {
    animationRef.current = anime({
      targets: "#web-dev-text-js h1",
      loop: false,
      duration: 1200,
      translateX: ["-100%", "0"],
      easing: "easeOutSine",
    });
  }, []);

  const [mousePos, setMousePos] = useState({
    pageX: 0,
    pageY: 0,
  });

  const [currentActiveHeading, setCurrentActiveHeading] = useState(
    CurrentHeading.HEADING_ONE
  );

  const handleMouseEnter = (ev, cur_heading) => {
    switch (cur_heading) {
      case CurrentHeading.HEADING_ONE: {
        setCurrentActiveHeading(CurrentHeading.HEADING_ONE);
        break;
      }
      case CurrentHeading.HEADING_TWO: {
        setCurrentActiveHeading(CurrentHeading.HEADING_TWO);
        break;
      }
    }
  };

  const getExactPosition = (pos) => (pos * -1) / 15;

  const handleMouseMove = (ev) =>
    setMousePos({ pageX: ev.pageX, pageY: ev.pageY });

  return (
    <section className="hero-section" onMouseMove={(ev) => handleMouseMove(ev)}>
      <div className="content-wrapper" id="content-wrapper-js">
        <div className="intro-content">
          <p className="intro-para">{title}</p>
          <div
            onMouseEnter={(ev) =>
              handleMouseEnter(ev, CurrentHeading.HEADING_ONE)
            }
            className={`heading-wrap ${
              currentActiveHeading === CurrentHeading.HEADING_ONE
                ? "active"
                : "inactive"
            }`}
          >
            <h1 className="hover-heading filled">ui designer</h1>
            <h1 className="hover-heading stroked">ui designer</h1>
          </div>
          <div
            onMouseEnter={(ev) =>
              handleMouseEnter(ev, CurrentHeading.HEADING_TWO)
            }
            className={`heading-wrap ${
              currentActiveHeading === CurrentHeading.HEADING_TWO
                ? "active"
                : "inactive"
            }`}
          >
            <h1 className="hover-heading filled">& web developer</h1>
            <h1 className="hover-heading stroked">& web developer</h1>
          </div>
          <div className="lower-wrap">
            <p>based in {city}.</p>
            <ul className="brands-list">
              <li className="brand-icon biddano"></li>
              <li className="brand-icon zazzy"></li>
            </ul>
          </div>
          <div className="button-wrap">
            <a className="primary">View portfolio</a>
            <Link to={"/about"}>About me</Link>
          </div>
        </div>
        <div
          className="intro-image"
          style={{
            transform: `translate3d(${getExactPosition(
              mousePos.pageX
            )}px, ${getExactPosition(mousePos.pageY)}px, 0)`,
          }}
        >
          <GatsbyImage
            image={heroImage}
            alt="Nitin Bhardwaj"
            formats={["auto", "webp", "avif"]}
          />
        </div>
      </div>
    </section>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  city: PropTypes.string,
  title: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        city={frontmatter.city}
        title={frontmatter.title}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        city
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        title
      }
    }
  }
`;
