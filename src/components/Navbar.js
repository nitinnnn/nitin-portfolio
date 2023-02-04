import React from "react";

import logo from "../assets/img/logo.svg"
import { Link } from "gatsby";

const Navbar = ()=>{
  return (
    <nav className="nav-wrap">
      <div className="logo-wrap">
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-links">
        <ul className="horizontal-nav-list">
          <li>
            <Link to={"/"} activeClassName="link-active">Home</Link>
          </li>
          <li>
            <Link to={"/portfolio"} activeClassName="link-active">Portfolio</Link>
          </li>
          <li>
            <Link to={"/about"} activeClassName="link-active">About</Link>
          </li>
          <li>
            <a href="" target="_blank">
              Contact
            </a>
          </li>
          <li className="colored">
            <a href="mailto:hey@nitinbhardwaj.me">hey@nitinbhardwaj.me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
