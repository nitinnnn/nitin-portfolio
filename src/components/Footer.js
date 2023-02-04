import * as React from "react";

import gatsby_logo from "../assets/img/gatsby.png"

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 upper-footer">
            <p>
              Nitin - Hey 👋🏻 Portfolio hand crafted using 
              <span>
                <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
                  <img src={gatsby_logo} alt="gatsby-logo"/>
                </a>
              </span>.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 upper-footer">
            <a href="mailto:hey@nitinbhardwaj.me" className="link-footer">
              hey@nitinbhardwaj.me
            </a>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 lower-footer">
            <small>
              ©{new Date().getFullYear()} - Nitin Bhardwaj | All Rights Reserved.
            </small>

            <a href="#">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
