import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { getImage } from "gatsby-plugin-image";

import AboutHeroSection from "../components/about-page-sections/AboutHeroSection";
import AboutMeSection from "../components/about-page-sections/AboutMeSection";
import AboutServicesSection from "../components/about-page-sections/AboutServicesSection";
import AboutGallerySection from "../components/about-page-sections/AboutGallerySection";
import AboutConnectSection from "../components/about-page-sections/AboutConnectSection";

// eslint-disable-next-line
export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  punchline,
  extraContent,
  quote,
  myImage,
  thingsILove,
  webDevCard,
  uiDesCard,
  webDevFigureCard,
  uiDesFigureCard,
  social,
  letsConnect,
}) => {
  const heroImage = getImage(myImage) || myImage;

  var social_links = [];
  social.forEach((edge) => {
    social_links.push(edge.node.frontmatter);
  });

  return (
    <React.Fragment>
      <AboutHeroSection quote={quote} title={title} heroImage={heroImage} />
      <AboutMeSection
        punchline={punchline}
        content={content}
        extraContent={extraContent}
        pageContent={contentComponent || Content}
      />
      <AboutGallerySection />
      <AboutServicesSection
        thingsILove={thingsILove}
        webDevCard={webDevCard}
        uiDesCard={uiDesCard}
        webDevFigureCard={webDevFigureCard}
        uiDesFigureCard={uiDesFigureCard}
      />
      <AboutConnectSection
        letsConnect={letsConnect}
        social_links={social_links}
      />
    </React.Fragment>
  );
};

AboutPageTemplate.propTypes = {
  myImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  quote: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  punchline: PropTypes.string.isRequired,
  extraContent: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  thingsILove: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
  letsConnect: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
  webDevCard: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  uiDesCard: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  webDevFigureCard: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    figure: PropTypes.string,
  }),
  uiDesFigureCard: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    figure: PropTypes.string,
  }),
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;
  const { allMarkdownRemark: social } = data;

  return (
    <Layout>
      <AboutPageTemplate
        quote={post.frontmatter.quote}
        myImage={post.frontmatter.myImage}
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        punchline={post.frontmatter.punchline}
        extraContent={post.frontmatter.extraContent}
        content={post.html}
        thingsILove={post.frontmatter.thingsILove}
        webDevCard={post.frontmatter.webDevCard}
        uiDesCard={post.frontmatter.uiDesCard}
        webDevFigureCard={post.frontmatter.webDevFigureCard}
        uiDesFigureCard={post.frontmatter.uiDesFigureCard}
        social={social.edges}
        letsConnect={post.frontmatter.letsConnect}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "social-media" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            link
            icon {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        quote
        title
        punchline
        extraContent
        myImage {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        thingsILove {
          heading
          description
        }
        letsConnect {
          heading
          description
        }
        webDevCard {
          heading
          description
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
        uiDesCard {
          heading
          description
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
        webDevFigureCard {
          figure
          heading
          description
        }
        uiDesFigureCard {
          figure
          heading
          description
        }
      }
    }
  }
`;
